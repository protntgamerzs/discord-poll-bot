    const config = require('../config.json');

exports.run = (client, message, args) => {

return message.reply(`\n${config.prefix}Help - Displays Help Menu\n${config.prefix}Poll <Question>\n${config.prefix}Prefix <New Prefix> - Sets New Prefix. **[BOT OWNER ONLY${config.prefix}]**`)

}
