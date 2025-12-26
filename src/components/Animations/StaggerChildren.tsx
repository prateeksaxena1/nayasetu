import React from 'react';
import { motion } from 'framer-motion';

interface StaggerChildrenProps {
    children: React.ReactNode;
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

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
};

export default StaggerChildren;
