import React from 'react';

function GoButton({ buttonText, onClick, isSelected, func }) {
    const handleClick = () => {
        onClick(buttonText); //Pass the buttonText to the parent onClick handler
    };

    return (
        <button
            className={`mt-4 max-w-md w-2/3 sm:w-32 cursor-pointer rounded-md border border-neutral-700 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400 ${isSelected ? 'border-2' : 'bg-transparent'}`}
            onClick={handleClick, func}
        >
            <p className="capitalize">{buttonText}</p>
        </button>
    );
}

export default GoButton;