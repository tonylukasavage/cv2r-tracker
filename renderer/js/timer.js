const EventEmitter = require('events');

class Timer extends EventEmitter {
	constructor() {
		super();
	}

	setState(state, opts = {}) {
		this.state = state;
		this.elapsed = 0;
		this.elapsedOffset = 0;
		this.showMs = !!opts.showMs;
		state.on('timerStart', this.start.bind(this));
		state.on('timerStop', this.stop.bind(this));
		state.on('timerReset', this.reset.bind(this));
	}

	start() {
		this.startTime = process.hrtime();
		this.interval = setInterval(() => {
			this.elapsed = process.hrtime(this.startTime);
			this.render();
		}, 10);
	}

	stop() {
		// TODO: keep track of time elapsed, and time between restart, in case the
		// timer gets restarted
		if (this.interval) {
			clearInterval(this.interval);
		}
		this.interval = null;
	}

	reset() {
		if (this.interval) {
			clearInterval(this.interval);
		}
		this.interval = null;
		this.elapsed = 0;
		this.elapsedOffset = 0;
	}

	formatTime(hours, minutes, seconds, ms) {
		return (hours ? hours + ':' : '') +
			(hours ? pad(minutes) + ':' : (minutes ? minutes + ':' : '')) +
			(hours || minutes ? pad(seconds) : seconds ) +
			(this.showMs ? pad(ms, 3) : '');
	}

	render() {
		const [ sec, ns ] = this.elapsed;
		const hours = Math.floor(sec / 3600);
		const minutes = Math.floor(sec / 60) % 60;
		const seconds = sec % 60;
		const ms = Math.floor(ns / 1000000);
		$('span#timer-text').text(this.formatTime(hours, minutes, seconds, ms));
	}
}

function pad(num, size = 2) {
	let ret = num + '';
	while (ret.length < size) {
		ret = '0' + ret;
	}
	return ret;
}

module.exports = new Timer();