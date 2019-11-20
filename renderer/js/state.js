const EventEmitter = require('events');
const items = require('./items');

class State extends EventEmitter {
	constructor() {
		super();
		this.items = JSON.parse(JSON.stringify(items)).reduce((a,item)=> {
			a[item.name] = { isOwned: item.isOwned };
			return a;
		}, {});
		this.locations = {};
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
}

module.exports = new State();