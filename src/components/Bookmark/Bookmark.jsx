import React from 'react';

const Bookmark = (props) => {
    return (
        <div className='bg-white rounded-lg p-4 my-3'>
            <h3 className='font-semibold'>{props.bookmark}</h3>
        </div>
    );
};

export default Bookmark;