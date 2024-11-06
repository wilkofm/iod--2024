import { useState, useEffect } from "react";
import { useData } from "../hooks/UseData";

export function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(10);
  // const [activity, setActivity] = useState("");
  const response = useData(
    "https://www.jsonplaceholder.typicode.com/posts?_limit=" + participants
  );

  // let activity = response.body;

  console.log(response);

  return (
    <>
      {JSON.stringify(response[0].body)}
      <div className="ActivityFinder componentBox">
        <h3>Activity Finder</h3>
        <label>
          Choose number of participants:
          <select
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
          >
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </label>
        <div>
          <strong>Suggested Activity: </strong>
          {response?.map((post) => (
            <h3>{post.title}</h3>
          ))}
          {/* {activity} */}
        </div>
      </div>
    </>
  );
}
// ++ Reference https://www.boredapi.com/documentation and add a
// new dropdown to suggest an activity based on type
