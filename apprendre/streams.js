const fs = require("fs");

// const readStream = fs.createReadStream("./docs/block1.txt" , { encoding : "utf8"});
// const writeStream = fs.createWriteStream("./docs/block2.txt");

// readStream.on('data' , (chunk) => {
//     console.log("----new chunk----");
//     console.log(chunk);
//     writeStream.write("\nNew chunk\n");
//     writeStream.write(chunk);
// });
//piping 
// readStream.pipe(writeStream)

//pour gerer les grands fichiers pour ne pas blockquer les traitements par une seule fichier volumineuse
//utiliser readFile et writeFile pour une fichier de petite taille de stockage

let file = "./docs/block2.txt";

fs.stat(file, (err , stat) =>{
    let total = stat.size;
    let progress = 0;
    let read = fs.createReadStream(file);
    let write = fs.createWriteStream("./docs/block.txt");
    read.on('data' , (chunk) =>{
        progress += chunk.length 
        console.log("j'ai lu "+ Math.round(100*progress/total) + "%")
    })
    // read.on('end' , ()=>{
    //     console.log("J'ai fini de lire le fichier");
    // })
    read.pipe(write);
    write.on('finish', ()=>{
        console.log("Le fichier a bien été copié");
    })
})