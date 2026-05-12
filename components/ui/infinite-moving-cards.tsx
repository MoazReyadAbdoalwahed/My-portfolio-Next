"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        // Only clone once
        if (scroller.getAttribute("data-cloned") === "true") {
            setStart(true);
            return;
        }

        const items = Array.from(scroller.children);
        items.forEach((item) => {
            const clone = item.cloneNode(true) as HTMLElement;
            clone.setAttribute("aria-hidden", "true");
            scroller.appendChild(clone);
        });

        scroller.setAttribute("data-cloned", "true");
        setStart(true);
    }, []);

    const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";

    const animationDirection = direction === "left" ? "forwards" : "reverse";

    return (
        <div
            className={cn(
                "scroller relative z-20 w-full overflow-hidden",
                "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                "[-webkit-mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
                style={
                    start
                        ? {
                            animation: `scroll ${duration} linear infinite ${animationDirection}`,
                        }
                        : undefined
                }
            >
                {items.map((item, idx) => (
                    <li
                        key={`${item.name}-${idx}`}
                        className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-zinc-700 bg-[linear-gradient(180deg,#1c1c2e,#13132d)] px-8 py-6 md:w-[450px]"
                    >
                        <blockquote>
                            <p className="relative z-20 text-sm leading-[1.6] font-normal text-gray-100">
                                {item.quote}
                            </p>
                            <div className="relative z-20 mt-6 flex flex-row items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple/20 text-purple font-bold text-sm">
                                    {item.name.charAt(0)}
                                </div>
                                <span className="flex flex-col gap-0.5">
                                    <span className="text-sm font-medium text-gray-200">
                                        {item.name}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {item.title}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>

            {/* Inject keyframe directly — guarantees it exists regardless of Tailwind purging */}
            <style>{`
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to   { transform: translateX(calc(-50% - 0.5rem)); }
                }
            `}</style>
        </div>
    );
};