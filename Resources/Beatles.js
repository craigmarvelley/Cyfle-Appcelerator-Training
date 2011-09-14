function MainWindow(navController) {
	
	var window = Ti.UI.createWindow({
		title: 'The Beatles'
	});
	
	var tableview = new TableView(navController);
	
	window.add(tableview);
	
	navController.open(window);
	
	return window;
	
}

function TableView(navController) {
	
    var tableview = Ti.UI.createTableView({
    	data: [{
    		title: 'Paul',
    		memberInfo : {
    			name: 'Paul McCartney',
    			image: 'http://musically.com/blog/wp-content/uploads/2010/09/paul-mccartney.jpg',
    			instrument: 'Bass'
    		},
    		hasChild: true
    	},{
    		title: 'John',
    		memberInfo : {
    			name: 'John Lennon',
    			image: 'http://www.friendship-quotes.info/wp-content/uploads/2010/10/john-lennon.jpe',
    			instrument: 'Guitar'
    		},
    		hasChild: true
    	},{
    		title: 'George',
    		memberInfo : {
    			name: 'George Harrison',
    			image: 'http://images.wikia.com/lyricwiki/images/d/da/GeorgeHarrison.jpg',
    			instrument: 'Guitar'
    		},
    		hasChild: true
    	},{
    		title: 'Ringo',
    		memberInfo : {
    			name: 'RIngo Starr',
    			image: 'http://www.totaldrumsets.com/image-files/ringo-starr15.jpg',
    			instrument: 'Drums'
    		},
    		hasChild: true
    	}]
    });
    
    tableview.addEventListener('click', function(e) {
    	
    	var row = e.row;
    	var title = row.title;
    	
    	var window = new MemberWindow( row.memberInfo );
    	
    	navController.open(window);
    	
    });
    
    return tableview;
	
}

function MemberWindow( memberInfo ) {
	
	var window = Ti.UI.createWindow({
		title: memberInfo.name,
		backgroundColor: 'white',
		layout: 'vertical'
	});
	
	var imageView = Ti.UI.createImageView({
		image: memberInfo.image,
		width: 300,
		height: 200
	});
	
	var label = Ti.UI.createLabel({
		text: 'Instrument played: ' + memberInfo.instrument,
		width: 200,
		height: 40,
		top: 20
	});
	
	window.add(imageView);
	window.add(label)
	
	return window;
	
}

exports.MainWindow = MainWindow;
