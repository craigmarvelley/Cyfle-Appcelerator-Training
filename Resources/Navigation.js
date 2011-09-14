var WindowWithNavigation = require('ui').WindowWithNavigation;

function MainWindow(navController) {
	
	var window = new WindowWithNavigation({
		title: 'First window',
		backgroundColor: 'yellow'
	}, navController
    );
    
    var button = new ui.Button({
    	width: 100,
    	height: 100,
    	title: 'First window'
    }, function (e) {
    	var newWindow = new SecondWindow(navController);
    });
    
    window.add(button);
    
	return window;
}

function SecondWindow(navController) {
	
	var window = new WindowWithNavigation({
		title: 'Second window',
		backgroundColor: 'green'
	}, navController
	);
	
	return window;
	
}

exports.MainWindow = MainWindow;