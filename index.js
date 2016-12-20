import Bot from 'slackbots';
require('dotenv').config();

class SlackBot {
  constructor() {
    this.settings = {
      token: process.env.TOKEN,
      name: process.env.NAME,
    };

    console.log(this.settings);
    const bot = new Bot(this.settings);

    console.log(bot);

    bot.on('start', function() {
      bot.postMessageToChannel('random', 'Hello channel!');
      bot.postMessageToUser('ben', 'hello bro!');
    });
  }
}

const test = new SlackBot();
