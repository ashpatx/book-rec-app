import React from 'react';
import SectionWrapper from './SectionWrapper';
import BookCard from './BookCard'; 

export default function Recommendation(props) {
  const { recommendation } = props;

  return (
    <SectionWrapper id={'recommendation'} header={"Book Recommendations"} title={['Explore', 'New', 'Reads']}>
      <div className='flex flex-col gap-4'>
        {recommendation.map((book, i) => (
          <BookCard key={i} book={book} />
        ))}
      </div>
    </SectionWrapper>
  );
}
