import React from 'react';
import { PinContainer } from './ui/Pin';
import { projects } from '../data';

const MyProject = () => {
    return (
        <div className="w-full bg-[#0d0d1a] py-10 px-6">
            <h1 className="text-3xl text-[#00f2ff] font-bold text-center mb-8">
                My Projects
            </h1>

            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                {projects.map((item) => (
                    <div
                        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                        key={item.id}
                    >
                        <PinContainer title={item.link} href={item.link}>
                            <div className="rounded-2xl border border-white/10 bg-[#13132d] overflow-hidden flex flex-col w-full sm:w-[380px]">
                                {/* Screenshot */}
                                <div className="w-full h-48 sm:h-56 overflow-hidden bg-[#0a0a1a] flex items-center justify-center">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col gap-3">
                                    <h3 className="text-white font-bold text-lg leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {item.des}
                                    </p>

                                    {/* Footer: icons */}
                                    <div className="flex items-center justify-between mt-2 pt-4">
                                        {/* Tech Icons */}
                                        <div className="flex items-center gap-2">
                                            {item.iconLists.map((icon, i) => (
                                                <div
                                                    key={i}
                                                    className="w-8 h-8 rounded-full bg-[#1e1e3f] border border-white/10 flex items-center justify-center"
                                                >
                                                    <img
                                                        src={icon}
                                                        alt="tech icon"
                                                        className="w-4 h-4 object-contain"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Hint (outer PinContainer handles navigation) */}
                                        <div className="flex items-center gap-1 text-[#00f2ff] text-sm font-medium">
                                            <span>Check Live Site</span>
                                            <span className="text-base">↗</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProject;

