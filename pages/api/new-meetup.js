import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = JSON.parse(req.body);

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.1f312.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    // close connection to database
    client.close();

    res.status(201).json({ message: 'Meetup Inserted' });
  }
}

export default handler;
