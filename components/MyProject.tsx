import React from 'react';
import { PinContainer } from './ui/Pin';
import { projects } from '../data';

const MyProject = () => {
    return (
        <div className="w-full bg-[#0d0d1a] py-20 px-4" id="projects">
            <h1 className="text-3xl md:text-5xl text-[#00f2ff] font-bold text-center mb-10">
                My Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-y-44 lg:gap-y-32 gap-x-6 mt-10 justify-items-center">
                {projects.map((item) => (
                    <div
                        className="flex items-center justify-center w-[90vw] sm:w-[420px] md:w-[320px] lg:w-[380px] xl:w-[420px] min-h-[25rem] md:min-h-[28rem] lg:min-h-[30rem]"
                        key={item.id}
                    >
                        <PinContainer title={item.link} href={item.link}>
                            <div className="relative flex items-center justify-center w-[90vw] sm:w-[420px] md:w-[320px] lg:w-[380px] xl:w-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#13132d]">
                                <div className="flex flex-col w-full">
                                    <div className="relative w-full h-48 sm:h-64 md:h-44 lg:h-56 overflow-hidden bg-[#0a0a1a]">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="absolute bottom-0 w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="p-4 md:p-4 lg:p-6">
                                        <h3 className="font-bold text-base md:text-lg lg:text-2xl line-clamp-1 text-white">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm md:text-sm lg:text-base font-light line-clamp-2 text-slate-400 mt-2">
                                            {item.des}
                                        </p>

                                        <div className="flex items-center justify-between mt-5 mb-3">
                                            <div className="flex items-center">
                                                {item.iconLists.map((Icon, i) => (
                                                    <div
                                                        key={i}
                                                        className="border border-white/[.2] rounded-full bg-[#1e1e3f] w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center"
                                                        style={{
                                                            transform: `translateX(-${5 * i + 2}px)`,
                                                        }}
                                                    >
                                                        <Icon className="p-1.5 text-white w-full h-full" />
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex justify-center items-center">
                                                <p className="flex text-sm md:text-xs lg:text-lg text-[#00f2ff]">
                                                    Live Site
                                                </p>
                                                <span className="ms-2 text-[#00f2ff]">↗</span>
                                            </div>
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