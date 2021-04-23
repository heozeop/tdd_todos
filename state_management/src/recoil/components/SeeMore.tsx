import React, { useState } from 'react';

const SeeMore = () => {
  const [clicked, setCliced] = useState(false);
  const content =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nulla commodi cumque asperiores! Dignissimos possimus aut magni facere explicabo exercitationem perferendis. Iste officiis non numquam, accusantium consequuntur ab doloremque atque!';
  const summary = content.substr(0, 30);
  return (
    <div style={{ width: '100px' }}>
      {clicked ? (
        <>
          {content}
          <span style={{ color: '#421010' }} onClick={() => setCliced(false)}>
            {`  접기`}
          </span>
        </>
      ) : (
        <>
          {summary}
          <span style={{ color: '#421010' }} onClick={() => setCliced(true)}>
            ...더보기
          </span>
        </>
      )}
    </div>
  );
};

export default SeeMore;
