export const flipVariant = {
  hidden: { rotateY: 90, opacity: 0 },
  visible: { rotateY: 0, opacity: 1 },
};

export const tadaVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};
