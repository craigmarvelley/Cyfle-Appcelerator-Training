function MainWindow(navController) {
	
	var window = Ti.UI.createWindow({
		title: 'Bill Gates'
	});
	
	var tableview = new TableView(navController);
	
	window.add(tableview);
	
	navController.open(window);
	
	return window;
	
}

function TableView(navController) {
	
    var tableview = Ti.UI.createTableView();
    
    tableview.addEventListener('click', function(e) {
  
    });
    
    var httpClient = Ti.Network.createHTTPClient();
    
    httpClient.onload = function() {
    	var data = JSON.parse(this.responseText);
    	var rows = [];
    	
    	for(var i=0; i<data.length; i++) {
    		
    		var row = Ti.UI.createTableViewRow({
    			title: data[i].text
    		});
    		
    		rows.push(row);
    		
    	}
    	
    	tableview.data = rows;
    }
    
    httpClient.open("GET", "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=billgates");
    
    httpClient.send();
    
    return tableview;
	
}

exports.MainWindow = MainWindow;