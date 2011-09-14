function MainWindow(navController) {
	
	var window = Ti.UI.createWindow({
		tite: 'Cardiff'
	});
	
	var mapview = new MapView();
	
	window.add(mapview);
	
	navController.open(window);
	
	return window;
	
}

function MapView() {
	
	var annotation = Ti.Map.createAnnotation({
		latitude: 51.47828,
	    longitude: -3.18243
	});
	
	var mapview = Ti.Map.createView({
		region: {
			latitude: 51.47828,
			longitude: -3.18243,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01			
		},
		animate:true,
    	regionFit:true,
    	annotations: [annotation]
	});
	
	return mapview;
	
}

exports.MainWindow = MainWindow;