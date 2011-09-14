function MainWindow(navController) {
	
	var window = Ti.UI.createWindow({
		title: 'Questions'
	});
	
	var table = new QuestionsTable(navController);
	window.add(table);
	
	navController.open(window);
	
	return window;
	
}

function QuestionsTable(navController) {
	
	var table = Ti.UI.createTableView();
	
	// Set up the data
	var httpClient = Ti.Network.createHTTPClient();
	
	httpClient.onload = function() {
		var response = this.responseText;
		var data = JSON.parse(response);
		
		var questions = data.query.results.Question;
		var rows = [];
		
		for(var i=0; i<questions.length; i++) {
			var question = questions[i];
			
        	var row = Ti.UI.createTableViewRow({
        		title: question.Subject,
        		question: question,
        		hasChild: true
        	});
        	
        	rows.push(row);
		}
		
		table.data = rows;		
	};

	// open the client
	httpClient.open('GET','http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20answers.search%20where%20query%3D%22cars%22%20and%20category_id%3D2115500137%20and%20type%3D%22resolved%22&format=json');
	
	// send the data
	httpClient.send();
	
	table.addEventListener('click', function (e) {
		
		var question = e.row.question;
		
		var window = new ShowQuestionWindow(question);
		
		navController.open(window);
		
	});
	
	return table;
	
}

function ShowQuestionWindow(question) {
	
	var window = Ti.UI.createWindow({
		title: question.Subject,
		layout: 'vertical',
		backgroundColor: 'grey'
	});
	
	var questionLabel = Ti.UI.createLabel({
		text: 'Question',
		width: 300,
		height: 30,
		top: 10
	});
	
	var questionTextArea = Ti.UI.createTextArea({
		value: question.Subject + '\r\n' + question.Content,
		top: 10,
		width: 300,
		height: 150
	});
	
	var answerLabel = Ti.UI.createLabel({
		text: 'Answer',
		width: 300,
		height: 30,
		top: 10
	});
	
	var answerTextArea = Ti.UI.createTextArea({
		value: question.ChosenAnswer,
		top: 20,
		width: 300,
		height: 150
	});
	
	window.add(questionLabel);
	window.add(questionTextArea);
	window.add(answerLabel);
	window.add(answerTextArea);
	
	return window;
	
}

exports.MainWindow = MainWindow;
