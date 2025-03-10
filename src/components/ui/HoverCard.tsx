import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverCardProps {
    children: ReactNode;
    className?: string;
}

export default function HoverCard({ children, className = '' }: HoverCardProps) {
    return (
        <motion.div
            className={className}
            whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.div>
    );
} 