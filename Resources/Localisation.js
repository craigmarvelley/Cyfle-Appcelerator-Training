// This module is a custom translation approach because iOS doesn't support Welsh

var translations = {
	english: {
		mainWindowTitle: 'My window title',
		
	},
	welsh: {
		mainWindowTitle: 'Ffenestr tytle'
	}
};

// Use english by default
var locale = 'english';

function translate (stringToTranslate) {
	return translations[locale][stringToTranslate];
	
}

function changeLocale(_locale) {
	locale = _locale;
}

exports.translate = translate;
exports.changeLocale = changeLocale;
