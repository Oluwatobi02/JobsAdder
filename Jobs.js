
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "Add uri"
console.log(uri)

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
client.connect()
const Job = client.db("jobs").collection("jobs")

async function addJob(job) {
    try {
        await Job.insertOne(job)
        console.log('added')
    } catch(err){
        console.log(err)
    }
}



module.exports = {addJob}
