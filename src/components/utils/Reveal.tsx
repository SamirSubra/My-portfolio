import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef, ElementType, ReactNode } from "react";

interface Props {
    children: ReactNode;
    as: keyof typeof motion; // Permet d'utiliser tout composant disponible dans motion
    className?: string;
}

export const Reveal = ({ children, as, className }: Props) => {
    const ref = useRef<HTMLElement | null>(null); // Typage explicite du ref
    const isInView = useInView(ref);
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const variants: Variants = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
    };

    // Typage du MotionComponent
    const MotionComponent: ElementType = motion[as];

    return (
        <MotionComponent
            ref={ref}
            className={className}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
        >
            {children}
        </MotionComponent>
    );
};

export default Reveal;
