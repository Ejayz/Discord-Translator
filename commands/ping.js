const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Send ping to me and ill reply with pong.')
    , async execute(interaction) {
        await interaction.reply({ content: 'pong!' });
    }
}