//
//  SoHacks Slack Bot v 1.1.3
//  bot.js 
//
//  Created by Trevor Snodgrass on 7/18/16.
//  Copyright © 2016 Trevor Snodgrass. All rights reserved.
//	Licensed under the General Public License v2 (GPLv2)
//

/**********************************************************
 * 
 * 	SoHack Slack Bot (Hackinbot(?))
 * 		-- Slack bot which allows for easy communcation 
 * 		between attendees and the mentors/volunteers as
 * 		well as acts as a go to for any questions that 
 * 		a student might have.
 * 
 * 
 * ********************************************************/
 
 
 /*********************************************************
  * 				INITALISATION
  * ******************************************************/
//add slack token to give access to channel
/* NOTE, REMEMBER TO REMOVE TOKEN BEFORE UPLOADING TO GITHUB */
var slackToken = '';

//import required libraries
var Botkit = require('botkit');
var Slackbot = require('slackbots');
var countdown = require('countdown');
//var howl = require('howler');
// this is solely for the profanity checker
var innapropriatelanguage = [{
	"4r5e",
	"5h1t",
	"5hit",
	'a55',
	'anal',
	'anus',
	'ar5e',
	'arrse',
	'arse',
	'ass',
	"ass-fucker",
	'asses',
	'assfucker',
	'assfukka',
	'asshole',
	'assholes',
	'asswhole',
	'a_s_s',
	"b!tch",
	'b00bs',
	'b17ch',
	'b1tch',
	'ballbag',
	'balls',
	'ballsack',
	'bastard',
	'beastial',
	'beastiality',
	'bellend',
	'bestial',
	'bestiality',
	"bi+ch",
	'biatch',
	'bitch',
	'bitcher',
	'bitchers',
	'bitches',
	'bitchin',
	'bitching',
	'bloody',
	"blow job",
	'blowjob',
	'blowjobs',
	'boiolas',
	'bollock',
	'bollok',
	'boner',
	'boob',
	'boobs',
	'booobs',
	'boooobs',
	'booooobs',
	'booooooobs',
	'breasts',
	'buceta',
	'bugger',
	'bum',
	"bunny fucker",
	'butt',
	'butthole',
	'buttmuch',
	'buttplug',
	'c0ck',
	'c0cksucker',
	"carpet muncher",
	'cawk',
	'chink',
	'cipa',
	'cl1t',
	'clit',
	'clitoris',
	'clits',
	'cnut',
	'cock',
	"cock-sucker",
	'cockface',
	'cockhead',
	'cockmunch',
	'cockmuncher',
	'cocks',
	"cocksuck",
	"cocksucked",
	'cocksucker',
	'cocksucking',
	"cocksucks",
	'cocksuka',
	'cocksukka',
	'cok',
	'cokmuncher',
	'coksucka',
	'coon',
	'cox',
	'crap',
	'cum',
	'cummer',
	'cumming',
	'cums',
	'cumshot',
	'cunilingus',
	'cunillingus',
	'cunnilingus',
	'cunt',
	"cuntlick",
	"cuntlicker",
	"cuntlicking",
	'cunts',
	'cyalis',
	'cyberfuc',
	"cyberfuck",
	"cyberfucked",
	'cyberfucker',
	'cyberfuckers',
	"cyberfucking",
	'd1ck',
	'damn',
	'dick',
	'dickhead',
	'dildo',
	'dildos',
	'dink',
	'dinks',
	'dirsa',
	'dlck',
	"dog-fucker",
	'doggin',
	'dogging',
	'donkeyribber',
	'doosh',
	'duche',
	'dyke',
	'ejaculate',
	'ejaculated',
	"ejaculates",
	"ejaculating",
	'ejaculatings',
	'ejaculation',
	'ejakulate',
	"f u c k",
	"f u c k e r",
	'f4nny',
	'fag',
	'fagging',
	'faggitt',
	'faggot',
	'faggs',
	'fagot',
	'fagots',
	'fags',
	'fanny',
	'fannyflaps',
	'fannyfucker',
	'fanyy',
	'fatass',
	'fcuk',
	'fcuker',
	'fcuking',
	'feck',
	'fecker',
	'felching',
	'fellate',
	'fellatio',
	"fingerfuck",
	"fingerfucked",
	"fingerfucker",
	'fingerfuckers',
	"fingerfucking",
	"fingerfucks",
	'fistfuck',
	"fistfucked",
	"fistfucker",
	"fistfuckers",
	"fistfucking",
	"fistfuckings",
	"fistfucks",
	'flange',
	'fook',
	'fooker',
	'fuck',
	'fucka',
	'fucked',
	'fucker',
	'fuckers',
	'fuckhead',
	'fuckheads',
	'fuckin',
	'fucking',
	'fuckings',
	'fuckingshitmotherfucker',
	"fuckme",
	'fucks',
	'fuckwhit',
	'fuckwit',
	"fudge packer",
	'fudgepacker',
	'fuk',
	'fuker',
	'fukker',
	'fukkin',
	'fuks',
	'fukwhit',
	'fukwit',
	'fux',
	'fux0r',
	'f_u_c_k',
	'gangbang',
	"gangbanged",
	"gangbangs",
	'gaylord',
	'gaysex',
	'goatse',
	'God',
	"god-dam",
	"god-damned",
	'goddamn',
	'goddamned',
	"hardcoresex",
	'hell',
	'heshe',
	'hoar',
	'hoare',
	'hoer',
	'homo',
	'hore',
	'horniest',
	'horny',
	'hotsex',
	"jack-off",
	'jackoff',
	'jap',
	"jerk-off",
	'jism',
	"jiz",
	"jizm",
	'jizz',
	'kawk',
	'knob',
	'knobead',
	'knobed',
	'knobend',
	'knobhead',
	'knobjocky',
	'knobjokey',
	'kock',
	'kondum',
	'kondums',
	'kum',
	'kummer',
	'kumming',
	'kums',
	'kunilingus',
	"l3i+ch",
	'l3itch',
	'labia',
	'lmfao',
	'lust',
	'lusting',
	'm0f0',
	'm0fo',
	'm45terbate',
	'ma5terb8',
	'ma5terbate',
	'masochist',
	"master-bate",
	'masterb8',
	"masterbat*",
	'masterbat3',
	'masterbate',
	'masterbation',
	'masterbations',
	'masturbate',
	"mo-fo",
	'mof0',
	'mofo',
	'mothafuck',
	'mothafucka',
	'mothafuckas',
	'mothafuckaz',
	"mothafucked",
	'mothafucker',
	'mothafuckers',
	'mothafuckin',
	"mothafucking ",
	'mothafuckings',
	'mothafucks',
	"mother fucker",
	'motherfuck',
	'motherfucked',
	'motherfucker',
	'motherfuckers',
	'motherfuckin',
	'motherfucking',
	'motherfuckings',
	'motherfuckka',
	'motherfucks',
	'muff',
	'mutha',
	'muthafecker',
	'muthafuckker',
	'muther',
	'mutherfucker',
	'n1gga',
	'n1gger',
	'nazi',
	'nigg3r',
	'nigg4h',
	'nigga',
	'niggah',
	'niggas',
	'niggaz',
	'nigger',
	"niggers",
	'nob',
	"nob jokey",
	'nobhead',
	'nobjocky',
	'nobjokey',
	'numbnuts',
	'nutsack',
	"orgasim",
	"orgasims",
	'orgasm',
	"orgasms",
	'p0rn',
	'pawn',
	'pecker',
	'penis',
	'penisfucker',
	'phonesex',
	'phuck',
	'phuk',
	'phuked',
	'phuking',
	'phukked',
	'phukking',
	'phuks',
	'phuq',
	'pigfucker',
	'pimpis',
	'piss',
	'pissed',
	'pisser',
	'pissers',
	"pisses ",
	'pissflaps',
	"pissin ",
	'pissing',
	"pissoff ",
	'poop',
	'porn',
	'porno',
	'pornography',
	'pornos',
	'prick',
	"pricks",
	'pron',
	'pube',
	'pusse',
	'pussi',
	'pussies',
	'pussy',
	"pussys",
	'rectum',
	'retard',
	'rimjaw',
	'rimming',
	"s hit","s.o.b.",'sadist','schlong','screwing','scroat','scrote','scrotum','semen','sex',"sh!+","sh!t",'sh1t','shag','shagger','shaggin','shagging','shemale',"shi+",'shit','shitdick','shite','shited','shitey','shitfuck','shitfull','shithead','shiting','shitings','shits','shitted','shitter',"shitters",'shitting','shittings',"shitty ",'skank','slut','sluts','smegma','smut','snatch',"son-of-a-bitch",'spac','spunk','s_h_i_t','t1tt1e5','t1tties','teets','teez','testical','testicle','tit','titfuck','tits','titt','tittie5','tittiefucker','titties','tittyfuck','tittywank','titwank','tosser','turd','tw4t','twat','twathead','twatty','twunt','twunter','v14gra','v1gra','vagina','viagra','vulva','w00se','wang','wank','wanker','wanky','whoar','whore','willies','willy','xrated','xxx'];

// create listener
var listener = Botkit.slackbot({
	debug: false
});

listener.spawn({
	token: slackToken,
}).startRTM()

// sets up audio player
//var sound = new Howl({
//	src: ['wilhelm.mp3']
//});

//create sender
var sender = new Slackbot({
	token: slackToken,
	name: 'SoHacksBot'
});
/**********************************************************
 * 						START UP
 * *******************************************************/

// starts bot, sets icon, and posts welcome message from when bot is initialised
sender.on('start', function(){
	// set up basic params
	var params = {
		icon_emoji: ':floppy_disk:'
	};
	//sender.postMessageToChannel('general', 'Welcome to SoHack 2016!', params);
});

// this was being funny with scope so I added a global instance
var params = {
	icon_emoji: ':floppy_disk:'
};

/**********************************************************
 * 						COMMANDS
 * *******************************************************/
 var main = function() {

	//listens for info command and posts the list of frequently asked questions
	 listener.hears('!info',['direct_message','direct_mention','mention', 'message_received'],function(bot,message){
		bot.reply(message, '*Hi thank you for asking SoHacks Bot for the frequently asked questions!*\n\n*What if I don\'t have a team?*\nTeams are not required to participate for prizes. If you have a team, the max number of participents is 4 people.\n*How do I get help from a mentor?*\nThere are two ways to get in contact with a mentor, either you can physcially find one or by sending a message to SoHacks Bot simply containing !help and the language you need help with/problem and a mentor will get in contact with you!\n*I want to build ____, how do I do it?*\nWe recommend that all beginner coders attend workshops in order to gain the basics needed to create a hack. If you have any problems or questions please contact a mentor.\n*How can I sign up for workshops?*\nSign ups will be done through the devpost website\n*How do I connect to Wifi/ my wifi isn\’t working?*\nA password will be given out at opening ceremonies for the wifi. If you still have problems please go to the check in table for help or find a mentor.\n*My laptop isn\’t working*\nAsk others around you for help or go to the laptop check out area for a loaner laptop.\n*How do I submit my hack?*\nOn Devpost you can submit a hack. There you make an account and register for SoHacks. Come submission you can upload your project and please fill out all of the questions to the best of your ability.\n*Who do I talk to if I need urgent help?*\nIf you need immediate help ask a mentor or a volunteer. If you cannot find them ask one of the SoHacks team members or go to the check in table.\n*Have a question you don\'t see an answer to?*\nPost it in the general slack page, mentors and volunteers will frequent the chat. Or you can find one out in the wild and ask them there!');

	});

	// listens for help command, responds and notifies the mentors who needs help and with what
	 listener.hears('!help (.*)',['direct_message','direct_mention','mention', 'message_received',"ambient"],function(bot,message){
		bot.reply(message, 'You have requested help, the mentors have been notified and you will be contacted shortly.');
		bot.api.users.info({user: message.user}, function(err, info){
			var string = message.text;
                        var string2 = string.substring(string.indexOf('p') + 2);
		bot.api.chat.postMessage({'token': slackToken, 'channel': 'mentors', 'text': 'User: ' + info.user.name+ ' has a question:\n' + string2 + '', 'username': 'SoHacks Bot', 'icon_emoji': ':floppy_disk:'});		
		});
		
	});

	// posts a useful list of programming tools for both macOS and windows (these are both limited to 64 bit machines but that shouldnt be an issue)
	 listener.hears('!tools',['direct_message','direct_mention','mention', 'message_received',"ambient"],function(bot,message){
		bot.reply(message, 'If you are looking for a collection of useful programming tools that span various programming languages, search for sohackstools on github or here is a link! https://github.com/tsnodgrass96/sohackstools ');

	});

	// this is just a placeholder but I'm considering having it link to a group of spotify playlists or twitch channels known for music
	 listener.hears('!entertainment',['direct_message','direct_mention','mention', 'message_received',"ambient"],function(bot,message){
		bot.reply(message, 'I may get bored a set up a snazzy playlist or something, a bots got a lot to do. If so we\'ll let you know!');

	});

	// countdown which gives the time remaining until sumissions are due
	 listener.hears('!countdown',['direct_message','direct_mention','mention', 'message_received',"ambient"],function(bot,message){
		var timer = countdown(null, new Date(2016, 7, 6, 13)).toString();
		bot.reply(message, 'The time remaining for submissions is: ' + timer);

	});

	// this listens for a unique question and sends it to the mentor channel so that they can get in touch with the student
	 listener.hears('!submit (.*)',['direct_message','direct_mention','mention', 'message_received',"ambient"],function(bot,message){
		bot.reply(message, 'Your question has been sent to the mentors');
		bot.api.users.info({user: message.user}, function(err, info){
			var string = message.text;
                        var string2 = string.substring(string.indexOf('t') + 2);
			bot.api.chat.postMessage({'token': slackToken, 'channel': 'mentors', 'text': 'User: ' + info.user.name+ ' has a question:\n' + string2 + '', 'username': 'SoHacks Bot', 'icon_emoji': ':floppy_disk:'});

		});

	});

	// this hopefully will not be used, but if the general feed gets out of control regarding language and content,
	// this will post a warning as well as notify my personal channel so that I can go check what the issue is
	 listener.hears('!warning',['direct_message','direct_mention','mention', 'message_received',"ambient"],function(bot,message){
		sender.postMessageToChannel('general', 'This is a general warning that any inappropriate content such as language, or discussions are not to be held ', params);
		sender.postMessageToUser('trevorsnodgrass', 'a language warning was issued to the general chat', params);
		sender.postMessageToUser('jsinger5015', 'a language warning was issued to the general chat', params);
		sender.postMessageToUser('joshuasinger', 'a language warning was issued to the general chat', params);

	});

	// the most basic command that just posts a list of the rest of the commands available to basic users
	// I'm considering making a second specifically for the mentor channel with some extended commands
	 listener.hears('!commands',['direct_message','direct_mention','mention', 'message_received',"ambient"],function(bot,message){
		bot.reply(message, '*Here is a list of the general commands, all of these should be preceded by an exclamation point (!) and sent to SoHacksBot via a direct message.*\ninfo -- displays the frequently asked questions\nhelp -- sends message to mentors and should be followed by the language you are using\ntools -- gives you a list of useful programming tools\nsubmit -- if you have a question not related to your project, like when something is, this will ask the mentors that.\nentertainment -- this is just a placeholder if we add anything fun but could change\nwarning -- issues a general warning regarding language to the chat\ncountdown -- timer telling you how ling until submissions are closed');

	});

	// profanity filter
	 listener.hears(innapropriatelanguage,['direct_message','direct_mention','mention', 'message_received',"ambient"],function(bot,message){
		bot.reply(message, 'Foul or inappropriate language will not be tolerated in the chat');
		bot.api.chat.delete({'token': slackToken, 'ts': message.ts, 'channel': message.channel});

	});

	//mass notification
	 listener.hears('!notify (.*)',['direct_message','direct_mention','mention',"ambient"],function(bot,message){
		bot.api.users.info({user: message.user}, function(err, info){
		if(info.user.name === 'jsinger5015' || info.user.name === 'trevorsnodgrass') {
			var string = message.text;
			var string2 = string.substring(string.indexOf('y') + 2);
			console.log(string2);
			console.log(typeof(string2));
			sender.postMessageToChannel('general', '@everyone ' + string2, params);
		}

		});

	});

	 listener.hears('!fail',['direct_message','direct_mention','mention',"ambient"],function(bot,message){
		bot.reply(message, 'Fail');
		//		sound.play();
	});


}

if(require.main === module) {
	main();
}















