import MeetupList from '../components/meetups/MeetupList';

const dummy = [
  {
    id: 'meet1',
    title: 'Presentation',
    image:
      'https://images.unsplash.com/photo-1631515998698-5738f613c5cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    address: 'address 125, 12435 Panda City',
  },
  {
    id: 'meet2',
    title: 'Cooking',
    image:
      'https://images.unsplash.com/photo-1631515998698-5738f613c5cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    address: 'address 125, 12435 Panda City',
  },
  {
    id: 'meet3',
    title: 'Studying',
    image:
      'https://images.unsplash.com/photo-1631515998698-5738f613c5cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    address: 'address 125, 12435 Panda City',
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export function getStaticProps() {
  // fetching data from API
  return {
    props: {
      meetups: dummy,
    },
  };
}

export default HomePage;
