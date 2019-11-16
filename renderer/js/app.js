const items = require('./js/items');
const memoryjs = require('memoryjs');

console.log(__dirname);

const processName = 'fceux.exe';
const basePointer = 0x003B1388;

function normalizeHex(value) {
	return (value < 0x10 ? '0' + value.toString(16) : value.toString(16)).toUpperCase();
}

function getPointer(po, addr) {
	const { handle, modBaseAddr } = po;
	let pointer = [];
	for (let i = 0; i < 4; i++) {
		const value = memoryjs.readMemory(
			handle,
			modBaseAddr + addr + i,
			memoryjs.BYTE
		);
		pointer.push(normalizeHex(value));
	}
	pointer.reverse();
	return parseInt(pointer.join(''), 16);
}



(async function() {
	console.log(`Opening ${processName} process...`);
	const po = memoryjs.openProcess(processName);
	console.log(po);

	const gamePointer = getPointer(po, basePointer);
	console.log(gamePointer.toString(16));
	function getByte(offset) {
		return memoryjs.readMemory(po.handle, gamePointer + offset, memoryjs.BYTE);
	}

	console.log('start loop...');
	setInterval(function() {
		items.forEach(item => {
			const byte = getByte(item.offset);
			const isOwned = !!(item.comparison === 'equal' ?
				item.value === byte :
				(item.value & byte) === item.value
			);
			if (isOwned) {
				console.log(item.name);
			}
		});
	}, 1000);

	// console.log({
	// 	gamePointer,
	// 	hp: (gamePointer + 0x80).toString(16)
	// });
	// console.log(getByte(0x80).toString(16));
})();
