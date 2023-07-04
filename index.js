const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// const button = document.querySelector('#submitButton')
// const input = document.querySelector('#textInput')

  
// Routes

// GET /greet/:name should return a greeting with the supplied name, e.g., 'Why hello there, <name>!'


app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    console.log(name)
    res.send(`Why hello there, ${name}!`)

  })


//   GET /five should return an array of the numbers from 1-5

  app.get('/five', (req, res) => {
    const fiveRandom = Math.floor(Math.random() * 5) + 1;
    console.log(fiveRandom);    
    res.send(`${fiveRandom}!`)

  })


//   GET /fruits should return an array with all the fruits.

  app.get('/fruits', (req, res) => {
    const fruits = ['apple', 'orange', 'grapes', 'banana', 'lemon', 'lime', 'peach', 'pear']
    res.send(fruits)
  })


//   Now let's add a route that takes a route parameter name and retrieves the fruit that matches the supplied name.



  app.get('/fruits/:name', (req, res) => {
    const fruitsName = req.params.name;
    console.log(fruitsName)
    res.send(fruitsName)

  })

  
//   GET /veggies should return an array with all the veggies.

  app.get('/veggies', (req, res) => {
    const veggies = ['broccoli', 'peas', 'mushroom', 'onion', 'cabbage', 'lettuce', 'spinach', 'carrot']
    res.send(veggies)
  })


  //   Now let's add a route that takes a route parameter name and retrieves the veggie that matches the supplied name.



  app.get('/veggies/:name', (req, res) => {
    const veggiesName = req.params.name;
    console.log(veggiesName)
    res.send(veggiesName)

  })

//   GET /fruits/sort should return the fruits array sorted alphabetically using .sort().

  app.get('/fruits/:sort', (req, res) => {
    const fruits = ['apple', 'orange', 'grapes', 'banana', 'lemon', 'lime', 'peach', 'pear']
    var sortedFruits = fruits.sort()
    res.send(sortedFruits)
  })
  


  app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))  