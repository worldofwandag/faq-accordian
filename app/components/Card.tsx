import Image from 'next/image';
import starIcon from '../assets/images/icon-star.svg'
import React from 'react';



const Card = () => {
    return (
        <div className='mx-auto bg-white h-[560px] rounded-[5%] w-full p-[40px]'>
            <header className='flex flex-row items-center gap-4 w-full'>
                <Image src={starIcon} alt="Star icon" width={40} height={40} />
                <h1 className='faq__title'>FAQ</h1>
            </header>
        </div>
    );
}

export default Card;
