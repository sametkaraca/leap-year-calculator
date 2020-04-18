const express = require('express')
const ejs = require('ejs')
const port =3000
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

let year = 0
let result = ''

app.get('/', (req,res)=>{
    res.render('pages/index',{result})
})

app.post('/', (req,res)=>{

    year = req.body.yearinput

    if (year%4 == 0 && year%400 ==0) {

        if ( (year%100!=0) == false){
            result = "Leap Year"
        } 
    } else {
        result = "Not a Leap Year"
    }

    res.redirect('/')

})

app.listen(port, console.log('Listens port '+port))