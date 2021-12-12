const { SlashCommandBuilder } = require('@discordjs/builders');
const embed = require('../gui/embed');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('vote')
        .setDescription('Vote Discord Translate Bot on top.gg')
    , async execute(interaction) {
        await interaction.reply({
            content: ' ', embeds: [embed.successEmbed(
                "``**Vote the bot!**``"
                + "\r\n Visit https://top.gg/bot/918700009669689374/vote and click that vote button!"
                + "\r\n By voting the bot it help us making it to top translator of them all."
            )]
        });
    }
}