const items = [];

[
	'dagger',
	'silver knife',
	'golden knife',
	'holy water',
	'diamond',
	'sacred flame',
	'oak stake'
].forEach((weapon, index) => {
	items.push({
		name: weapon,
		offset: 0x4A,
		value: 1 << index,
		isOwned: false
	});
});

[
	'rib',
	'heart',
	'eyeball',
	'nail',
	'ring',
	'white crystal',
	'blue crystal',
	'red crystal'
].forEach((item, index) => {
	items.push({
		name: item,
		offset: 0x91,
		value: item === 'red crystal' ? 0x60 : 1 << index,
		isOwned: false
	});
});

[
	'silk bag',
	'magic cross',
	'laurels',
	'garlic'
].forEach((carry, index) => {
	const obj = {
		name: carry,
		offset: 0x92,
		value: 1 << index,
		isOwned: false
	};
	if (carry === 'laurels') { obj.count = 0x4C; }
	if (carry === 'garlic') { obj.count = 0x4D; }
	items.push(obj);
});

[
	'leather whip',
	'thorn whip',
	'chain whip',
	'morning star',
	'flame whip'
].forEach((whip, index) => {
	items.push({
		name: whip,
		offset: 0x434,
		value: index,
		comparison: 'equal',
		isOwned: whip === 'leather whip'
	});
});

module.exports = items;