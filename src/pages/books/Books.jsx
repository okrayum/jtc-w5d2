import React from 'react';
import GoogleBooks from '../../components/googleBooks/GoogleBooks'

function Books() {
  return (
    <div className='books'>
        <h2>My Top Book Recommendations</h2>
        <GoogleBooks />
    </div>
  )
}

export default Books