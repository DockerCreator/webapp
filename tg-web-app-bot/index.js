const TelegramBot = require('node-telegram-bot-api')
const webAppUrl = 'https://ya.ru'
const token = '5304215917:AAF2AoOHY-3Rs4sMQODmGKsZrK8onakgB8k'

const bot = new TelegramBot(token, { polling: true })

bot.on('message', async msg => {
	const chatId = msg.chat.id
	const text = msg.text

	if (text === '/start') {
		await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
			reply_markup: {
				keyboard: [[{ text: 'Заполнить форму', web_app: { url: webAppUrl } }]],
			},
		})

		await bot.sendMessage(
			chatId,
			'Заходи в наш интернет магазин по кнопке ниже',
			{
				reply_markup: {
					inline_keyboard: [
						[{ text: 'Сделать заказ', web_app: { url: webAppUrl } }],
					],
				},
			}
		)
	}
})
