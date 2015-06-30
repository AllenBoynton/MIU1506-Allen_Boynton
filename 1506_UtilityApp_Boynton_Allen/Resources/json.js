// Allen Boynton
// Miu 1506
// json data

var top5 ={	
		'theTitle': {
				'selenaGomez': {
						'title'		: 'Good for You (feat. A$AP Rocky) - Single',
						'artist'	: 'Selena Gomez',
						'time'		: 'Time: 3:41',
						'genre'		: 'Genre: Pop',
						'released'	: 'Released June 22, 2015',
						'label'		: 'Interscope Records',			
						'rating'	: 'Rating: #2 Rated 4.5 out of 5 stars.',
						'image'		: 'images/Good_for_you.jpg',
						'url'		: 'https://www.youtube.com/watch?v=DR4FJQ4dkY4'
					},
					
				'omi': {
						'title'		: 'Cheerleader (Felix Jaehn Remix Radio Edit) - Single',
						'artist'	: 'Omi',
						'time'		: 'Time: 3:00',
						'genre'		: 'Genre: Pop',
						'released'	: 'Released May 20, 2014',
						'label'		: 'Ultra Records',			
						'rating'	: 'Rating: #2 Rated 4.5 out of 5 stars.',
						'image'		: 'images/cheerleader.jpg',
						'url'		: 'https://www.youtube.com/watch?v=kDX4Eezxiyk'
					},
					
				'rachelPlatten': {
						'title'		: 'Fight Song',
						'artist'	: 'Rachel Platten',
						'time'		: 'Time: 3:23',
						'genre'		: 'Genre: Pop',
						'released'	: 'Released May 11, 2015',
						'label'		: 'Columbia Records',			
						'rating'	: 'Rating: #3 Rated 4 out of 5 stars.',
						'image'		: 'images/fightsong.jpg',
						'url'		: 'https://www.youtube.com/watch?v=xo1VInw-SKc'
					},
					
				'theWeeknd': {
						'title'		: 'Can\'t Feel My Face - Single',
						'artist'	: 'The Weeknd',
						'time'		: 'Time: 3:35',
						'genre'		: 'Genre: R&B/Soul',
						'released'	: 'Released June 8, 2015',
						'label'		: 'The Weeknd XO',			
						'rating'	: 'Rating: #4 Rated 4.5 out of 5 stars.',
						'image'		: 'images/theweeknd.jpg',
						'url'		: 'https://www.youtube.com/watch?v=dqt8Z1k0oWQ'
					},
					
				'taylorSwift': {
						'title'		: 'Bad Blood (feat. Kendrick Lamar) - Single',
						'artist'	: 'Taylor Swift',
						'time'		: 'Time: 3:19',
						'genre'		: 'Genre: Pop',
						'released'	: 'Released May 17, 2015',
						'label'		: 'Big Machine Records, LLC',			
						'rating'	: 'Rating: #5 Rated 4 out of 5 stars.',
						'image'		: 'images/badblood.png',
						'url'		: 'https://www.youtube.com/watch?v=QcIy9NiNbmo'
					}
		}		
};

// Function for logging in
var getRegistered = function(){	
	var registerWindow = Ti.UI.createWindow ({
		backgroundColor: 'black',
		title: 'Registration'
	});
	
	// Aesthetic header
	var header = Ti.UI.createLabel ({
		backgroundColor: 'white',
		text: 'Welcome to Spiral Records',
		top: 0,
		height: 30,
		width: '100%',
		color: '#007aff',
		textAlign: 'center',
		font: {fontSize: 17, fontFamily:'LobsterTwo-Italic'}
	});
	
	// Create field1
	var textField1 = Ti.UI.createTextField ({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: header.top + header.height + 40,
		height: 30,
		left: 100,
		right: 120
	});
	
	//Text for field1
	var fullName = Ti.UI.createLabel ({
		text: '*Full Name ',
		color: 'white',
		font: {fontSize: 16, fontFamily:'LobsterTwo-BoldItalic'},
		top: header.top + header.height + 45,
		left: 10
	});
	
	// Input hint text for full name
	var inputHint1 = Ti.UI.createLabel ({
		text: 'Enter first and last name',
		color: 'white',
		font: {fontSize: 10},
		top: textField1.top + textField1.height + 2,
		left: 100
	});
	
	// Create field2
	var textField2 = Ti.UI.createTextField ({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: textField1.top + textField1.height + 30,
		height: 30,
		left: 100,
		right: 100
	});
	
	//Text for field2
	var userName = Ti.UI.createLabel ({
		text: '*Username ',
		color: 'white',
		font: {fontSize: 16, fontFamily:'LobsterTwo-BoldItalic'},
		top: textField1.top + textField1.height + 35,
		left: 10
	});
	
	// Input hint text for username
	var inputHint2 = Ti.UI.createLabel ({
		text: 'Enter a username between 6 and 12 characters',
		color: 'white',
		font: {fontSize: 10},
		top: textField2.top + textField2.height + 2,
		left: 100
	});
	
	// Create field3
	var textField3 = Ti.UI.createTextField ({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: textField2.top + textField2.height + 30,
		height: 30,
		left: 100,
		right: 100
	});
	
	//Text for field3
	var password1 = Ti.UI.createLabel ({
		text: '*Password ',
		color: 'white',
		font: {fontSize: 16, fontFamily:'LobsterTwo-BoldItalic'},
		top: textField2.top + textField2.height + 35,
		left: 10
	});
	
	// Input hint text for password
	var inputHint3 = Ti.UI.createLabel ({
		text: 'Enter a password between 6 and 12 characters',
		color: 'white',
		font: {fontSize: 10},
		top: textField3.top + textField3.height + 2,
		left: 100
	});
	
	// Create field4
	var textField4 = Ti.UI.createTextField ({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: textField3.top + textField3.height + 30,
		height: 30,
		left: 100,
		right: 100
	});
	
	//Text for field4
	var password2 = Ti.UI.createLabel ({
		text: '*Password ',
		color: 'white',
		font: {fontSize: 16, fontFamily:'LobsterTwo-BoldItalic'},
		top: textField3.top + textField3.height + 35,
		left: 10
	});
	
	// Input hint text for password2
	var inputHint4 = Ti.UI.createLabel ({
		text: 'Verify password',
		color: 'white',
		font: {fontSize: 10},
		top: textField4.top + textField4.height + 2,
		left: 100
	});
	
	// Sign In button
	var enterButton = Ti.UI.createButton ({
		title: 'Enter',
		backgroundColor: '#ef662f',
		color: 'white',
		font: {fontSize: 18, fontFamily:'LobsterTwo-BoldItalic'},
		borderRadius: 4,
		top: textField4.top + textField4.height + 50,
		left: 100,
		right: 160
	});
	
	// Input hint text for required info
	var required = Ti.UI.createLabel ({
		text: '* Required Information',
		color: '#dfdfdf',
		font: {fontSize: 11, fontWeight: 'bold'},
		top: textField4.top + textField4.height + 92,
		left: 100
	});
	
	// Add image to page
	var image = Ti.UI.createImageView ({
		image: 'images/microphone.jpg',
		height: 240,
		bottom: 50,
		width: '100%'
	});
	
	// Escape button
	var exit2 = Ti.UI.createButton({
		backgroundColor: '#dfdfdf',
    	title: 'Exit',
    	color: '#007aff',
    	font: {fontSize: 20, fontWeight: 'bold'},
    	width: '100%',
    	height: 50,
    	bottom:0,
    	borderTop:true,
    	borderBottom:false
	});
			
	registerWindow.add(header, textField1, fullName, inputHint1, textField2, userName, inputHint2, textField3, password1, inputHint3, textField4, password2, inputHint4, image, enterButton, required, exit2);
	navWindow.openWindow(registerWindow);
	exit2.addEventListener('click', function(){ alert('Are you sure you want to log off?'); });
	enterButton.addEventListener('click', getSongs);
};
	
// Function for music list tableview
var getSongs = function(){	
	var songWindow = Ti.UI.createWindow ({
		backgroundColor: 'black',
		title: 'Top 5'
	});
	
	// Aesthetic header
	var header = Ti.UI.createLabel ({
		backgroundColor: 'white',
		text: 'Based on your listening',
		top: 0,
		height: 30,
		width: '100%',
		color: '#007aff',
		textAlign: 'center',
		font: {fontSize: 17, fontFamily:'LobsterTwo-Italic'}
	});
	
	var song1 = Ti.UI.createButton ({
		backgroundColor: 'white',
		top: header.top + header.height + 30,
		height: 75,
		width: '100%'				
	});

	var song1Text = Ti.UI.createLabel ({
		text: top5.theTitle.artist,
		font: {fontSize: 18, fontWeight: 'bold', fontFamily:'LobsterTwo-BoldItalic'},
		color: '007aff'
	});
  
	var image1 = Ti.UI.createImageView ({
		image: 'images/Good_for_you.jpg',
		height: '100%',
		left: 5
	});
	
	// Code for top 5 window
	song1.add(song1Text, image1);
	songWindow.add(header, song1);
	navWindow.openWindow(songWindow);
	loginButton.addEventListener('click', getSongs);
	
};	
		
// Album details
var getDetail = function(){
	var detailWindow = Ti.UI.createWindow ({
		title: this.artist,
		backgroundColor: 'black' 
	});
	var detailText = Ti.UI.createLabel ({
		text: this.title,
		top: 30,
		left: 10,
		right: 10
	});
	
	detailWindow.add(detailText);
	navWindow.openWindow(detailWindow);
};

register.addEventListener('click', getRegistered);
loginButton.addEventListener('click', getSongs);
