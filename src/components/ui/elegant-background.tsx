"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-emerald-500/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-emerald-500/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(16,185,129,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

export function ElegantBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Light theme gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/[0.3] via-transparent to-blue-50/[0.3] blur-3xl" />
            
            {/* Elegant shapes with light theme colors */}
            <ElegantShape
                delay={0.3}
                width={600}
                height={140}
                rotate={12}
                gradient="from-emerald-500/[0.15]"
                className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
            />

            <ElegantShape
                delay={0.5}
                width={500}
                height={120}
                rotate={-15}
                gradient="from-blue-500/[0.15]"
                className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
            />

            <ElegantShape
                delay={0.4}
                width={300}
                height={80}
                rotate={-8}
                gradient="from-teal-500/[0.15]"
                className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
            />

            <ElegantShape
                delay={0.6}
                width={200}
                height={60}
                rotate={20}
                gradient="from-green-500/[0.15]"
                className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
            />

            <ElegantShape
                delay={0.7}
                width={150}
                height={40}
                rotate={-25}
                gradient="from-cyan-500/[0.15]"
                className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
            />

            {/* Additional light theme shapes */}
            <ElegantShape
                delay={0.8}
                width={180}
                height={50}
                rotate={35}
                gradient="from-emerald-400/[0.12]"
                className="right-[5%] md:right-[10%] bottom-[20%] md:bottom-[25%]"
            />

            <ElegantShape
                delay={0.9}
                width={120}
                height={35}
                rotate={-40}
                gradient="from-teal-400/[0.12]"
                className="left-[15%] md:left-[20%] top-[60%] md:top-[65%]"
            />

            {/* Light theme gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10 pointer-events-none" />
        </div>
    );
}
