const { SlashCommandBuilder } = require('@discordjs/builders');
const embed = require('../gui/embed');
const { checkLang } = require('../class/checkLang');
const { translation } = require('../class/translateLang');
const { Options } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('translate')
        .setDescription('Translate message to other language. Use \'\'\'/help language\'\'\'')
        .addStringOption(options => {
            options.setName('message');
            options.setDescription('The message that you want to translate.');
            options.setRequired(true);
            return options;
        })
        .addStringOption(options => {

            options.setName('to');
            options.setDescription("Translate language to.  \'\'\'e.g:eu , en  \'\'\'  \'\'\'see **/help language** for more info \'\'\'");
            return options;
        })
        .addStringOption(options => {
            options.setName('mention');
            options.setDescription('Mention a user');
            return options;
        })
    ,
    async execute(interaction) {
        let result;
        const message = interaction.options.get('message').value;
        interaction.deferReply({ ephemeral: false });
        if (interaction.options.get('mention') !== null) {
            let mention = await interaction.options.get('mention').value;
            if (interaction.options.get('to') !== null) {
                const toLang = interaction.options.get('to').value;
                if (checkLang(toLang)) {
                    result = await translation(message, toLang).catch(error => {
                        console.log(error);
                    });
                    interaction.editReply({ content: ' ', embeds: [embed.translateEmbed(interaction.user.username, mention + " " + result)] })
                        .catch(error => console.error);

                } else {
                    result = await translation(message, 'automatic');
                    interaction.editReply({ content: ' ', embeds: [embed.translateEmbed(interaction.user.username, mention + " " + result)] })
                        .catch(error => console.error);
                }
            } else {
                result = await translation(message, 'automatic');
                interaction.editReply({ content: ' ', embeds: [embed.translateEmbed(interaction.user.username, result)] })
                    .catch(error => console.error);
            }
        } else {
            if (interaction.options.get('to') !== null) {
                const toLang = interaction.options.get('to').value;
                if (checkLang(toLang)) {
                    result = await translation(message, toLang).catch(error => {
                        console.log(error);
                    });
                    interaction.editReply({ content: ' ', embeds: [embed.translateEmbed(interaction.user.username, result)] })
                        .catch(error => console.error);

                } else {
                    result = await translation(message, 'automatic');
                    interaction.editReply({ content: result })
                        .catch(error => console.error);
                }
            } else {
                result = await translation(message, 'automatic');
                interaction.editReply({ content: ' ', embeds: [embed.translateEmbed(interaction.user.username, result)] })
                    .catch(error => console.error);
            }
        }
    }
}