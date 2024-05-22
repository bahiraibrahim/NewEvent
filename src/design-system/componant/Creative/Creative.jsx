/* eslint-disable react/prop-types */
import "./StyleCreative.css";
export default function Creative({ img, nameUser, job }) {
  return (
    <>
      <div className="creative">
        <div className="slider">
          <img className="img" src={img} />
          <h3>{nameUser}</h3>
          <p>{job}</p>
        </div>
      </div>
    </>
  );
}
