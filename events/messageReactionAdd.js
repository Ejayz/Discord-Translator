const { checkLang } = require('../class/checkLang');
const check = require('../class/checkLang');
const { emojiToString } = require('../class/MessageFormatter');
const { translation } = require('../class/translateLang');
const { translateEmbed } = require('../gui/embed');
module.exports = {
    name: "messageReactionAdd",
    nonce: false,
    async execute(reaction, user) {
        if (reaction.partial) {
            try {
                await reaction.fetch();

            } catch (error) {
                console.log(error);
            }
            let emoji = emojiToString(reaction.emoji.name);
            if (emoji === 'ph') {
                emoji = 'tl';
            }
            console.log(emoji);
            const checked = await check.checkLang(emoji);
            console.log(checked);
            if (!checked) return;
            const result = await translation(reaction.message.content, emoji).catch(console.error);
            await reaction.message.channel.send({ content: " ", embeds: [translateEmbed(reaction.message.author.username, result)] }).catch(console.error);

        }

    }
}