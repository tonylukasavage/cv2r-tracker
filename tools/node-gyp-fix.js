const fs = require('fs').promises;
const path = require('path');

const NODE_GYP_INSTALL_FILE = path.join(__dirname, '..', 'node_modules', 'node-gyp',
	'lib', 'install.js');

(async function() {
	try {
		const content = await fs.readFile(NODE_GYP_INSTALL_FILE, 'utf8');
		await fs.writeFile(NODE_GYP_INSTALL_FILE, content.replace(
			"var archs = ['ia32', 'x64', 'arm64']",
			"var archs = ['ia32', 'x64']"
		));
		console.log('Successfully removed arm64 from node-gyp configuration');
	} catch (err) {
		console.error(err.stack);
		process.exit(1);
	}
})();