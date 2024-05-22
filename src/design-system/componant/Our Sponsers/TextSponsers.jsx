import "./StyleSponsers.css";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0.5, x: 550 },
  visible: { opacity: 1, x: 0 },
};
let vari = {
  hidden: { opacity: 0.5, x: -550 },
  visible: { opacity: 1, x: 0 },
};

export default function TextSponsers() {
  return (
    <>
      <div className="container-3">
        <div className="head-sponser">
          <motion.div
            className="element"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1 }}
            variants={variants}
          >
            <h2>
              Our <span>Sponsers</span>
            </h2>
          </motion.div>

          <motion.div
            className="element"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1 }}
            variants={vari}
          >
            <p>
              Lorem, ipsumolor sit amet consectetur adipisicing elit.
              Consequuntur quis
            </p>
          </motion.div>
        </div>
        <div className="content-sponser">
          <div className="btn-sponser">SPONSER ONE</div>
          <div className="btn-sponser">SPONSER TWO</div>
          <div className="btn-sponser">SPONSER THREE</div>
          <div className="btn-sponser">SPONSER FOUR</div>
        </div>
      </div>
    </>
  );
}
