import React from 'react';
import SingleTeam from './SingleTeam';

const Team = () => {
    return (
      <span>
        <div className="row my-4">
          <div className="col-12">
            <h2 className="noo-sh-title">Meet Our Team</h2>
          </div>
        
        <SingleTeam
          src="images/img-1.jpg"
          title="Williamson"
          post="Web Developer"
        ></SingleTeam>
        <SingleTeam
          src="images/img-2.jpg"
          title="Kristiana"
          post="Web Developer"
        ></SingleTeam>
        <SingleTeam
          src="images/img-3.jpg"
          title="Steve Thomas"
          post="Web Developer"
        ></SingleTeam>
        <SingleTeam
          src="images/img-2.jpg"
          title="John Deo"
          post="Web Developer"
        ></SingleTeam>
        </div>
      </span>
    );  
};

export default Team;