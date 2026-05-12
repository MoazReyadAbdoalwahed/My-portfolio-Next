import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
    return (
        <section id="about" className="bg-[#000319] py-2 sm:px-1 md:px-20 lg:px-40">
            <h1 className='text-center text-4xl text-[#00f2ff] font-bold uppercase'>
                About me
            </h1>
            <BentoGrid className="w-full py-20">
                {gridItems.map((item) => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                        img={item.img}
                        imgClassName={item.imgClassName}
                        titleClassName={item.titleClassName}
                        spareImg={item.spareImg}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid