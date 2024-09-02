// In `config/client.js`
const { MongoClient } = require("mongodb");

async function client() {
  try{
    const client = new MongoClient("mongodb+srv://kbrmanish01:VrI6r7rR04Xud1k9@cluster0.pxxma.mongodb.net/Zimeshare_Assignment?retryWrites=true&w=majority");
    await client.connect();
    return client;
  }
  catch(error){
    console.log(error);
  }
 
}

module.exports = client;

const giveCollection = async (collectionName) => {
  try {
    const clientConnect = await client();
    const db = clientConnect.db("Zimeshare_Assignment");
    const collection = db.collection(collectionName);
    return collection;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { giveCollection };
