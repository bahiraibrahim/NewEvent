/* eslint-disable react/prop-types */
import "./Ourprograms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Ourprograms({
  image,
  icon1,
  imageAdrees,
  time,
  adrees,
  job,
  title,
  name,
}) {
  return (
    <>
          <div className="body-content">
            <div className="left">
              <img src={image} className="img-programs" />
            </div>
            <div className="right">
              <div className="time">
                <div className="hour">
                  <FontAwesomeIcon icon={icon1} className="icon-clock"/>
                  <span className="span">{time}</span>
                </div>
                <div>
                  <img src={imageAdrees} className="location"/>
                  <span className="span">{adrees}</span>
                </div>
              </div>
              <h2>{job}</h2>
              <p>{name}</p>
              <p>{title}</p>
            </div>
          </div>
    </>
  );
}
