import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { BOOKS, LENGTH } from '../utils/books'
import BookCategoryButton from './BookButton'
import GoButton from './GoButton'

function Header(props) {
    const { index, title, description } = props
    return (
    <div className='flex flex-col gap-2 justify-center items-center'>
      <div> 
        <h4 className='sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>{index}{title}</h4>
      </div>
      <p className='sm:text-lg md:text-xl lg:text-2xl mx-auto'>{description}</p>
    </div>
  )
}


export default function Generator(props) {
  const { selectedCategory, setSelectedCategory, selectedGenre, setSelectedGenre, length, setLength, updateRecommendation } = props

  const [showModal, setShowModal] = useState(false)

  function toggleModal() {
    setShowModal(!showModal)
  }

  //Section 1: Prevent selecting a new category if genres have already been selected
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Update selected category
};

  
  //Section 2: Function to update the selected genre
  function updateGenre(genre) {
  // Check if the selected genre already exists in the array
  if (selectedGenre.includes(genre)) {
    // If so, remove it from the array
    setSelectedGenre(selectedGenre.filter(item => item !== genre));
  } else {
    // Otherwise, add it to the array if the length is less than 2
    if (selectedGenre.length < 2) {
      setSelectedGenre(prevGenres => [...prevGenres, genre]);
    }
  }
  // Close the modal if two genres are selected
  if (selectedGenre.length === 2) {
    setShowModal(false);
  }
}


  //Section 3: Function to handle length selection
const handleLengthClick = (selectedLength) => {
  setLength(selectedLength); // Update selected length
};

// Generate Button
const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    };



  return (
    <SectionWrapper header={"Find your next read"} title={['Travel', 'back', 'in', 'time' ]} >

      {/*SECTION 1*/}
      <Header index={'1.'} title={'Category'} description={'Fiction or Non-Fiction?'} />
      <div className='flex flex-wrap justify-center gap-2'>
    {/* Render buttons for categories */}
    {Object.keys(BOOKS).map((category) => (
        <BookCategoryButton 
            key={category} 
            buttonText={category}
            isSelected={selectedCategory === category} 
            onClick={() => {
                handleCategoryClick(category);
                setSelectedGenre([]);
                setSelectedCategory(category); 
                setIsSelected(true);
            }}
        />
    ))}
</div>

    {/*SECTION 2*/}
      <Header index={'2.'} title={'Genre'} description={'What do you like to read?'} />
      {/*SECTION 2:BUTTON OPTIONS*/} 
      <div className='rounded-md border border-neutral-700 px-8 py-4'>
                <button 
                onClick={toggleModal} className='relative flex flex-col items-center'>
                    <p className='capitalize'>{selectedGenre.length === 0 ? 'Select Genre' : selectedGenre.join(" ")}</p>  
                    <i className="ri-arrow-drop-down-line absolute -right-4 top-1/2 -translate-y-1/2"></i>
                </button>
                {/* Modal content */}
                {showModal && (
                    <div className='flex flex-col p-4'>
                        {/* Render genre buttons for all categories Fiction and Non Fiction*/}
                        {Object.keys(BOOKS).map((category) => (
                            Object.keys(BOOKS[category]).map((genre, index) => (
                              <button
                    key={index}
                    className={`py-2 cursor-pointer hover:rounded-md hover:border hover:p-2 hover:bg-slate-400/40 ${selectedGenre.includes(genre) ? 'border-2 rounded-md border-black' : ''}`}
                    onClick={() => {
                        updateGenre(genre);
                    }}
                    >
                    {genre}
                    </button>
                ))
            ))}
        </div>
    )}
</div>

      {/*SECTION 3*/}
      <Header index={'3.'} title={'Length'} description={'How much time do you have?'} />
            <div className='flex flex-wrap justify-center gap-2'>
                {/* Render buttons for each length */}
                {Object.keys(LENGTH).map((lengthType) => (
                // Render buttons for each length type (short or long)
                <BookCategoryButton 
                    key={lengthType} 
                    buttonText={lengthType}
                    isSelected={length === lengthType}  
                    onClick={() => {
                        handleLengthClick(lengthType); // Call the handler function with the selected length
                        setLength(lengthType); // Update the length state
                        setIsSelected(true);

        }}
    />
))}
            </div>

            <GoButton  
            func={updateRecommendation}
            buttonText={'Generate'} 
            isSelected={isSelected}
            onClick={handleClick}
            />
            
    </SectionWrapper>
  )
}
