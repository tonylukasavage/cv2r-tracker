const { app, BrowserWindow } = require('electron');

// Have to do this otherwise OBS won't render it
app.disableHardwareAcceleration();

function createWindow () {
	// Create the browser window.
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		},
		// transparent: true,
		frame: true
	});

	// and load the index.html of the app.
	win.loadFile('renderer/index.html');
}

app.on('ready', createWindow);