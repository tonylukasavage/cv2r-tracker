const Emulator = require('./js/classes/Emulator');
const items = require('./js/items');
const state = require('./js/state');
const ui = require('./js/classes/UI');

// setup UI
ui.setState(state);

// TODO: have some settings to configure chosen emulator
const emu = new Emulator('fceux', 32);
emu.connect();

console.log('start loop...');
setInterval(function() {
	items.forEach(item => {
		const byte = emu.getGameByte(item.offset);
		const isOwned = !!(item.comparison === 'equal' ?
			item.value === byte :
			(item.value & byte) === item.value
		);
		state.setItem(item.name, isOwned);
	});
}, 1000);

