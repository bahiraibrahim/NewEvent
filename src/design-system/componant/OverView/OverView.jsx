/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OverView({icon,title,description}) {
  return (
    <>
<div className="over-view">
          <div className="icon">
            <FontAwesomeIcon icon={icon} />
          </div>
          <p className="title">{title}</p>
          <p className="desic">{description}</p>
</div>
    </>
  );
}
