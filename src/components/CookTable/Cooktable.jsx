import React from 'react';
import PropTypes from 'prop-types';

const Cooktable = ({cook,id}) => {
    const {recipe_name , preparing_time , calories} = cook;
 
    return (
        <div className='flex items-center justify-around bg-[#28282808] p-3'>
           <p>{id+1}</p>
            <div className='w-1/3'>{recipe_name}</div>
            <div className='w-1/3'>{preparing_time} <br /> minutes</div>
            <div className='w-1/3'>{calories} <br /> calories</div>
        </div>
    );
};

Cooktable.propTypes = {
    
};

export default Cooktable;