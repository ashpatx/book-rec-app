import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { BOOKS, LENGTH } from '../utils/books'
import BookCategoryButton from './BookButton'

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


export default function Generator() {

  const [showModal, setShowModal] = useState(false)
  const [genre, setGenre] = useState('adventure')

  function toggleModal() {
    setShowModal(!showModal)
  }

  return (
    <SectionWrapper header={"find your next read"} title={['Go', 'Back', 'In', 'Time' ]} >

      {/*SECTION 1*/}
      <Header index={'1.'} title={'Category'} description={'Fiction or Non-Fiction?'} />
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
      {/*SECTION 1:BUTTON OPTIONS*/}
      {Object.keys(BOOKS).map((category) => (
        //Render buttons for each genre within the category
        Object.keys(BOOKS[category]).map((genre, genreIndex) => (
        <BookCategoryButton key={genreIndex} buttonText={genre} />
    ))
            ))}
      </div>

    {/*SECTION 2*/}
      <Header index={'2.'} title={'Genre'} description={'What do you like to read?'} />
      {/*SECTION 2:BUTTON OPTIONS*/} 
      <div className=''> 
      <BookCategoryButton onClick={toggleModal} className='relative flex flex-col items-center'>
        <p>Select Genre</p>  
        <i className="ri-arrow-drop-down-line absolute -right-4  top-1/2 -translate-y-1/2"></i>
        </BookCategoryButton>   
        {showModal && (
          <div>MODAL</div>
        )} 
      </div>

      {/*SECTION 3*/}
      <Header index={'3.'} title={'Length'} description={'How much time do you have?'} />
            <div className='grid grid-cols-3 gap-4'>
                {/* Render buttons for each length */}
                {Object.keys(LENGTH).map((lengthType) => (
        // Render buttons for each length type (short or long)
        <BookCategoryButton key={lengthType} buttonText={lengthType} />
    ))}
            </div>
    </SectionWrapper>
  )
}
