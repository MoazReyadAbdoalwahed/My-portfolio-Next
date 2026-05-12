import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/Magicbutton";

const Footer = () => {
    return (
        <footer
            className="w-full pt-20 pb-10 relative overflow-hidden bg-black-100"
            id="contact"
        >
            <div className="flex flex-col items-center relative z-10 px-4">
                <h1 className="heading lg:max-w-[45vw] text-white text-center">
                    Ready to take <span className="text-[#00f2ff]">your</span> digital
                    presence to the next level?
                </h1>

                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>

                <a
                    href="mailto:abdoalwahedmoaz@gmail.com"
                    className="mt-6 mb-10"
                >
                    <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} />
                </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 px-4 z-20 relative">
                {socialMedia.map((info) => {
                    const Icon = info.img;
                    return (
                        <a
                            key={info.id}
                            href={info.link}
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 sm:w-10 sm:h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-[#00f2ff] rounded-lg border border-black-300"
                        >
                            <Icon className="w-5 h-5 sm:w-5 sm:h-5" />
                        </a>
                    );
                })}
            </div>

            <p className="md:text-base text-sm md:font-normal font-light text-white-100 text-center mt-10 relative z-10">
                Copyright © 2026 Moaz
            </p>
        </footer>
    );
};

export default Footer;

