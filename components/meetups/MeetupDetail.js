import classes from './MeetupDetail.module.css';

const MeetupDetail = (props) => {
  return (
    <section class={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.detail}</p>
    </section>
  );
};

export default MeetupDetail;
