import { tab1, tab2, tab3 } from "./Tabs.jsx";
import Head from "./Head";
import Ourprograms from "./Ourprograms";
import "./Ourprograms.css";
import { motion } from 'framer-motion';


const variants = {
  hidden: { opacity: 0, x: 350 },
  visible: { opacity: 1, x: 0 },
};
export default function TextOurPrograms() {
  return (
    <>
      <div className="Container-1">
      <motion.div
    className="element"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 1 }}
    variants={variants}
  >
     <div className="head-programs">
          <h2>
            Our <span>Programs</span>
          </h2>
          <p>
            Lorem, ipsumolor sit amet consectetur adipisicing elit. Consequuntur
            quis
          </p>
        </div>
  </motion.div>
   
        <Head />

        <div className="container-2">
        
          {tab1.map((item) => {
            return (
              <>
              <div className="tab">
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
              </div>
              </>
            );
          })}
          {tab2.map((item) => {
            return (
              <>
              <div className="tab2">
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
              </div>
              </>
            );
          })}
          {tab3.map((item) => {
            return (
              <>
              <div className="tab3">
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
              </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
