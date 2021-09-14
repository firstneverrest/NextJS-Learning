import MeetingUpDetail from '../components/meetups/MeetupDetail';

const MeetupDetails = (props) => {
  return (
    <>
      <MeetingUpDetail
        image={props.image}
        title={props.title}
        address={props.address}
        description={props.description}
      />
    </>
  );
};

// in case of dynamic page and using getStaticProps()
// because the dynamic url is not pre-generated
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'meet1',
        },
      },
      {
        params: {
          meetupId: 'meet2',
        },
      },
      {
        params: {
          meetupId: 'meet3',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      image:
        'https://images.unsplash.com/photo-1631515998698-5738f613c5cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      id: meetupId,
      title: 'Presentation',
      address: '123, Panda City',
      description: 'This is a presentation',
    },
  };
}

export default MeetupDetails;
