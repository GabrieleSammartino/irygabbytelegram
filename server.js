var TelegramBot = require('node-telegram-bot-api');

var token = '312757824:AAHsZru4UknvOz9mz5kNJtdIc6WfKNRO22Q';

var bot = new TelegramBot(token, {polling: true});
//Echo
bot.onText(/\/echo (.+)/, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];

    bot.sendMessage(fromId, resp);
});
//Ire
bot.onText(/\/ire/, function (msg,match) {
    var ire = "Ti amo Ir, da Gabby <3";
    var fromId = msg.from.id;
    bot.sendMessage(fromId,ire);

});
bot.onText(/\/copia (.+)/, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
    bot.sendMessage(fromId, resp);

});
bot.onText(/\/help/, function(msg, match) {
    var fromId = msg.from.id;
    bot.sendMessage(fromId, "Fai /ire");
});
//Foto
bot.onText(/\/fotina/, function (msg) {
    var chatId = msg.chat.id;
    var photo ='https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/15871619_770485609769041_1504259065764582686_n.jpg?oh=3ec7bb7de5894dfa34d9741228c84a59&oe=58D9F194';
    bot.sendPhoto(chatId, photo, {caption: 'Noi'});
});
