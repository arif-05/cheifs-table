import Nav from "./components/Nav/Nav";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Recipe from "./components/Recipe/Recipe";
import { useEffect, useState } from "react";
import Table from "./components/Table/Table";
import Cooktable from "./components/CookTable/Cooktable";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [cookCart, setCookCart] = useState([])
  const [cookTime, setCookTime] = useState(0)
  const [calories,setCalories] = useState(0);
  const [cookCount, setCookCount] = useState(0);
  

  // "./../public/fakeData.json"
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);


  const handleCart = (recipe) => {
    const isExist = cart.find((item) => item.recipe_id === recipe.recipe_id);

    if (!isExist) {
      setCart([...cart, recipe]);
      setCount(count + 1);
    } else {
      alert("Item already exist");
    }
  };

  const handleCook = (item) =>{
    setCookCart([...cookCart,item])
    setCookTime(cookTime + item.preparing_time)
    setCalories(calories + item.calories)
    setCookCount(cookCount + 1);
  }
  // console.log(cookCart);



  return (
    <div className="container mx-auto mt-6">
      <Nav></Nav>
      <Banner></Banner>

      <section>
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <h4 className="font-semibold text-5xl">Our Recipes</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. <br /> Eget urna volutpat
            curabitur elementum mauris aenean neque.{" "}
          </p>

          <div className="flex w-full gap-6">
            <div className="w-2/3 grid grid-cols-2 gap-4">
              {recipes.map((recipe, idx) => (
                <Recipe
                  handleCart={handleCart}
                  key={idx}
                  recipe={recipe}
                ></Recipe>
              ))}
            </div>
            <div className="w-1/3">
              <h4 className="font-semibold text-2xl p-4 border-b-2">
                Want to cook: 0{count}{" "}
              </h4>

              <div>
                <div className="flex items-start justify-around my-4">
                  <p>Name</p>
                  <p>Time</p>
                  <p>Calories</p>
                  <p className="w-1\4"></p>
                </div>
                {
                cart.map((item, idx) => (
                  <Table id={idx}
                   item={item}
                    key={idx}
                    handleCook = {handleCook}></Table>
                ))}
              </div>

              <h4 className="font-semibold text-2xl p-4 border-b-2 mt-10">
                Currently cooking: {cookCount}
              </h4>
              <div>
                <div className="flex items-start justify-around my-4">
                  <p>Name</p>
                  <p>Time</p>
                  <p>Calories</p>

                 
                </div>
                {
                  cookCart.map((cook,idx)=>(
                    <Cooktable
                     id = {idx}
                     key={idx}
                     cook = {cook}
                     ></Cooktable>
                  ))

                }
                <div className="flex items-end justify-end w-2/3 space-x-6 ml-28 p-3">
                  <p>Total times= <br />{cookTime} minutes</p>
                  <p>Total Calories= <br />{calories} calories</p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
