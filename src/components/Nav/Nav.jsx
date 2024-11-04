import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
// import PropTypes from 'prop-types';

const Nav = () => {
    return (
        <div className="flex items-center justify-between">
           <div><h3 className="text-4xl font-semibold">Recipe Calories</h3></div>
           <div className="flex items-center justify-between space-x-8">
            <p><a href="">Home</a></p>
            <p><a href="">Recipes</a></p>
            <p><a href="">About</a></p>
            <p><a href="">Search</a></p>
           </div>
           <div className="flex items-center justify-between gap-2">
           <div className="flex items-center space-x-2 bg-[#150B2B0D] rounded-full p-3">
           <CiSearch></CiSearch>
            <input className="bg-[#150B2B0D]" type="text" placeholder="search" />
           </div>
           <div className="p-3 bg-[#0BE58A] rounded-full">
            <CgProfile></CgProfile>
           </div>
           </div>
        </div>
    );
};

// Nav.propTypes = {
    
// };

export default Nav;