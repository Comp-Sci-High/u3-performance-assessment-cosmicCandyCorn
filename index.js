// Good luck!
const express = require('express');
const { request } = require('http');
const app = express();



const icecreamList = 
{
    classic: [
      {
        name: "Vanilla Bean", category: "classic", yearMade: 1985, price: 4.99, flavorDescription: "Rich and creamy with real vanilla bean specks" },
      { name: "Rocky Road", category: "classic", yearMade: 1930, price: 5.49, flavorDescription: "Chocolate ice cream with marshmallows and almonds" },
      { name: "Cookies and Cream", category: "classic", yearMade: 1984, price: 5.29, flavorDescription: "Vanilla ice cream loaded with chocolate cookie crumbles" },
     { name: "Mint Chocolate Chip", category: "classic", yearMade: 1990, price: 5.19, flavorDescription: "Cool mint ice cream with rich chocolate chips" }
      ],
      sorbet: [
      { name: "Lemon Sorbet", category: "sorbet", yearMade: 2001, price: 4.29, flavorDescription: "Bright and tangy lemon with a refreshing citrus kick" },
      {name: "Mango Sorbet", category: "sorbet", yearMade: 1999, price: 4.49, flavorDescription: "Bright raspberry flavor balanced with zesty lemon" },
      { name: "Passion Fruit Sorbet", category: "sorbet", yearMade: 2016, price: 4.39, flavorDescription: "Tart passion fruit with a tropical aroma" },
      { name: "Blood Orange Sorbet", category: "sorbet", yearMade: 2018, price: 4.59, flavorDescription: "Tangy blood orange with a deep citrus finish" }
      ],
      nutty: [
      { name: "Almond Toffee Crunch", category: "nutty", yearMade: 1995, price: 5.99, flavorDescription: "Buttery toffee pieces mixed with roasted almond flavor" },
      { name: "Caramel Pecan", category: "nutty", yearMade: 1998, price: 6.29, flavorDescription: "Smooth caramel infused with rich toasted pecan" },
      { name: "Maple Walnut", category: "nutty", yearMade: 1975, price: 5.99, flavorDescription: "Rich maple flavor with crunchy walnut pieces" }
      ],
      dessert:[
      { name: "Tiramisu Swirl", category: "dessert", yearMade: 2005, price: 6.49, flavorDescription: "Bold coffee and mascarpone with a hint of cocoa" },
      { name: "Strawberry Cheesecake", category: "dessert", yearMade: 2010, price: 5.89, flavorDescription: "Sweet strawberry blended with creamy cheesecake flavor" },
      { name: "Honey Lavender", category: "dessert", yearMade: 2015, price: 6.29, flavorDescription: "Subtle lavender floral notes with sweet honey" },
      { name: "Peanut Butter Fudge", category: "dessert", yearMade: 2008, price: 5.99, flavorDescription: "Creamy peanut butter swirled with rich fudge" }
    ],
    topTen: ["Vanilla", "Chocolate", "Strawberry","Mint Chocolate Chip", "Cookies and Cream", "Rocky Road", "Butter Pecan", "Chocolate Chip Cookie Dough", "Pistachio", "Neapolitan"
  ]};

app.use((request, responce, next) => {
  console.log(request.method + "" + request.url)
  next()
});

app.get ("/", (request, responce) => {
    responce.status(200).send("<center><h1>Hi welcome to the ice cream server go to /docs in the link to see options.</h1> </center>")
});


app.get ("/docs", (request, responce) => {
  responce.status(200).send("<center><h4>You are able to search for different ice cream categories including /sorbet, /classic, /nutty, and /dessert as well as look up the most popular ice cream flavors ---> /topten (A few options to look up /topten, /sorbet, /dessert, /nutty, /classic.</h4> </center>")
});


app.get("/classic", (request, responce) => {
  responce.status(200).json(icecreamList.classic)
});

app.get("/sorbet", (request, responce) => {
  responce.status(200).json(icecreamList.sorbet)
});

app.get("/dessert", (request, responce) => {
  responce.status(200).json(icecreamList.dessert)
});
  
app.get("/nutty", (request, responce) => {
  responce.status(200).json(icecreamList.nutty)
});

app.get("/topten", (request, responce) => {
  responce.status(200).json(icecreamList.topTen)
});
 
app.use((request, responce, next)=>{
  responce.status(404).send("404 not found")
  next()
})

app.listen(3000, () => {
    console.log("server running")
})  
  
  
    