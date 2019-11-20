const items = require('../items');

function itemName(item) {
	return item.replace(/\s+/g, '-');
}

class UI {
	constructor() {
		items.forEach(item => {
			$('.item-container')
				.append(`<img src="file:///renderer/assets/items/${itemName(item.name)}.png" class="item item-not-owned" id="item-${itemName(item.name)}">`);
		});
	}

	setState(state) {
		this.state = state;
		state.on('itemChange', this.handleItemChange.bind(this));
	}

	handleItemChange(change) {
		console.log(change);
		// $('body').append('<p>' + JSON.stringify(change) + '</p>');
		const { item, isOwned } = change;
		const selector = `img#item-${itemName(item)}`;
		$(selector)[isOwned ? 'addClass' : 'removeClass']('item-owned');
		$(selector)[isOwned ? 'removeClass' : 'addClass']('item-not-owned');
	}
}

module.exports = new UI();