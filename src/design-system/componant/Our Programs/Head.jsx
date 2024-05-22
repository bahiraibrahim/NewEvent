import { useState } from "react";
import { tab1, tab2, tab3 } from "./Tabs";
import "./Ourprograms.css";
import Ourprograms from "./Ourprograms";

export default function Head() {
  const [tab, setTab] = useState("tab1");

  const switchTab = (tab) => {
    setTab(tab);
  };
  return (
    <>
      <div className="head-content">
        <h4
          style={{ color: tab === "tab1" ? "#f2545f" : "" }}
          onClick={() => switchTab("tab1")}
        >
          First Day
        </h4>
        <h4
          style={{ color: tab === "tab2" ? "#f2545f" : "" }}
          onClick={() => switchTab("tab2")}
        >
          Second Day
        </h4>
        <h4
          style={{ color: tab === "tab3" ? "#f2545f" : "" }}
          onClick={() => switchTab("tab3")}
        >
          Third Day
        </h4>
      </div>
      <hr />
      {tab === "tab2"
        ? tab2.map((item) => {
            return (
              <Ourprograms
                image={item.image}
                icon1={item.icon1}
                imageAdrees={item.imageAdrees}
                time={item.time}
                adrees={item.adrees}
                job={item.job}
                title={item.title}
                name={item.name}
                key={item.id}
              />
            );
          })
        : tab === "tab3"
        ? tab3.map((item) => {
            return (
              <Ourprograms
                image={item.image}
                icon1={item.icon1}
                imageAdrees={item.imageAdrees}
                time={item.time}
                adrees={item.adrees}
                job={item.job}
                title={item.title}
                name={item.name}
                key={item.id}
              />
            );
          })
        : tab1.map((item) => {
            return (
              <Ourprograms
                image={item.image}
                icon1={item.icon1}
                imageAdrees={item.imageAdrees}
                time={item.time}
                adrees={item.adrees}
                job={item.job}
                title={item.title}
                name={item.name}
                key={item.id}
              />
            );
          })}
    </>
  );
}
