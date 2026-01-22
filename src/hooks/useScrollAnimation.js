import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: '0px 0px -100px 0px'
  });

  return { ref, inView };
};

export const ScrollAnimatedComponent = ({ 
  children, 
  variants = {},
  initial = { opacity: 0, y: 30 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  threshold = 0.1,
  className = ''
}) => {
  const { ref, inView } = useScrollAnimation(threshold);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={transition}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default useScrollAnimation;
