const fs = require("fs");

//read files 
// fs.readFile("./docs/block.txt" , (err , data) => {
//     if(err) console.log(err);
//     //console.log(data);
//     console.log(data.toString());
// })

//write files
// fs.writeFile("./docs/vaovao.txt" , "fiainan dangodango" ,(e) =>{
//     if (e) {
//         console.log("ratsy ny tantara : "+ e);
//     } else {
//         console.log("Mandeha fa aza matahotra");
//     }
// })

//create directory mkdir
// if(!fs.existsSync("./fichier")){
//     fs.mkdir("./fichier" ,(err) =>{
//         if(err) console.log(err);
//         console.log("fichier créer");
//     })
// }else{
//     console.log("eto a zao")
// }

// //remove directory 
// fs.rmdir("./fichier" ,(err) =>{
//     if(err) console.log(err);
//     console.log("fichier supprimer");
// })

if(fs.existsSync("./docs/block.txt")){
    fs.unlink("./docs/block.txt" , (e) =>{
        console.log("voafafa");
    })
}