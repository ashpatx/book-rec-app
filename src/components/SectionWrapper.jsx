import React from 'react'

export default function SectionWrapper(props) {
    const {children, header, title} = props
  return (
    <section className='min-h-screen flex flex-col justify-center items-center'>
        <div className='py-10 flex flex-col gap-4 justify-center items-center'>
            <p>{header}</p>
            <h2>{title[0]} <span>{title[1]}</span> <span>{title[2]}</span> <span>{title[3]}</span></h2>
        </div>
        <div className='max-w-lg w-full flex flex-col justify-center items-center gap-4'> 

        {children}
        </div>
    </section>
  )
}
