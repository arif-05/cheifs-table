import React from 'react';
import PropTypes from 'prop-types';

const Table = ({item,id,handleCook}) => {
    

    const {recipe_name , preparing_time , calories} = item;
    

    return (
        <div className='flex items-center justify-around bg-[#28282808] p-3'>
            <p>{id+1}</p>
            <div className='w-1/4'>{recipe_name}</div>
            <div className='w-1/4'>{preparing_time} <br /> minutes</div>
            <div className='w-1/4'>{calories} <br /> calories</div>
            <button onClick={() => handleCook(item)}
             className='bg-[#0BE58A] p-2 rounded-full'>Preparing</button>
        </div>
    );
};

Table.propTypes = {
    
};

export default Table;