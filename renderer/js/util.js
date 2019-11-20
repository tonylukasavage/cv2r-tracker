exports.normalizeHex = function normalizeHex(value) {
	return (value < 0x10 ? '0' + value.toString(16) : value.toString(16)).toUpperCase();
};