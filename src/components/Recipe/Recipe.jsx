import { FaRegClock } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { FaFire } from "react-icons/fa";


const Recipe = ({recipe , handleCart}) => {
    const {recipe_image, recipe_name,short_description, ingredients,preparing_time, calories} = recipe;

//    console.log(handleCart);

 

    return (
        <div>
           <div className='flex flex-col items-start text-start space-y-3 border-2 rounded-2xl p-6'>
           <img className="rounded-xl" src={recipe_image} alt="img of {recipe_name}" />
           <h4 className="text-xl font-semibold">{recipe_name}</h4>
           <p>{short_description}</p>


           <p className="border-t-2 border-b-2 p-3">{ingredients}</p>
            

           

            <div className='flex items-center gap-2'>
                <FaRegClock></FaRegClock>
                <p className="mr-3">{preparing_time} minutes</p>
                <FaFire></FaFire>
                <p>{calories} calories</p>

            </div>

            <button onClick={() => handleCart(recipe)} className="p-3 rounded-full bg-[#0BE58A]">Want to Cook</button>




           </div>
            
        
           
        </div>
    );
};

Recipe.propTypes = {
    recipe : PropTypes.object.isRequired
};

export default Recipe;