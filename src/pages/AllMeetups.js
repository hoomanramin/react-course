import {useEffect, useState} from "react";
import MeetupList from "../components/layout/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://react-course-f40d7-default-rtdb.firebaseio.com/meetups.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setLoading(false);
        setData(meetups);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={data} />
    </section>
  );
};

export default AllMeetupsPage;
