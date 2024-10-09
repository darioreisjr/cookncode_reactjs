import { fakeRecipes } from "../services/fakeData";
import { FaHeart, FaSearch } from "react-icons/fa";

const RecipeList = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Recipes</h1>
        <div className="relative">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Search recipes..."
          />
          <FaSearch className="absolute right-2 top-3 text-gray-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {fakeRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              className="w-full h-32 object-cover rounded"
            />
            <h2 className="mt-4 text-xl font-bold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.description}</p>
            <button className="mt-4 flex items-center text-red-500">
              <FaHeart className="mr-2" /> Favorite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
