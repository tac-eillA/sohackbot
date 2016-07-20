

//add slack token to give access to channel
var slackToken = 'xoxb-60352104566-nfbp7ZX6QJl2QjaFsSfoEvjp';

//import required libraries
var Botkit = require('botkit');
var Slackbot = require('slackbots');
var Slack = require('slack-node');

// create listener
var listener = Botkit.slackbot({
	debug: false
});

//create sender
var sender = new Slackbot({
	token: slackToken,
	name: 'SoHacksBot'
});

listener.spawn({
	token: slackToken,
}).startRTM()

sender.on('start', function(){
	// set up basic params
	var params = {
		icon_emoji: ':floppy_disk:'
	};
	sender.postMessageToChannel('general', 'Welcome to SoHack 2016!', params);
});
var params = {
		icon_emoji: ':floppy_disk:'
	};

listener.hears('!info',['direct_message','direct_mention','mention'],function(bot,message){
	bot.reply(message, '*Hi thank you for asking SoHacks Bot for the frequently asked questions!*\n\n*What if I don\'t have a team?*\nTeams are not required to participate for prizes. If you have a team, the max number of participents is 4 people.\n*How do I get help from a mentor?* There are two ways to get in contact with a mentor, either you can physcially find one or by sending a message to SoHacks Bot simply containing !help and the language you need help with/problem and a mentor will get in contact with you!\n*I want to build ____, how do I do it?*\nWe recommend that all beginner coders attend workshops in order to gain the basics needed to create a hack. If you have any problems or questions please contact a mentor.\n*How can I sign up for workshops?*\nSign ups will be done through the devpost website\n*How do I connect to Wifi/ my wifi isn\’t working?*\nA password will be given out at opening ceremonies for the wifi. If you still have problems please go to the check in table for help or find a mentor.\n*My laptop isn\’t working*\nAsk others around you for help or go to the laptop check out area for a loaner laptop.\n*How do I submit my hack?*\nOn Devpost you can submit a hack. There you make an account and register for SoHacks. Come submission you can upload your project and please fill out all of the questions to the best of your ability.\n*Who do I talk to if I need urgent help?*\nIf you need immediate help ask a mentor or a volunteer. If you cannot find them ask one of the SoHacks team members or go to the check in table.\n*Have a question you don\'t see an answer to?*\nPost it in the general slack page, mentors and volunteers will frequent the chat. Or you can find one out in the wild and ask them there!');

});

listener.hears('!help (.*)',['direct_message','direct_mention','mention'],function(bot,message){
	bot.reply(message, 'You have requested help, the mentors have been notified and you will be contacted shortly.');
	bot.api.users.info({user: message.user}, function(err, info){
		sender.postMessageToChannel('mentor', 'User: ' + info.user.name+ ' has a question:\n' + message.text + '', params);
	});
	

});

listener.hears('!tools',['direct_message','direct_mention','mention'],function(bot,message){
	bot.reply(message, 'If you are looking for a collection of useful programming tools that span various programming languages, search for sohackstools on github for a great collection! (Will contain installers for both MacOS and Windows as well as a general list for all you linux people)');

});

listener.hears('!entertainment',['direct_message','direct_mention','mention'],function(bot,message){
	bot.reply(message, 'I may get bored a set up a snazzy playlist or something, a bots got a lot to do. If so we\'ll let you know!');

});

listener.hears('!submit',['direct_message','direct_mention','mention'],function(bot,message){
	bot.reply(message, 'Your question has been sent to the mentors');
	bot.api.users.info({user: message.user}, function(err, info){
		sender.postMessageToChannel('mentor', 'User: ' + info.user.name+ ' has a question:\n' + message.text + '', params);
	});

});

listener.hears('!warning',['direct_message','direct_mention','mention'],function(bot,message){
	sender.postMessageToChannel('general', 'This is a general warning that any inappropriate content such as language, or discussions are not to be held ', params);
	sender.postMessageToUser('trevorsnodgrass', 'a language warning was issued to the general chat', params);

});

listener.hears('!commands',['direct_message','direct_mention','mention'],function(bot,message){
	bot.reply(message, '*Here is a list of the general commands, all of these should be preceded by an exclamation point (!) and sent to SoHacksBot via a direct message.*\ninfo -- displays the frequently asked questions\nhelp -- sends message to mentors and should be followed by the language you are using\ntools -- gives you a list of useful programming tools\nsubmit -- if you have a question not related to your project, like when something is, this will ask the mentors that.\nentertainment -- this is just a placeholder if we add anything fun but could change\nwarning -- issues a general warning regarding language to the chat');

});




















