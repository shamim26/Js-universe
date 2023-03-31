import React from 'react';

const Blog = () => {
    return (
        <div className='border rounded-lg p-5 my-2'>
            <h3 className='text-2xl font-bold '>1. Props vs state</h3>
            <p className='ml-6'>
                <b>Props</b> are the short form of properties. Props are used to communicate with one component to another. Actually it passes data to parent component to child component. Props are read-only, means immutable, can't modify its data. <br />
                <b>State</b> is the heart of react components. It maintain the behavior of a component how the data will render. State changes asynchronously. State can only be modify inside the components. It's mainly used for the holding or rendering dynamic data. 
            </p>
            <h3 className='text-2xl font-bold '>2. How does useState work?</h3>
            <p className='ml-6'>
                useState is a react hook that allows to add state to functional component. It returns an array of two values. The initial state and a function to update it. Whenever the setter function is called the initial state value is updated. This is how useState hook work. 
            </p>
            <h3 className='text-2xl font-bold '>3. Purpose of useEffect other than fetching data</h3>
            <p className='ml-6'>
                useEffect is a react hook that mostly used for fetching data from APIs. But its not limited to fetching data it can also perform side effects in components. It can modify DOM, use for time and animation control, event listener and many more. 
            </p>
            <h3 className='text-2xl font-bold '>4. How Does React work?</h3>
            <p className='ml-6'>
              React works by allows to create reuseable components. React create a virtual DOM to update the real DOM efficiently. And react use props and event to communicate with components.
            </p>
        </div>
    );
};

export default Blog;