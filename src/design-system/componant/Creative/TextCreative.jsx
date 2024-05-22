import Creative from "./Creative";
import DataCreative from "./DataCreative";
import "./StyleCreative.css";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -120 },
  visible: { opacity: 1, x: 0 },
};
export default function TextCreative() {
  return (
    <>
      <div className="Container">
        {" "}
        <motion.div
          className="element"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
          variants={variants}
        >
          {" "}
          <div className="head">
            <h2>
              Creative <span>Speakers</span>
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quis, tempora nesciunt quidem repellat{" "}
            </p>
          </div>
        </motion.div>
        <div className="container-1">
          {DataCreative.map((item) => {
            return (
              <Creative
                img={item.image}
                nameUser={item.name}
                job={item.job}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
