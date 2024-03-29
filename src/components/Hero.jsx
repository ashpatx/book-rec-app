import React, {useState} from 'react'
import BookCategoryButton from './BookButton'
import GoButton from './GoButton';

export default function Hero({scrollToGenerator}) {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        scrollToGenerator(); // Call the scrollToGenerator function when the button is clicked
    };

    return (
        <div className='min-h-screen flex flex-col justify-center text-slate-900'>
            <div className='flex flex-col mb-4'>
            <p className='sm:text-2xl md:text-3xl lg:text-4xl'>It's time to read</p>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>a <span>Classic</span></h1>
            </div>
            <p className='sm:text-xl md:text-2xl lg:text-3xl mb-4'>When was the last time you delved into a tale penned a <span>century ago</span>? Venture into unfamiliar territory and <span>unearth genres</span> yet to be explored. Trust me, nothing will keep you flipping pages quite like a <span>timeless classic</span>.</p>
            <GoButton
                buttonText="Get Started"
                onClick={() => {}}
                isSelected={false}
                scrollTo={true}
                scrollToFunc={scrollToGenerator}
            />
        </div> 
    )
}