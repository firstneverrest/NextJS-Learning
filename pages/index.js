import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  // fetching data from API
  const client = await MongoClient.connect(
    'mongodb+srv://neverrest:AVGt4g8Kq6MDFPF6@cluster0.1f312.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
      revalidate: 1,
    },
  };
}

export default HomePage;
