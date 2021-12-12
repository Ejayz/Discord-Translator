const { SlashCommandBuilder } = require('@discordjs/builders');
const embed = require('../gui/embed');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Get help information of how to use the not')
        .addStringOption(options => {
            options.setName('action');
            options.setDescription('What you want to do .e.g language');
            return options;
        })

    , async execute(interaction) {

        await interaction.deferReply({ ephemeral: true });
        console.log(interaction.options.get("action"));
        if (interaction.options.get('action') !== null) {
            const action = interaction.options.get('action').value;
            if (action.toLowerCase() == 'donate') {
                await interaction.editReply(P = {
                    content: ' ', embeds: [embed.successEmbed(
                        "***Donate*** \r\n"
                        + "> Donating to us help maintain the bot and other bot we are working..."
                        + "\r\n"
                        + "Donate here:"
                        + "\r\n"
                        + ":moneybag:: (**KoFi-Buy me a coffee**)[https://ko-fi.com/aspectdevph]")]
                });
            }
            if (action.toLowerCase() === 'language') {
                await interaction.editReply({
                    content: ' ', embeds: [embed.successEmbed(
                        "***Language List*** \r\n"
                        + "\r\n```auto: 'Automatic'"
                        + "\r\naf: 'Afrikaans'"
                        + "\r\nsq: 'Albanian'"
                        + "\r\nar: 'Arabic'"
                        + "\r\nhy: 'Armenian'"
                        + "\r\nz: 'Azerbaijani'"
                        + "\r\neu: 'Basque'"
                        + "\r\nbe: 'Belarusian'"
                        + "\r\nbn: 'Bengali'"
                        + "\r\nbs: 'Bosnian'"
                        + "\r\nbg: 'Bulgarian'"
                        + "\r\nca: 'Catalan'"
                        + "\r\nceb: 'Cebuano'"
                        + "\r\nny: 'Chichewa'"
                        + "\r\n'zh-cn': 'Chinese Simplified'"
                        + "\r\n'zh-tw': 'Chinese Traditional'"
                        + "\r\nco: 'Corsican'"
                        + "\r\nhr: 'Croatian'"
                        + "\r\ncs: 'Czech'"
                        + "\r\nda: 'Danish'"
                        + "\r\nnl: 'Dutch'"
                        + "\r\nen: 'English'"
                        + "\r\neo: 'Esperanto'"
                        + "\r\net: 'Estonian'"
                        + "\r\ntl: 'Filipino'"
                        + "\r\nfi: 'Finnish'"
                        + "\r\nfr: 'French'"
                        + "\r\nfy: 'Frisian'"
                        + "\r\ngl: 'Galician'"
                        + "\r\nka: 'Georgian'"
                        + "\r\nde: 'German'"
                        + "\r\nel: 'Greek'"
                        + "\r\ngu: 'Gujarati'"
                        + "\r\nht: 'Haitian Creole'"
                        + "\r\nha: 'Hausa'"
                        + "\r\nhaw: 'Hawaiian'"
                        + "\r\niw: 'Hebrew'"
                        + "\r\nhi: 'Hindi'"
                        + "\r\nhmn: 'Hmong'"
                        + "\r\nhu: 'Hungarian'"
                        + "\r\nis: 'Icelandic'"
                        + "\r\nig: 'Igbo'"
                        + "\r\nid: 'Indonesian'"
                        + "\r\nga: 'Irish'"
                        + "\r\nit: 'Italian'"
                        + "\r\nja: 'Japanese'"
                        + "\r\njw: 'Javanese'"
                        + "\r\nkn: 'Kannada'"
                        + "\r\nkk: 'Kazakh'"
                        + "\r\nkm: 'Khmer'"
                        + "\r\nko: 'Korean'"
                        + "\r\nku: 'Kurdish (Kurmanji)'"
                        + "\r\nky: 'Kyrgyz'"
                        + "\r\nlo: 'Lao'"
                        + "\r\nla: 'Latin'"
                        + "\r\nlv: 'Latvian'"
                        + "\r\nlt: 'Lithuanian'"
                        + "\r\nlb: 'Luxembourgish'"
                        + "\r\nmg: 'Malagasy'"
                        + "\r\nms: 'Malay'"
                        + "\r\nml: 'Malayalam'"
                        + "\r\nmt: 'Maltese'"
                        + "\r\nmi: 'Maori'"
                        + "\r\nmr: 'Marathi'"
                        + "\r\nmn: 'Mongolian'"
                        + "\r\nmy: 'Myanmar (Burmese)'"
                        + "\r\nne: 'Nepali'"
                        + "\r\nno: 'Norwegian'"
                        + "\r\nps: 'Pashto'"
                        + "\r\nfa: 'Persian'"
                        + "\r\npl: 'Polish'"
                        + "\r\npt: 'Portuguese'"
                        + "\r\nma: 'Punjabi'"
                        + "\r\nro: 'Romanian'"
                        + "\r\nru: 'Russian'"
                        + "\r\nsm: 'Samoan'"
                        + "\r\ngd: 'Scots Gaelic'"
                        + "\r\nsr: 'Serbian'"
                        + "\r\nst: 'Sesotho'"
                        + "\r\nsn: 'Shona'"
                        + "\r\nsd: 'Sindhi'"
                        + "\r\nsi: 'Sinhala'"
                        + "\r\nsk: 'Slovak'"
                        + "\r\nsl: 'Slovenian'"
                        + "\r\nso: 'Somali'"
                        + "\r\nes: 'Spanish'"
                        + "\r\nsu: 'Sudanese'"
                        + "\r\nsw: 'Swahili'"
                        + "\r\nsv: 'Swedish'"
                        + "\r\ntg: 'Tajik'"
                        + "\r\nta: 'Tamil'"
                        + "\r\nte: 'Telugu'"
                        + "\r\nth: 'Thai'"
                        + "\r\ntr: 'Turkish'"
                        + "\r\nuk: 'Ukrainian'"
                        + "\r\nur: 'Urdu'"
                        + "\r\nuz: 'Uzbek'"
                        + "\r\nvi: 'Vietnamese'"
                        + "\r\ncy: 'Welsh'"
                        + "\r\nxh: 'Xhosa'"
                        + "\r\nyi: 'Yiddish'"
                        + "\r\nyo: 'Yoruba'"
                        + "\r\nzu: 'Zulu'```"
                    )]
                });
            }
            if (action.toLowerCase() === 'translate') {
                await interaction.editReply({
                    content: ' ', embeds: [
                        embed.successEmbed(
                            " :passport_control::``Translate``\r\n"
                            + "\r\n> Use /translate to translate a message"
                            + "\r\n"
                            + "\r\nThere are 3 way to use the /translate command"
                            + "\r\n> 1"
                            + "\r\n```/translate message:<Your message here>```"
                            + "\r\n> 2"
                            + "\r\n```/translate message:<Your message here> to:<language you want to translate the message.see **/help action:language**>```"
                            + "\r\n> 3"
                            + "\r\n```/translate message:<Your message here> to:<language you want to translate the message.see **/help action:language**> mention:<User you want to mention>```"

                        )
                    ]
                });
            }
        } else {
            await interaction.editReply({
                content: ' ', embeds: [embed.successEmbed(
                    "***Command Help***"
                    + "\r\n"
                    + "\r\n"
                    + ":passport_control::Translate"
                    + "\r\n"
                    + "```/help action:translate```"
                    + "\r\n"
                    + ":bookmark: : Language List"
                    + "```/help action:language```"
                    + "\r\n"
                    + ":moneybag:: donate"
                    + "```/help action:donate```")]
            });
        }
    }
}