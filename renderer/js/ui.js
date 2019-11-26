function itemName(item) {
	return item.replace(/\s+/g, '-');
}

function checkName(check) {
	return check.replace(/[^a-zA-Z]+/g, '-');
}

class UI {
	constructor() {}

	setState(state) {
		this.state = state;
		state.on('itemChange', this.handleItemChange.bind(this));
		state.on('checkChange', this.handleCheckChange.bind(this));

		Object.keys(state.items).forEach(item => {
			$('.item-container')
				.append(`<img src="file:///renderer/assets/items/${itemName(item)}.png" class="item ${item.type === 'whip' ? 'whip' : ''} item-not-owned" id="item-${itemName(item)}">`);
		});
		Object.keys(state.checks).forEach(check => {
			$('.check-container table ')
				.append(`<tr class="check not-in-logic" id="check-${checkName(check)}"><td>${check}</td><td class="logic-indicator">${!!state.checks[check].inLogic}</td></tr>`);
		});
	}

	handleItemChange(change) {
		const { item, isOwned } = change;
		const selector = `img#item-${itemName(item)}`;
		$(selector)[isOwned ? 'addClass' : 'removeClass']('item-owned');
		$(selector)[isOwned ? 'removeClass' : 'addClass']('item-not-owned');
	}

	handleCheckChange(change) {
		console.log(change);
		const { check, inLogic } = change;
		const selector = `tr#check-${checkName(check)}`;
		$(selector)[inLogic ? 'addClass' : 'removeClass']('in-logic');
		$(selector)[inLogic ? 'removeClass' : 'addClass']('not-in-logic');
		$(`${selector} td.logic-indicator`).text(!!inLogic);
	}
}

module.exports = new UI();