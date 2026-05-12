"use client";
import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: React.ReactNode;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();

    // Set to true so it shows on the "first page" / top of the site
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            const previous = scrollYProgress.getPrevious();
            const direction = current - (previous ?? 0);

            // If we are at the very top (less than 5% scrolled), keep it visible
            if (current < 0.05) {
                setVisible(true);
            } else {
                // If scrolling up, show; if scrolling down, hide
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit fixed top-10 inset-x-0 mx-auto z-[5000] items-center justify-center",
                    className
                )}
            >
                <div className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/80 px-4 py-2 shadow-lg shadow-black/10 backdrop-blur-md dark:border-white/10 dark:bg-black/50">
                    {/* Nav items container */}
                    <div className="flex items-center gap-2">
                        {navItems.map((navItem, idx: number) => (
                            <a
                                key={`link-${idx}`}
                                href={navItem.link}
                                className={cn(
                                    "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
                                )}
                            >
                                <span className="block sm:hidden">{navItem.icon}</span>
                                <span className="text-sm">{navItem.name}</span>
                            </a>
                        ))}
                    </div>

                    <div className="h-5 w-px bg-neutral-200 dark:bg-white/10 mx-2" />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};