const {MongoClient} = require('mongodb')
const faker=require('faker')
const MONGO_URL =  "mongodb+srv://sparks:sparks123@cluster0.bsuad.mongodb.net/<dbname>?retryWrites=true&w=majority"


MongoClient.connect(MONGO_URL, (err, client) => {
  if (err) {
    throw err
  }

  const dbuser = client.db("dbuser")
  const users = dbuser.collection("users")
  const transactions=dbuser.collection("transactions")

  
})