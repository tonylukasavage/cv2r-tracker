const checks = require('./js/data/checks');
const Emulator = require('./js/classes/Emulator');
const items = require('./js/data/items');
const state = require('./js/state');
const timer = require('./js/timer');
const ui = require('./js/ui');

// attach global state to objects
ui.setState(state);
timer.setState(state);

// TODO: have some settings to configure chosen emulator
const emu = new Emulator('fceux', 32);
emu.connect();

state.emit('timerStart');

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

	checks.forEach(check => {
		state.setCheck(check.name, !!check.logic(state));
	});
}, 1000);

