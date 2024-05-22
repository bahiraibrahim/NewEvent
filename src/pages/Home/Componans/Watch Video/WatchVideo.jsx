import './WatchVideo.css'
import video from '../../../../../public/2.mp4'
import { motion } from 'framer-motion';


const variants = {
  hidden: { opacity: 0, x: 150 },
  visible: { opacity: 1, x: 0 }
};

export default function WatchVideo() {
  return (
    <>
            <div className="container-watch">
        <div className="watch">
        <motion.div
    className="element"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 1 }}
    variants={variants}
  >
          <div className="left-watch">
            <h2>
              Watch Video
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
              mollitia, eius quia
              Lorem, ipsumolor sit amet consectetur adipisicing elit.
              Consequuntur quis
            </p>
          </div>
  </motion.div>

          <div className="right-watch">
            <video src={video} controls autoPlay/>
          </div>
        </div>
      </div>
    </>
  )
}
