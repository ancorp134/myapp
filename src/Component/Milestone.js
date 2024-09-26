import React from "react";
import '../index.css'

const Milestones = () => {
  const milestones = [
    {
      date: "23 APR",
      title: "FOP Awareness Day",
      details: "23rd April 2024, all day"
    },
    {
      date: "10 MAY",
      title: "IFOPA Family Gathering 2024",
      details: "10th May 2024, all day, Manchester, UK"
    },
    {
      date: "27-30 SEP",
      title: "ASBMR Annual Meeting 2024",
      details: "27-30th September 2024, Toronto, Canada"
    },
    {
      date: "23-25 OCT",
      title: "World Orphan Drug Congress 2024",
      details: "23-25th October 2024, Barcelona, Spain"
    },
    {
      date: "1 DEC",
      title: "End of Year Review",
      details: "1st December 2024, New York, USA"
    }
  ];

  let milestonesJSX = []; 
  const totalMilestones = Math.min(5, milestones.length);

  for (let i = 0; i < totalMilestones; i++) {
    let milestone = milestones[i];
    let jsx = (
      <div key={i} className="milestone">
        <div className="date">
          <p>{milestone.date.split(' ')[0]}<br />{milestone.date.split(' ')[1]}</p>
        </div>
        <div className="event">
          <h3>{milestone.title}</h3>
          <p>{milestone.details}</p>
        </div>
      </div>
    );
    milestonesJSX.push(jsx);
  }

  return (
    <div className="milestones-container">
      <div className="header">
        <h2>Upcoming milestones</h2>
        <a href="#">See all</a>
      </div>
      {milestonesJSX}
    </div>
  );
};

export default Milestones;
