import React from 'react';

function BookCategoryButton({ buttonText }) {
    return (
        <button
            className="w-32 max-w-sm cursor-pointer rounded-md border border-neutral-700 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400"
            onMouseMove={(e) => {
                const x = e.clientX - e.target.getBoundingClientRect().left;
                const y = e.clientY - e.target.getBoundingClientRect().top;
                e.target.style.setProperty("--mouse-x", `${x}px`);
                e.target.style.setProperty("--mouse-y", `${y}px`);
            }}
        >
            {buttonText}
        </button>
    );
}

export default BookCategoryButton;