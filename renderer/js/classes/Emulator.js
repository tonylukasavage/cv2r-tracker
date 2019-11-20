const memoryjs = require('memoryjs');
const { normalizeHex } = require('../util');

const emulators = [
	{ name: 'fceux', process: 'fceux.exe', arch: 32, pointerOffset: 0x3B1388 }
];

class Emulator {
	constructor(name, arch = 32) {
		const emu = emulators.find(e => e.name === name && e.arch === arch);
		if (!emu) {
			throw new Error(`Unsupported emulator: ${name} (${arch} bit)`);
		}
		Object.assign(this, emu);
	}

	connect() {
		try {
			this.po = memoryjs.openProcess(this.process);
			const { modBaseAddr } = this.po;
			this.baseOffset = parseInt(this
				.getBytes(modBaseAddr + this.pointerOffset, 4, true)
				.reverse()
				.join('')
			, 16);
		} catch (err) {
			console.error(err);
			process.exit(1);
		}
	}

	getBytes(offset, length, normalize = false) {
		const { handle } = this.po;
		let bytes = [];
		for (let i = 0; i < length; i++) {
			const byte = memoryjs.readMemory(handle, offset + i, memoryjs.BYTE);
			bytes.push(normalize ? normalizeHex(byte) : byte);
		}
		return bytes;
	}

	getGameByte(offset) {
		return this.getBytes(this.baseOffset + offset, 1)[0];
	}
}

module.exports = Emulator;