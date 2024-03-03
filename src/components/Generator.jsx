import React from 'react'
import SectionWrapper from './SectionWrapper'
import { BOOKS } from '../utils/books'
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
  return (
    <SectionWrapper header={"find your next read"} title={['Go', 'Back', 'In', 'Time' ]} >
      <Header index={'1.'} title={'Category'} description={'Fiction or Non-Fiction?'} />
      
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>

      {/*buttons to select*/}
      {Object.keys(BOOKS).map((type, typeIndex) => (
                <BookCategoryButton key={typeIndex} buttonText={type} />
            ))}
      </div>

    </SectionWrapper>
  )
}
