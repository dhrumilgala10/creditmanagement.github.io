const {MongoClient} = require('mongodb')
const faker=require('faker')
const MONGO_URL =  process.env.MONGODB_URL


MongoClient.connect(MONGO_URL, (err, client) => {
  if (err) {
    throw err
  }

  const dbuser = client.db("dbuser")
  const users = dbuser.collection("users")
  const transactions=dbuser.collection("transactions")
  
  users.insertMany([
    {
      name: "Vivek",
      Account_balance: 391,
      Email_id: "vivek@gmail.com",
        FatherName:"Vinay"
      
    },
    {
        name: "Prasham",
        Account_balance: 599,
        Email_id: "prasham@gmail.com",
      FatherName:"Dhiren"
      },
      {
        name: "Dhruv",
        Account_balance: 301,
        Email_id: "dhruv@gmail.com",
      FatherName:"Ajay"
      },
      {
        name: "Ramesh",
        Account_balance: 201,
        Email_id: "ramesh@gmail.com",
      FatherName:"Suresh"
      },
      {
        name: "Aditya",
        Account_balance: 204,
        Email_id: "adi@gmail.com",
      FatherName:"Amar"
      },
      {
        name: "Piyush",
        Account_balance: 700,
        Email_id: "piyush@gmail.com",
      FatherName:"Pankaj"
      },
      {
        name: "Harsh",
        Account_balance: 203,
        Email_id: "harsh@gmail.com",
      FatherName:"Manish"
      },
      {
        name: "Raj",
        Account_balance: 300,
        Email_id: "raj@gmail.com",
      FatherName:"Vipul"
      },
      {
        name: "Sahil",
        Account_balance: 201,
        Email_id: "sahil@gmail.com",
      FatherName:"Suresh"
      },
      {
        name: "Bipin",
        Account_balance: 300,
        Email_id: "bipin@gmail.com",
      FatherName:"Bakul"
      },
  ], (err, result) => {
    if (err) {
      throw err;
    }
    console.log("DATA INSERTED")
  })
})


