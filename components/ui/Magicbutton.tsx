import React from 'react'
interface MagicbuttonProps {
    title: string;
    icon?: React.ReactNode;
    handleClick?: () => void;
}
const Magicbutton = ({ title, icon, handleClick }: MagicbuttonProps) => {
    return (
        <div>
            <button onClick={handleClick} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50\">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00f2ff_0%,#393BB2_50%,#00f2ff_100%)]" />                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    {title}
                    {icon && <span className="ml-2">{icon}</span>}

                </span>
            </button>
        </div>
    )
}

export default Magicbutton
