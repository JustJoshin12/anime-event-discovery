'use-client'

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, useAnimate } from "framer-motion";

export const LoadingComponentAnimation = () => {
  return (
    <div className="grid h-72 place-content-center p-4">
      <ShuffleLoader />
    </div>
  );
};

const NUM_BLOCKS = 5;
const BLOCK_SIZE = 32;

const DURATION_IN_MS = 175;
const DURATION_IN_SECS = DURATION_IN_MS * 0.001;

const TRANSITION = {
  ease: "easeInOut",
  duration: DURATION_IN_SECS,
};

const ShuffleLoader = () => {
  const [blocks, setBlocks] = useState(
    Array.from(Array(NUM_BLOCKS).keys()).map((n) => ({ id: n }))
  );
  const [scope, animate] = useAnimate();
  const scopeRef = useRef(null);

  const pickTwoRandom = useCallback(() => {
    const index1 = Math.floor(Math.random() * blocks.length);
    let index2 = Math.floor(Math.random() * blocks.length);

    while (index2 === index1) {
      index2 = Math.floor(Math.random() * blocks.length);
    }

    return [blocks[index1], blocks[index2]];
  }, [blocks]);

  const delay = useCallback((ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }, []);

  const shuffle = useCallback(async () => {
    while (true) {
      const [first, second] = pickTwoRandom();

      await animate(`[data-block-id="${first.id}"]`, { y: -BLOCK_SIZE }, TRANSITION);
      await animate(`[data-block-id="${second.id}"]`, { y: BLOCK_SIZE }, TRANSITION);
      await delay(DURATION_IN_MS);

      setBlocks((pv) => {
        const copy = [...pv];
        const indexForFirst = copy.indexOf(first);
        const indexForSecond = copy.indexOf(second);
        copy[indexForFirst] = second;
        copy[indexForSecond] = first;
        return copy;
      });

      await delay(DURATION_IN_MS * 2);

      await animate(`[data-block-id="${first.id}"]`, { y: 0 }, TRANSITION);
      await animate(`[data-block-id="${second.id}"]`, { y: 0 }, TRANSITION);
      await delay(DURATION_IN_MS);
    }
  }, [animate, pickTwoRandom, delay]);

  useEffect(() => {
    if (scopeRef.current) {
      scope.current = scopeRef.current;
      shuffle();
    }
  }, [scopeRef, scope, shuffle]);

  return (
    <div ref={scopeRef} className="flex divide-x divide-neutral-950">
      {blocks.map((b) => {
        return (
          <motion.div
            layout
            data-block-id={b.id}
            key={b.id}
            transition={TRANSITION}
            style={{
              width: BLOCK_SIZE,
              height: BLOCK_SIZE,
            }}
            className="bg-white"
          />
        );
      })}
    </div>
  );
};
