import React from 'react';

function GoButton({ buttonText, onClick, isSelected, scrollTo, scrollToFunc }) {
    const handleClick = () => {
        onClick(buttonText); //Pass the buttonText to the parent onClick handler
        scrollToFunc(); //Call the specific scrollTo function passed as props
    };

    return (
        <button
            className={`go-button shadow-xl text-md mt-4 max-w-md w-2/3 sm:w-32 cursor-pointer rounded-md p-4 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400 ${isSelected ? 'border-2' : 'bg-transparent'}`}
            onClick={handleClick}
        >
            <p className="capitalize">{buttonText}</p>
        </button>
    );
}

export default GoButton;
