import React from 'react';
import { Link } from 'react-router-dom';

const SingleTeam = (props) => {
    return (
      <div className="col-sm-6 col-lg-3">
        <div className="hover-team">
          <div className="our-team">
            <img src={props.src} alt="" />
            <div className="team-content">
              <h3 className="title">{props.title}</h3>
              <span className="post">{props.post}</span>
            </div>
            <ul className="social">
              <li>
                <Link to="#" className="fab fa-facebook"></Link>
              </li>
              <li>
                <Link to="#" className="fab fa-twitter"></Link>
              </li>
              <li>
                <Link to="#" className="fab fa-google-plus"></Link>
              </li>
              <li>
                <Link to="#" className="fab fa-youtube"></Link>
              </li>
            </ul>
            <div className="icon">
              {" "}
              <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
          </div>
          <div className="team-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              urna diam, maximus ut ullamcorper quis, placerat id eros. Duis
              semper justo sed condimentum rutrum. Nunc tristique purus turpis.
              Maecenas vulputate.{" "}
            </p>
          </div>
          <hr className="my-0" />
        </div>
      </div>
    );
};

export default SingleTeam;