"use client";

import { useState } from "react";

import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";

// سنستخدم الـ Spotlight هنا بدلاً من الـ BackgroundGradientAnimation لإعطاء لمسة فريدة
import { Spotlight } from "./Spotlight";
import MagicButton from "./Magicbutton";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                // استخدام grid-cols-5 للحصول على مربعات أكثر استقامة واحترافية
                "grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    // تحديث الـ Tech Stack بما يناسبك (MERN Stack)
    const leftLists = ["ReactJS", "Express.js", "MongoDB"];
    const rightLists = ["Next.js", "Node.js", "TailwindCSS"];

    const [copied, setCopied] = useState(false);

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleCopy = () => {
        // لا تنسَ تغيير هذا الإيميل لإيميلك الحقيقي
        const text = "abdoalwahedmoaz@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

    return (
        <div
            className={cn(

                "row-span-1 relative overflow-hidden rounded-xl border border-cyan-800/30 group/bento hover:border-cyan-500/80 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition duration-500 bg-[#0a0f1e] justify-between flex flex-col space-y-4",
                className
            )}
        >
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center opacity-60")} // تقليل الـ opacity للصور الخلفية
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-60"
                        } `}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>
                {id === 6 && (
                    <Spotlight className="-top-10 left-0 md:left-20 md:-top-20" fill="cyan" />
                )}

                <div
                    className={cn(
                        titleClassName,
                        "relative md:h-full min-h-40 flex flex-col px-6 p-6 lg:p-10 z-20"
                    )}
                >
                    <div className="font-mono font-normal md:text-xs lg:text-sm text-sm text-cyan-300 z-10 tracking-wider">
                        {description}
                    </div>
                    <div
                        className={`font-sans text-xl lg:text-4xl max-w-96 font-extrabold z-10 text-white tracking-tight`}
                    >
                        {title}
                    </div>

                    {id === 2 && <GridGlobe />}

                    {id === 3 && (
                        <div className="flex gap-2 w-full mt-auto mb-2 flex-wrap justify-center md:justify-start">
                            {leftLists.map((item, i) => (
                                <span
                                    key={i}
                                    className="py-1 px-3 text-xs md:text-sm font-mono rounded-none text-center bg-[#0d152a] text-cyan-400 border border-cyan-800/50 hover:border-cyan-400 hover:text-cyan-100 transition duration-300"
                                >
                                    {item}
                                </span>
                            ))}
                            {rightLists.map((item, i) => (
                                <span
                                    key={i}
                                    className="py-1 px-3 text-xs md:text-sm font-mono rounded-none text-center bg-[#0d152a] text-cyan-400 border border-cyan-800/50 hover:border-cyan-400 hover:text-cyan-100 transition duration-300"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    )}

                    {id === 6 && (
                        <div className="mt-8 relative">
                            <div
                                className={`absolute -bottom-10 right-0 ${copied ? "block" : "block"
                                    }`}
                            >
                                <Lottie options={defaultOptions} height={200} width={400} />
                            </div>

                            <MagicButton
                                title={copied ? "Email Copied!" : "copy email"}
                                icon={<IoCopyOutline />}
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};