import "./Questions.css";
import { data } from "./DataQuestions";
import { useState } from "react";

export default function Questions() {
  const [active, setActive] = useState(null);

  const toggle = (i) => {
    if (active === i) {
      return setActive(null);
    }
    setActive(i);
  };
  return (
    <>
      <div className="container-questions">
        <div className="head-questions">
          <h2>
            Do You Have <span>Questions </span>?
          </h2>
          <p>
            Lorem, ipsumolor sit amet consectetur adipisicing elit. Consequuntur
            quis
          </p>
        </div>
        <div className="content-questions">
          {data.map((item, i) => {
            return (
              <>
                <div className="item" key={i} onClick={() => toggle(i)}>
                  <div className="title-question">
                    <h2>{item.questions}</h2>
                    <span>{active === i ?"-":"+"}</span>
                  </div>
                  <div id="content-drop" className={active === i ? "show" : ""}>
                    <p>{item.answerOne}</p>
                    <p>{item.answerTwo}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
