const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('========================='.green);
    console.log(`=======tabla de ${base}=======`.green);
    console.log('========================='.green);


    if (!Number(base)) {
        reject(`El valor introducido ${base} no es un numero`);
        return
    }

    for (let i = 1; i <= limite; i++) {

        console.log(` ${base} X ${i} = ${base * i} \n`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            // multiplo = base * i;
            data += ` ${base} X ${i} = ${base * i} \n`;
        }

        const resp = new Uint8Array(Buffer.from(data));
        fs.writeFile(`tablas/tabla-${base}.txt`, resp, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}