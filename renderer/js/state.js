const EventEmitter = require('events');
const items = require('./data/items');
const checks = require('./data/checks');

class State extends EventEmitter {
	constructor() {
		super();

		this.items = JSON.parse(JSON.stringify(items)).reduce((a,item)=> {
			a[item.name] = { isOwned: item.isOwned };
			return a;
		}, {});

		this.checks = {};
		checks.forEach(check => {
			this.checks[check.name] = {
				inLogic: !!check.logic(this),
				checked: false
			};
		});

		console.log('CHECKS');
		console.log(this.checks);
	}

	getItem(key) {
		return this.items[key];
	}

	setItem(item, isOwned) {
		const changed = this.items[item].isOwned !== isOwned;
		this.items[item].isOwned = isOwned;
		if (changed) {
			this.emit('itemChange', { item, isOwned });
		}
	}

	setCheck(check, inLogic) {
		const changed = this.checks[check].inLogic !== inLogic;
		this.checks[check].inLogic = inLogic;
		if (changed) {
			this.emit('checkChange', { check, inLogic });
		}
	}
}

module.exports = new State();