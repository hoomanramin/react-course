import {useNavigate} from "react-router-dom";
import NewMeetupFrom from "../components/layout/meetups/NewMeetupFrom";

const NewMeetupPage = () => {
  const history = useNavigate();
  const addMeetupHandler = meetupData => {
    fetch(
      "https://react-course-f40d7-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => history("/"));
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupFrom onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
