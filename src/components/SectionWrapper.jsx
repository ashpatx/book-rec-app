import React from 'react'

export default function SectionWrapper(props) {
    const {children, header, title} = props
  return (
    <section className='min-h-screen flex flex-col justify-center items-center gap-6'>
        <div className='text-xl flex flex-col justify-center items-center mb-4'>
            <p>{header}</p>
            <h2><span>{title[0]}</span> <span>{title[1]}</span> <span>{title[2]}</span> <span>{title[3]}</span></h2>
        </div>
        <div className='w-full flex flex-col items-center gap-6'> 

        {children}
        </div>
    </section>
  )
}
