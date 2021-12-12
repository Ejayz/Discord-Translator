const { execute } = require("../commands/help");
const formats = require('../class/MessageFormatter');
const { translation } = require('../class/translateLang');
const { mentioncheckLang } = require('../class/checkLang');
const embed = require('../gui/embed');
module.exports = {
    name: "messageCreate",
    nonce: false,
    async execute(message) {
        if (message !== null) {
            if (!message.author.bot) {
                const formatted = await formats.format(message.content);
                if (formatted.mention === '<@!918700009669689374>') {
                    const to = await mentioncheckLang(formatted.to).catch(console.error);
                    const result = await translation(formatted.message, to).catch(console.error);
                    const finalResult = formats.mentionFormat(result);
                    console.log(result);
                    await message.channel.send({ content: ' ', embeds: [embed.translateEmbed(message.author.username, finalResult)] });
                }
            }


        }
    }
}