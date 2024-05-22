import image from "../../../../../public/about.jpeg";
import "./AboutUs.css";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -250 },
  visible: { opacity: 1, x: 0 },
};
let vari = {
  hidden: { opacity: 0, x: 250 },
  visible: { opacity: 1, x: 0 },
};


export default function AboutUs() {
  return (
    <>
      <div className="container-about">
        <div className="about">
          <motion.div
            className="element"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1 }}
            variants={variants}
          >
            <div id="left-about">
              <h2>
                New Event is a fuly responsive one-page template for events
                conferences or workshops
              </h2>
              <p>
                Lorem, ipsumolor sit amet consectetur adipisicing elit.
                Consequuntur quis, tempora nesciunt quidem repellat dolorem quae
                mollitia, eius quia Lorem, ipsumolor sit amet consectetur
                adipisicing elit. Consequuntur quis
              </p>
              <p>
                Lorem, ipsumolor sit amet consectetur adipisicing elit.
                Consequuntur quis, tempora nesciunt quidem repellat dolorem quae
                mollitia, eius quia Lorem, ipsumolor sit amet consectetur
                adipisicing elit. Consequuntur quis
              </p>
            </div>
          </motion.div>

          <motion.div
            className="element"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1 }}
            variants={vari}
          >
            <div className="right-about">
              <img src={image} />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
