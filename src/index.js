import 'dotenv/config'
console.log("web site is working")

import {Telegraf} from 'telegraf'
import {development, production} from "./core/index.js"
const BOT_TOKEN = process.env.BOT_TOKEN || '';
const ENVIRONMENT = process.env.NODE_ENV || '';

const bot = new Telegraf(BOT_TOKEN);

bot.command('about', (ctx) => {
  ctx.reply('234234 about')
});
bot.on('message', (ctx) => {
  ctx.reply('234234 message: ' + ctx.message.text )
});

//prod mode (Vercel)
export const startVercel = async (req, res) => {
  await production(req, res, bot);
};
//dev mode
ENVIRONMENT !== 'production' && development(bot);