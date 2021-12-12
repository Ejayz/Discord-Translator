const langs = {
    auto: 'Automatic',
    af: 'Afrikaans',
    sq: 'Albanian',
    ar: 'Arabic',
    hy: 'Armenian',
    az: 'Azerbaijani',
    eu: 'Basque',
    be: 'Belarusian',
    bn: 'Bengali',
    bs: 'Bosnian',
    bg: 'Bulgarian',
    ca: 'Catalan',
    ceb: 'Cebuano',
    ny: 'Chichewa',
    'zh-cn': 'Chinese Simplified',
    'zh-tw': 'Chinese Traditional',
    co: 'Corsican',
    hr: 'Croatian',
    cs: 'Czech',
    da: 'Danish',
    nl: 'Dutch',
    en: 'English',
    eo: 'Esperanto',
    et: 'Estonian',
    tl: 'Filipino',
    fi: 'Finnish',
    fr: 'French',
    fy: 'Frisian',
    gl: 'Galician',
    ka: 'Georgian',
    de: 'German',
    el: 'Greek',
    gu: 'Gujarati',
    ht: 'Haitian Creole',
    ha: 'Hausa',
    haw: 'Hawaiian',
    iw: 'Hebrew',
    hi: 'Hindi',
    hmn: 'Hmong',
    hu: 'Hungarian',
    is: 'Icelandic',
    ig: 'Igbo',
    id: 'Indonesian',
    ga: 'Irish',
    it: 'Italian',
    ja: 'Japanese',
    jw: 'Javanese',
    kn: 'Kannada',
    kk: 'Kazakh',
    km: 'Khmer',
    ko: 'Korean',
    ku: 'Kurdish (Kurmanji)',
    ky: 'Kyrgyz',
    lo: 'Lao',
    la: 'Latin',
    lv: 'Latvian',
    lt: 'Lithuanian',
    lb: 'Luxembourgish',
    mk: 'Macedonian',
    mg: 'Malagasy',
    ms: 'Malay',
    ml: 'Malayalam',
    mt: 'Maltese',
    mi: 'Maori',
    mr: 'Marathi',
    mn: 'Mongolian',
    my: 'Myanmar (Burmese)',
    ne: 'Nepali',
    no: 'Norwegian',
    ps: 'Pashto',
    fa: 'Persian',
    pl: 'Polish',
    pt: 'Portuguese',
    tl: 'Philippines',
    ma: 'Punjabi',
    ro: 'Romanian',
    ru: 'Russian',
    sm: 'Samoan',
    gd: 'Scots Gaelic',
    sr: 'Serbian',
    st: 'Sesotho',
    sn: 'Shona',
    sd: 'Sindhi',
    si: 'Sinhala',
    sk: 'Slovak',
    sl: 'Slovenian',
    so: 'Somali',
    es: 'Spanish',
    su: 'Sudanese',
    sw: 'Swahili',
    sv: 'Swedish',
    tg: 'Tajik',
    ta: 'Tamil',
    te: 'Telugu',
    th: 'Thai',
    tr: 'Turkish',
    uk: 'Ukrainian',
    ur: 'Urdu',
    uz: 'Uzbek',
    vi: 'Vietnamese',
    cy: 'Welsh',
    xh: 'Xhosa',
    yi: 'Yiddish',
    yo: 'Yoruba',
    zu: 'Zulu'
}
module.exports = {
    checkLang(lang) {
        return langs[lang];
    },
    async mentioncheckLang(lang) {
        const promise = new Promise((resolve, reject) => {
            const dataArray = JSON.stringify(langs).split(",");
            for (let data of dataArray) {

                if (data.toLowerCase().includes(lang)) {
                    while (data.includes('"')) {
                        data = data.replace('"', ' ');
                    }
                    const splited = data.split(" : ");
                    let finalTo = splited[0].replace(" ", "");
                    resolve(finalTo);
                    break;
                }

            }
            reject(false);
        });
        return promise;
    }
}