# cv2r-tracker

## Developer Setup

This was a major pain in the ass, so just message me on our [discord](https://discord.gg/tuGjwHy) if you're brave enough to try and get stuck.

### Prereqs

* Windows (will not work on any other OS)
* node.js 10.x
	* `npm install` will crash if you use node.js 11+
	* [nvm-windows](https://github.com/coreybutler/nvm-windows) makes it easy to install nodejs versions

### Installation

Do not attempt to run `npm install` in the `cv2r-tracker` folder until you've executed the following steps:

* Install current `python` from the [Microsoft Store](https://docs.python.org/3/using/windows.html#the-microsoft-store-package)
* Install node-gyp with `npm install -g node-gyp`
* Follow the "Option 2" steps found [here](https://github.com/nodejs/node-gyp#option-2) to get your Windows C++ build chain ready
* Run `npm install`
* Edit `.\node_modules\node-gyp\lib\install.js` and change the line `var archs = ['ia32', 'x64', 'arm64']` to `var archs = ['ia32', 'x64']`, then save the file
* Run `.\node_modules\.bin\electron-rebuild.cmd`
* Finally to verify the installation, run `npm start`

If everything worked, you should be greeted by the cv2r-tracker app!