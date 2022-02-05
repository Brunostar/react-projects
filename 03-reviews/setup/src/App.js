import React from 'react';
import Review from './Review';

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reveiws</h2>
          <div className='underline'></div>
        </div>
      </section>
      <Review />
    </main>
  );
}

export default App;
