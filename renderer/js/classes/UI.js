class UI {
	constructor() {}

	setState(state) {
		this.state = state;
		state.on('itemChange', this.handleItemChange.bind(this));
	}

	handleItemChange(change) {
		console.log(change);
		$('body').append('<p>' + JSON.stringify(change) + '</p>');
	}
}

module.exports = new UI();