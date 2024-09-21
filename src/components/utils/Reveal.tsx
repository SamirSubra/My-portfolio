import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, ElementType } from "react";

interface Props {
    children: React.ReactNode;
    as: ElementType;
    className?: string;
}

export const Reveal = ({ children, as, className }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const variants = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
        div: {
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 }
        }
    };

    const MotionComponent = motion[as];

    return (
        <MotionComponent
            ref={ref}
            className={className}
            variants={as === "div" ? variants.div : variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
        >
            {children}
        </MotionComponent>
    );
};

export default Reveal;