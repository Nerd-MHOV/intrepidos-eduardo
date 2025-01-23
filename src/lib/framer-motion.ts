export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

export const slideIn = (direction: "left" | "right" | "up" | "down") => {
  const variants = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    up: { y: -100, opacity: 0 },
    down: { y: 100, opacity: 0 },
  };

  return {
    hidden: variants[direction],
    visible: { x: 0, y: 0, opacity: 1, transition: { duration: 1 } },
  };
};
