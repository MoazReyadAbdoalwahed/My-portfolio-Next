"use client";

import React from "react";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Clients = () => {
    return (
        <section id="testimonials" className="py-20 bg-black-100">
            <h1 className="text-4xl font-bold text-center mb-12 text-white">
                Kind words from
                <span className="text-[#00f2ff]"> satisfied clients</span>
            </h1>

            <div className="flex flex-col items-center max-lg:mt-10">
                <div className="w-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </section>
    );
};

export default Clients;