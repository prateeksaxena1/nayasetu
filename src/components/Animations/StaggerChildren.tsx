import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface StaggerChildrenProps {
    children: ReactNode;
    staggerDelay?: number;
    className?: string;
}

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: (staggerDelay: number = 0.1) => ({
        opacity: 1,
        transition: {
            staggerChildren: staggerDelay
        }
    })
};

export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const StaggerChildren: React.FC<StaggerChildrenProps> = ({
    children,
    staggerDelay = 0.1,
    className = ''
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            custom={staggerDelay}
            className={className}
        >
            {children}
        </motion.div>
    );
};

interface StaggerItemProps extends HTMLMotionProps<'div'> {
    children: ReactNode;
    className?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({ children, className = '', ...props }) => {
    return (
        <motion.div
            variants={itemVariants}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default StaggerChildren;
