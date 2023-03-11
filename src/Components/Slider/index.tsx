import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import styles from "./Slider.module.scss";

import image1 from "public/images/1.jpg";
import image2 from "public/images/1.jpg";
import image3 from "public/images/1.jpg";
import image4 from "public/images/1.jpg";
import image5 from "public/images/1.jpg";
import Image from "next/image";

const images = [image1, image2, image3, image4, image5];

interface IProps {
  carousel : any
}

export function Slider( {carousel} : IProps) {
  //const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, [carousel]);

  return (
    <>
      <motion.div
        ref={carousel}
        className={styles.carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className={styles.inner}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{x:100}}
          animate={{ x:0}}
          transition={{duration: 0.8}}
        >
          {images.map((image, idx) => (
            <motion.div key={idx} className={styles.item}>
              <Image className={styles.img} src={image} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
