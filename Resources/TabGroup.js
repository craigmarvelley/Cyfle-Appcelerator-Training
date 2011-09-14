var ui = require('ui');
var Window = ui.Window;

function MainTabGroup() {
	
	// Create the first tab
	
	var window1 = new Window({
		backgroundColor: 'red',
		title: 'Red'
	});
	
	var tab1 = Ti.UI.createTab({
		window: window1,
		title: 'Red',
		icon: 'KS_nav_ui.png'
	});
	
	// Create the second tab
	
	var window2 = new Window({
		backgroundColor: 'blue',
		title: 'Blue'
	});
	
	var tab2 = Ti.UI.createTab({
		window: window2,
		title: 'Blue',
		icon: 'KS_nav_ui.png'
	});
	
	// Create the third tab
	
	var window3 = new Window({
		backgroundColor: 'green',
		title: 'Green'
	});
	
	var tab3 = Ti.UI.createTab({
		window: window3,
		title: 'Green',
		icon: 'KS_nav_ui.png'
	});
	
	var window4 = new Window({
		backgroundColor: 'orange',
		title: 'Orange'
	});
	
	var tab4 = Ti.UI.createTab({
		window: window4,
		title: 'Orange',
		icon: 'KS_nav_ui.png'
	});
	
	var window5 = new Window({
		backgroundColor: 'black',
		title: 'Black'
	});
	
	var tab5 = Ti.UI.createTab({
		window: window5,
		title: 'Black',
		icon: 'KS_nav_ui.png'
	});
	
	var window6 = new Window({
		backgroundColor: 'white',
		title: 'White'
	});
	
	var tab6 = Ti.UI.createTab({
		window: window6,
		title: 'White',
		icon: 'KS_nav_ui.png'
	});
	
	var tabGroup = Ti.UI.createTabGroup({
		allowUserCustomization: true
	});
	
	tabGroup.addTab(tab1);
	tabGroup.addTab(tab2);
	tabGroup.addTab(tab3);
	tabGroup.addTab(tab4);
	tabGroup.addTab(tab5);
	tabGroup.addTab(tab6);
	
	return tabGroup;
	
}

exports.MainTabGroup = MainTabGroup;