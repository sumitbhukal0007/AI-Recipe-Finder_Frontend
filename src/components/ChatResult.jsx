// import { useState, useEffect } from 'react';

const ChatResult = ({ result }) => {

  if (!result || result.length === 0) return console.log('Data Not rendered', result);

  return (
    <div className="space-y-3 p-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {result.map((recipe, index) => (

          <div key={index} className="bg-white rounded-2xl shadow-md hover:scale-[1.02] transition-transform duration-200 overflow-hidden border border-zinc-200">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-zinc-800">{recipe.title} </h3>
              <div>
                <h4 className="text-sm font-medium text-zinc-500">Ingredients: </h4>
                <ul className="list-disc list-inside text-sm text-zinc-700">
                  {
                    recipe.ingredients.map((res, index) => (
                      <li key={index} className="">{res}</li>
                    ))
                  }
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-zinc-500">Instructions:</h4>
                <p className="text-sm text-zinc-700 whitespace-pre-line  ">
                  {recipe.instructions}
                </p>
              </div>
            </div>
          </div>

        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="border rounded-2xl shadow bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 mt-2" >
          Load More
        </button>
      </div>
    </div>
  );
};

export default ChatResult;
