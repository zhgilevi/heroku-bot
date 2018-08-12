const TelegramBot = require('node-telegram-bot-api')


const TOKEN='574004BBBEJRUEJSBBWNBWWH174:AAHLHDJEIEJDHHjKMltxU68DGDGSGHEHSHJSJDIIQHSGSGDVVSBB2v_7m6zQyj-pmNS5XRyE7g'
Gbbhkjjjj
const bot= new TelegramBot(TOKEN,{polling:true})


bot.on('message', msg=>{
    bot.sendMessage(msg.chat.id,`Hello, ${msg.from.first_name}`)
})
