const { MessageEmbed, Discord } = require("discord.js");

function errorEmbed(description) {


    const embed = new MessageEmbed()
        .setTitle("Bot Response")
        .setURL("https://cdn.discordapp.com/avatars/918700009669689374/f26dff06776b56a28050304386986b84.png?size=256")
        .setAuthor("Discord Translator Bot", "https://cdn.discordapp.com/avatars/918700009669689374/f26dff06776b56a28050304386986b84.png?size=256", "https://github.com/aspectdev-ph")
        .setColor('#ff0000')
        .setDescription(description)
        .setFooter("Developed by aspectdev-ph", " https://avatars.githubusercontent.com/u/32452006?v=4")
        .setThumbnail("https://cdn.discordapp.com/avatars/918700009669689374/f26dff06776b56a28050304386986b84.png?size=256")
        .setTimestamp()
    return embed;
}

function successEmbed(description) {


    const embed = new MessageEmbed()
        .setTitle("Bot Response")
        .setURL("https://cdn.discordapp.com/avatars/918700009669689374/f26dff06776b56a28050304386986b84.png?size=256")
        .setAuthor("Discord Translator Bot", "https://cdn.discordapp.com/avatars/918700009669689374/f26dff06776b56a28050304386986b84.png?size=256", "https://github.com/aspectdev-ph")
        .setColor('#37fd12')
        .setDescription(description)
        .setFooter("Developed by aspectdev-ph", " https://avatars.githubusercontent.com/u/32452006?v=4")
        .setThumbnail("https://cdn.discordapp.com/avatars/918700009669689374/f26dff06776b56a28050304386986b84.png?size=256")
        .setTimestamp()
    return embed;
}

function warningEmbed(description) {


    const embed = new MessageEmbed()
        .setTitle("Bot Response")
        .setURL("https://cdn.discordapp.com/avatars/918700009669689374/f26dff06776b56a28050304386986b84.png?size=256")
        .setAuthor("Discord Translator Bot", "https://cdn.discordapp.com/avatars/918700009669689374/f26dff06776b56a28050304386986b84.png?size=256", "https://github.com/aspectdev-ph")
        .setColor('#FFA500')
        .setDescription(description)
        .setFooter("Developed by aspectdev-ph", " https://avatars.githubusercontent.com/u/32452006?v=4")
        .setThumbnail("https://cdn.discordapp.com/avatars/918700009669689374/f26dff06776b56a28050304386986b84.png?size=256")
        .setTimestamp()

    return embed;

}
function translateEmbed(user, description) {
    const embed = new MessageEmbed()
        .setTitle(user + " Message Translated")
        .setURL("https://cdn.discordapp.com/avatars/918700009669689374/f26dff06776b56a28050304386986b84.png?size=256")
        .setAuthor("Discord Translator Bot", "https://cdn.discordapp.com/avatars/918700009669689374/f26dff06776b56a28050304386986b84.png?size=256", "https://github.com/aspectdev-ph")
        .setColor(0x00AE86)
        .setDescription(description)
        .setFooter("Developed by aspectdev-ph", " https://avatars.githubusercontent.com/u/32452006?v=4")
        .setThumbnail("https://cdn.discordapp.com/avatars/918700009669689374/f26dff06776b56a28050304386986b84.png?size=256")
        .setTimestamp()
    return embed;
}

module.exports = {
    errorEmbed,
    successEmbed,
    warningEmbed,
    translateEmbed
}