import { motion } from "framer-motion";
import { Children, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { Image } from "@/components/shared/image";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const hold = {
    width: CARD_WIDTH,
    marginRight: MARGIN,
  };

const Carousel = ({posts,children,breakpoints,cardSize,title, styles}) => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > breakpoints.lg ? 3 : width > breakpoints.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < cardSize * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += cardSize));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= cardSize));
  };

  return (
    <section className={`${styles?.section} py-8`} ref={ref}>
      <div className="relative overflow-hidden p-1 md:p-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <h2 className={styles.title}>{title}</h2>

            <div className="flex items-center gap-4">
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
};





export default Carousel;

