// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#FFF');

var ui = require('ui');
var NavigationController = require('NavigationController').NavigationController;
var navController = new NavigationController;

//==============================================

// Uncomment this for the Twitter example
//var Twitter = require('Twitter');
//var mainWindow = new Twitter.MainWindow( navController );

//==============================================

// Uncomment this for the Geolocation example
// var Geolocation = require('Geolocation');
// Geolocation.startTracking();

//==============================================

// Uncomment this for the Localisation example
//var Localisation = require('Localisation');

// Uncomment the line below for Welsh locale
// Localisation.changeLocale('welsh');

// var mainWindow = new ui.WindowWithNavigation({
	// title: Localisation.translate('mainWindowTitle')
// }, navController);

//==============================================

// Uncomment this for the Beatles example
// var Beatles = require('Beatles');
// var mainWindow = new Beatles.MainWindow( navController );

//==============================================

// Uncomment this for the Yahoo example
// var Yahoo = require('Yahoo');
// var mainWindow = new Yahoo.MainWindow( navController );

//==============================================

// Uncomment this for the Maps example
// var Maps = require ('Maps');
// var mainWindow = new Maps.MainWindow( navController );

//==============================================

// Uncomment this for the Navigation example
// var Navigation = require('Navigation');
// var mainWindow = new Navigation.MainWindow (navController);

//==============================================

// Uncomment this for the TabGroup example
var MainTabGroup = require('TabGroup').MainTabGroup;
var tabGroup = new MainTabGroup();
tabGroup.open();
