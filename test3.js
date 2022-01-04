const { count } = require('console');
const fs = require('fs');
const { format } = require('path');

let data = fs.readFileSync("./data.json");
let datas = JSON.parse(data);
let formated = fs.readFileSync("./data.txt").toString().split("\r\n");
for (let i = 0; i < datas.length; i++) {
    for (let d = 0; d < formated.length; d++) {

        let forma = formated[d].split(':');
        let check = forma[0].toLowerCase();
        let country = datas[i].country.toLowerCase();
        if (country.includes(check)) {

            formated[d] = formated[d] + ":" + datas[i].code;
            break;
        }
    }


}

for (let d = 0; d < formated.length; d++) {
    fs.appendFileSync('./cond.txt', formated[d] + "\r\n", (error) => {
        console.log(error)
    });
}


