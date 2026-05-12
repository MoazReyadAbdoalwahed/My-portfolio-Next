"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
    return (
        <section className="w-full bg-[#0d0d1a]">
            <div className="text-center pt-20">
                <h1 className="text-4xl font-bold text-white">
                    My <span className="text-[#00f2ff]">Tech Journey</span>
                </h1>
            </div>

            <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
                <Card
                    title="Frontend Mastery"
                    icon={<AceternityIcon order="Step 1" />}
                    descripton="Building responsive, high-performance web applications using React, JavaScript, and Tailwind CSS."
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>

                <Card
                    title="Freelance Solutions"
                    icon={<AceternityIcon order="Step 2" />}
                    descripton="Delivering custom digital products and e-commerce platforms like 'Laban Shop'."
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[[236, 72, 153], [232, 121, 249]]}
                        dotSize={2}
                    />
                </Card>

                <Card
                    title="The Full-Stack Vision"
                    icon={<AceternityIcon order="Step 3" />}
                    descripton="Expanding into the MERN stack to bridge the gap between frontend and backend."
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </section>
    );
}

const Card = ({
    title,
    icon,
    children,
    descripton,
}: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    descripton?: string;
}) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setHovered(!hovered)}
            className="border border-white/10 group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[20rem] bg-black-100 overflow-hidden cursor-pointer isolate"
        >
            {/* Corner Icons */}
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white opacity-30 z-50" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white opacity-30 z-50" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white opacity-30 z-50" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white opacity-30 z-50" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full w-full absolute inset-0 z-0 pointer-events-none"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-10 pointer-events-none flex flex-col items-center justify-center h-full w-full">
                {/* 
                   Fix: We use the 'hovered' state directly instead of CSS group-hover 
                   to ensure it works on mobile taps.
                */}
                <div
                    className={`transition-all duration-300 flex items-center justify-center
                    ${hovered ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`}
                >
                    {icon}
                </div>

                <div
                    className={`transition-all duration-300 flex flex-col items-center absolute
                    ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                    <h2 className="text-white text-3xl font-bold text-center">
                        {title}
                    </h2>
                    <p className="text-sm text-[#E4ECFF] mt-4 font-medium text-center px-4">
                        {descripton}
                    </p>
                </div>
            </div>
        </div>
    );
};

const AceternityIcon = ({ order }: { order?: string }) => {
    return (
        <div className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-xl font-bold text-white backdrop-blur-3xl whitespace-nowrap">
                {order}
            </span>
        </div>
    );
};

export const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};