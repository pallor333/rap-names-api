const express = require('express')
const app = express() //call express() easier
const PORT = 8000

const rappers = {
    '21 savage':{
        'age' : 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation' : 'London, England', 
    },
    'chance the rapper':{
        'age': 29, 
        'birthName': 'Chancelor Bennette',
        'birthLocation' : 'Chicago, Illinois'
    }, 
    'unknown':{
        'age': 0, 
        'birthName': 'unknown',
        'birthLocation' : 'unknown'
    }
}

//to make sure my app is working, I serve up a file to test
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    let rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}!`)
})