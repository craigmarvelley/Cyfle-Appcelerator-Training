function trackLocation(e) {
	// Print out the event to the console. See the documentation for details of the event
	// The KitchenSink has a good example of this
	Ti.API.info(e);
}

function startTracking() {
	Ti.Geolocation.addEventListener('location', trackLocation);
}

function stopTracking() {
	Ti.Geolocation.removeEventListener('location', trackLocation);
}

exports.startTracking = startTracking;
exports.stopTracking = stopTracking;