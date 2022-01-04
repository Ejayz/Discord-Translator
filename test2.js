const { count } = require('console');
const fs = require('fs');

let data = fs.readFileSync('./word.html').toString();

let splitedText = data.split('<tr>');

let getData = "";
let country = "";
let language = "";
for (let i = 1; i < splitedText.length; i++) {
   let tdSplit = splitedText[i].split("<td>");

    if (tdSplit[2].includes("</td>")) {
        country = tdSplit[2].split('</td>')[0];
    }
    
    if (tdSplit[3].includes("</td>")) {
        language = tdSplit[3].split("</td>")[0];
    }

    getData = country + ":" + language;
    console.log(getData)

}