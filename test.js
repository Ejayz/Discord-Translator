const fs = require('fs');

const data = fs.readFileSync('./cond.txt').toString();
let v2 = data.split("\r\n");





for (let i = 0; i < v2.length; i++) {

    let splitd = v2[i].split(":");
    let langCodev2 = splitd[1].split(".")[0];
    let langv2 = splitd[2].split(".")[0];

    splitd[2] = langv2;
    splitd[1] = langCodev2

    let finalData = splitd[0] + ":" + splitd[1] + ":" + splitd[2] + ":" + splitd[3];
    fs.appendFile("./real.txt", finalData + "\r\n", (error) => {
        console.log(error);
    });

}
