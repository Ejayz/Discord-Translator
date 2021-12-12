//Loop through each character of the text
let text = '🇵🇭';
for (let i = 0; i < text.length; i++) {
    //Check if the character is a emoji
    if (text.charCodeAt(i) >= 255)
        //Check if the character is 🇦 or between 🇿 
        if (text.codePointAt(i) >= 127462 && text.codePointAt(i) <= 127487)
            //Set the text equal to text with the emoji replaced as a lowercase letter equivalent
            text =
                text.substring(0, i) +
                String.fromCodePoint(text.codePointAt(i) - 127365) +
                text.substring(i + 2);
}
