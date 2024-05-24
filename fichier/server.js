let app = require('express')()//misy anio () io satria le constructeur no importena

app.get('/', (request,response)=>{
    response.send('salut on est à la racine')
})

app.get('/demo', (request,response)=>{
    response.send('salut on est sur demo lebaba ah')
})

app.get('/sousracine' , (request,response)=>{
    response.send('sousracine ôoo')
})

app.listen(8052)