import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

const NewMeetUpPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetupData) => {
    console.log(JSON.stringify(enteredMeetupData));
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
    });

    router.push('/');
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetUpPage;
