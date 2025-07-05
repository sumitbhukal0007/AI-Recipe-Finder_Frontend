const RecipeHistory = () => {
  
  if(localStorage.getItem('token')){
    return
  }
  return (
    <div className=" flex flex-col">

      <h2 className="font-bold ">Recipe History</h2>
      <ul className="space-y-2">
        <li className=" rounded cursor-pointer">
          🥗 Vegan Salad Idea
        </li>
        <li className=" roundedcursor-pointer">
          🍝 Pasta Dinner
        </li>
      </ul>
    </div>
  );
};

export default RecipeHistory;
