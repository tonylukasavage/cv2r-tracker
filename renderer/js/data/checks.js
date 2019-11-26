const checks = [
	{
		name: 'Jova - White Crystal Merchant',
		type: 'merchant',
		screen: {
			objset: 0x0,
			area: 0x0,
			submap: 0x0
		},
		logic() { return true; }
	},
	{
		name: 'Aljiba - Blue Crystal Dude',
		type: 'crystal dude',
		subtype: 'free',
		screen: {
			objset: 0x0,
			area: 0x2,
			submap: 0x0
		},
		logic() { return true; }
	},
	{
		name: 'Alba - Red Crystal Dude',
		type: 'crystal dude',
		subtype: 'free',
		screen: {
			objset: 0x0,
			area: 0x3,
			submap: 0x0
		},
		logic() { return true; }
	},
	{
		name: 'Jova - Thorn Whip Merchant',
		type: 'merchant',
		screen: {
			objset: 0x0,
			area: 0x8,
			submap: 0x0
		},
		logic() { return true; }
	},
	{
		name: 'Jova - Holy Water Merchant',
		type: 'merchant',
		screen: {
			objset: 0x0,
			area: 0x9,
			submap: 0x0
		},
		logic() { return true; }
	},
	{
		name: 'Veros - Dagger Merchant',
		type: 'merchant',
		screen: {
			objset: 0x0,
			area: 0xA,
			submap: 0x1
		},
		logic: nailOrHolyWater
	},
	{
		name: 'Veros - Chain Whip Merchant',
		type: 'merchant',
		screen: {
			objset: 0x0,
			area: 0xB,
			submap: 0x0
		},
		logic(state) { return state.items['holy water'].isOwned; }
	},
	{
		name: 'Aljiba - Garlic Merchant (1st floor)',
		type: 'merchant',
		screen: {
			objset: 0x0,
			area: 0xC,
			submap: 0x0
		},
		logic(state) { return state.items['holy water'].isOwned; }
	},
	{
		name: 'Aljiba - Laurels Merchant (2nd floor)',
		type: 'merchant',
		screen: {
			objset: 0x0,
			area: 0xE,
			submap: 0x1
		},
		logic(state) { return state.items['holy water'].isOwned; }
	},
	{
		name: 'Alba - Garlic Merchant (top floor)',
		type: 'merchant',
		screen: {
			objset: 0x0,
			area: 0xF,
			submap: 0x1
		},
		logic(state) { return state.items['holy water'].isOwned; }
	},
	{
		name: 'Alba - Laurels Merchant (2nd floor)',
		type: 'merchant',
		screen: {
			objset: 0x0,
			area: 0x10,
			submap: 0x1
		},
		logic: nailOrHolyWater
	},
	{
		name: 'Ondol - Morning Star Merchant',
		type: 'merchant',
		screen: {
			objset: 0x0,
			area: 0x11,
			submap: 0x1
		},
		logic() { return true; }
	},
	{
		name: 'Ondol - Laurels Merchant (2nd floor)',
		type: 'merchant',
		screen: {
			objset: 0x0,
			area: 0x13,
			submap: 0x2
		},
		logic: nailOrHolyWater
	},
	{
		name: 'Doina - Laurels Merchant (2nd floor)',
		type: 'merchant',
		screen: {
			objset: 0x0,
			area: 0x15,
			submap: 0x0
		},
		logic(state) { return state.items['red crystal'].isOwned; }
	},
	{
		name: 'Laruba - Free Laurels Dude',
		type: 'merchant',
		subtype: 'free',
		screen: {
			objset: 0x1,
			area: 0x6,
			submap: 0x1
		},
		logic(state) {
			return nailOrHolyWater(state) &&
				state.items['red crystal'].isOwned &&
				state.items['laurels'].isOwned;
		}
	},
	{
		name: 'Laruba - Merchant',
		type: 'merchant',
		screen: {
			objset: 0x1,
			area: 0x6,
			submap: 0x1
		},
		logic(state) {
			return nailOrHolyWater(state) &&
				state.items['red crystal'].isOwned &&
				state.items['laurels'].isOwned;
		}
	},
	{
		name: 'Laruba - Camilla',
		type: 'camilla',
		subtype: 'boss',
		screen: {
			objset: 0x1,
			area: 0x6,
			submap: 0x2
		},
		logic(state) {
			return nailOrHolyWater(state) &&
				state.items['red crystal'].isOwned &&
				state.items['laurels'].isOwned;
		}
	},
	{
		name: 'Laruba - Orb',
		type: 'orb',
		screen: {
			objset: 0x1,
			area: 0x6,
			submap: 0x3
		},
		logic(state) {
			return nailOrHolyWater(state) &&
				state.items['red crystal'].isOwned &&
				state.items['laurels'].isOwned &&
				state.items['oak stake'].isOwned;
		}
	},
	{
		name: 'Berkeley - Merchant',
		type: 'merchant',
		screen: {
			objset: 0x1,
			area: 0x7,
			submap: 0x1
		},
		logic(state) { return state.items['white crystal'].isOwned; }
	},
	{
		name: 'Berkeley - Orb',
		type: 'orb',
		screen: {
			objset: 0x1,
			area: 0x7,
			submap: 0x1
		},
		logic(state) {
			return state.items['white crystal'].isOwned &&
				state.items['oak stake'].isOwned;
		}
	},
	{
		name: 'Rover - Merchant',
		type: 'merchant',
		screen: {
			objset: 0x1,
			area: 0x8,
			submap: 0x1
		},
		logic(state) { return state.items['blue crystal'].isOwned; }
	},
	{
		name: 'Rover - Orb',
		type: 'orb',
		screen: {
			objset: 0x1,
			area: 0x8,
			submap: 0x1
		},
		logic(state) {
			return state.items['blue crystal'].isOwned &&
				state.items['oak stake'].isOwned;
		}
	},
	{
		name: 'Brahm - Merchant',
		type: 'merchant',
		screen: {
			objset: 0x1,
			area: 0x9,
			submap: 0x0
		},
		logic(state) { return state.items['heart'].isOwned; }
	},
	{
		name: 'Brahm - Death',
		type: 'death',
		subtype: 'boss',
		screen: {
			objset: 0x1,
			area: 0x9,
			submap: 0x2
		},
		logic(state) { return state.items['heart'].isOwned; }
	},
	{
		name: 'Brahm - Orb',
		type: 'orb',
		screen: {
			objset: 0x1,
			area: 0x9,
			submap: 0x3
		},
		logic(state) {
			return state.items['heart'].isOwned &&
				state.items['oak stake'].isOwned;
		}
	},
	{
		name: 'Bodley - Merchant',
		type: 'merchant',
		screen: {
			objset: 0x1,
			area: 0xA,
			submap: 0x1
		},
		logic(state) {
			return nailOrHolyWater(state) &&
				state.items['red crystal'].isOwned;
		}
	},
	{
		name: 'Bodley - Orb',
		type: 'orb',
		screen: {
			objset: 0x1,
			area: 0xA,
			submap: 0x1
		},
		logic(state) {
			return nailOrHolyWater(state) &&
				state.items['red crystal'].isOwned &&
				state.items['oak stake'].isOwned;
		}
	},
	{
		name: 'Dabi\'s Path - Sacred Flame',
		type: 'sacred flame',
		screen: {
			objset: 0x2,
			area: 0x3,
			submap: 0x1
		},
		logic: nailOrHolyWater
	},
	{
		name: 'Camilla Cemetery - Secret Merchant',
		type: 'secret merchant',
		screen: {
			objset: 0x3,
			area: 0x0,
			submap: 0x0
		},
		logic(state) { return state.items['garlic'].isOwned; }
	},
	{
		name: 'Storigoi Graveyard - Graveyard Duck',
		type: 'secret merchant',
		screen: {
			objset: 0x3,
			area: 0x1,
			submap: 0x0
		},
		logic(state) { return state.items['garlic'].isOwned; }
	},
	{
		name: 'Debious Woods - Flame Whip Dude',
		type: 'merchant',
		subtype: 'free',
		screen: {
			objset: 0x3,
			area: 0x3,
			submap: 0x2
		},
		logic(state) {
			return nailOrHolyWater(state) &&
				state.items['red crystal'].isOwned;
		}
	},
	{
		name: 'Vrad Mountain - Diamond Dude',
		type: 'merchant',
		subtype: 'free',
		screen: {
			objset: 0x4,
			area: 0x0,
			submap: 0x0
		},
		logic(state) { return state.items['heart'].isOwned; }
	},
	{
		name: 'Castlevania - Dracula',
		type: 'dracula',
		screen: {
			objset: 0x5,
			area: 0x0,
			submap: 0x1
		},
		logic(state) {
			return state.items['holy water'].isOwned &&
				state.items['magic cross'].isOwned &&
				state.items['red crystal'].isOwned &&
				state.items['rib'].isOwned &&
				state.items['heart'].isOwned &&
				state.items['eyeball'].isOwned &&
				state.items['nail'].isOwned &&
				state.items['ring'].isOwned;
		}
	}
];

checks.forEach(check => {
	check.checked = false;
});

function nailOrHolyWater(state) {
	return state.items['holy water'].isOwned || state.items['nail'].isOwned;
}

module.exports = checks;