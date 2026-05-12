import { FaReact, FaNodeJs, FaLinkedin, FaWhatsappSquare, FaGithub, } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export const gridItems = [
    {
        id: 1,
        title: "I prioritize building seamless, interactive user interfaces with a sharp eye for detail",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/about(1).png",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm highly adaptive, staying updated with the latest Web & AI trends",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly strive to evolve my skills",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "CS & AI Graduate with a passion for creative problem solving.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/about(2).png",
        spareImg: "/b4.svg",
    },
    {
        id: 5,
        title: "Currently architecting a full-scale E-commerce platform (MERN Stack)",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/about(3).png",
        spareImg: "/about(3).png",
    },
    {
        id: 6,
        title: "Do you have a project idea you'd like to bring to life?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Laban Shop | High-Performance E-commerce",
        des: "A scalable MERN storefront featuring advanced state management with Redux Toolkit. Optimized for seamless user flow, secure auth, and a responsive shopping experience.",
        img: "/project(1).png",
        iconLists: [FaReact, RiTailwindCssFill, FaNodeJs],
        link: "https://laban-shop-frontend.netlify.app/",
    },
    {
        id: 2,
        title: "Forever | Modern Retail Solution",
        des: "A sleek, full-stack retail platform leveraging React Context API for lightweight, efficient state handling. Focused on clean UI/UX and robust backend integration.",
        img: "/project(2).png",
        iconLists: [FaReact, RiTailwindCssFill, FaNodeJs],
        link: "https://legendary-kringle-216fad.netlify.app/",
    },
    {
        id: 3,
        title: "AI Sprint | Collaborative SaaS App",
        des: "A team-driven project management tool designed for real-time productivity. Built with the MERN stack to deliver dynamic updates and secure multi-user collaboration.",
        img: "/project(3).png",
        iconLists: [FaReact, RiTailwindCssFill, FaNodeJs],
        link: "https://github.com/AbdoAssall/ai-sprint",
    },
];

export const testimonials = [
    {
        quote:
            "Working with Moaz was a seamless experience. His ability to transform complex requirements into a polished, responsive user interface is impressive. He doesn't just write code; he ensures the final product truly aligns with the brand's vision.",
        name: "Sarah Chen",
        title: "Product Manager at TechFlow Solutions",
    },
    {
        quote:
            "Moaz is a highly skilled developer who brings both technical expertise and creative problem-solving to the table. He was instrumental in optimizing our site's performance and ensuring a smooth deployment. A true professional through and through.",
        name: "James Wilson",
        title: "Founder of CreativePulse Media",
    },
    {
        quote:
            "What stands out most about Moaz is his dedication to quality. He is proactive, meets deadlines consistently, and has an eye for detail that caught issues we hadn't even considered. He significantly elevated our platform's user experience.",
        name: "Elena Rodriguez",
        title: "CTO at Nexus Systems",
    },
    {
        quote:
            "Collaborating with Moaz was an absolute pleasure. His professionalism, promptness, and mastery of modern frontend frameworks were evident throughout our project. If you're looking for a developer who can deliver exceptional results, Moaz is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Moaz has a rare talent for balancing clean, maintainable code with high-end design. He handled our integration challenges with ease and communicated clearly at every stage of development. I highly recommend him for any ambitious project.",
        name: "David Smith",
        title: "Operations Manager at BrightScale",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: FaGithub,
        link: "https://github.com/MoazReyadAbdoalwahed",
    },
    {
        id: 2,
        img: MdEmail,
        link: "https:mailto:abdoalwahedmoaz@gmail.com",
    },
    {
        id: 3,
        img: FaLinkedin,
        link: "https://www.linkedin.com/in/moaz-abdo-alwahed/",
    },
    {
        id: 4,
        img: FaWhatsappSquare,
        link: "https://wa.me/201095592832",
    },
];