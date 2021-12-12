module.exports = {
    async format(message) {
        const data = message.split(" ");

        let stringi = "";
        for (let i = 2; i < data.length; i++) {
            stringi = stringi + " " + data[i];
        }
        let translationData = {
            mention: data[0],
            to: data[1],
            message: stringi,
        }
        return translationData;
    },
    mentionFormat(message) {
        let data = message;
        while (data.includes("<@! ")) {
            data = data.replace("<@! ", "<@!");
        }
        return data;
    },
    emojiToString(text) {
        for (let i = 0; i < text.length; i++) {
            if (text.charCodeAt(i) >= 255)
                if (text.codePointAt(i) >= 127462 && text.codePointAt(i) <= 127487)
                    text =
                        text.substring(0, i) +
                        String.fromCodePoint(text.codePointAt(i) - 127365) +
                        text.substring(i + 2);
        }
        return text;
    }
}