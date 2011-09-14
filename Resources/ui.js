function View(args) {
	return Ti.UI.createView(args);
}

function Window(args) {
	return Ti.UI.createWindow(args);
}

function Label(args) {
	return Ti.UI.createLabel(args);
}

function TextArea(args) {
	return Ti.UI.createTextArea(args);
}

function TextField(args) {
	return Ti.UI.createTextField(args);
}

function WebView(args) {
	return Ti.UI.createWebView(args);
}

function Button(args, clickHandler) {
	var button = Ti.UI.createButton(args);
	
	button.addEventListener('click', clickHandler);
	
	return button;
}

function Toolbar(args) {
	return Ti.UI.createToolbar(args);
}

function WindowWithNavigation(args, navController)  {
	
	var window = new Window(args);
	
	navController.open(window);
	
	return window;
	
}

// EXPORTS
exports.View = View;
exports.Window = Window;
exports.Label = Label;
exports.TextField = TextField;
exports.TextArea = TextArea;
exports.WebView = WebView;
exports.Button = Button;
exports.Toolbar = Toolbar;
exports.WindowWithNavigation = WindowWithNavigation;
