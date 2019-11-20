# cv2r-tracker

## Usage

> NOT YET IMPLEMENTED, BINARIES COMING SOON

## Developer Setup

This was a major pain in the ass, so just message me on our [discord](https://discord.gg/tuGjwHy) if you're brave enough to try and get stuck.

### Prereqs

* Windows (will not work on any other OS)
* node.js 10.11.0 32bit
	* This version of node.js matches the version embedded in the version of electron used in this application. Other versions of 10.x may work, but they are untested. Any version of node >10 will crash during `npm install` step.
	* [nvm-windows](https://github.com/coreybutler/nvm-windows) makes it easy to install nodejs versions

### Installation

Do not attempt to run `npm install` in the `cv2r-tracker` folder until you've executed the following steps:

1. Install current `python` from the [Microsoft Store](https://docs.python.org/3/using/windows.html#the-microsoft-store-package)
2. Install node-gyp with `npm install -g node-gyp`
3. Follow the "Option 2" steps found [here](https://github.com/nodejs/node-gyp#option-2) to get your Windows C++ build chain ready
4. Run `npm install`
5. Finally to verify the installation, run `npm start`

If everything worked, you should be greeted by the cv2r-tracker app!