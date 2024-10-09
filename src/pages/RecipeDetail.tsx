import { useParams } from "react-router-dom";
import { fakeRecipes } from "../services/fakeData";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = fakeRecipes.find((r) => r.id === parseInt(id!));

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded"
      />
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Ingredients</h2>
        <ul className="list-disc list-inside mt-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Instructions</h2>
        <p className="mt-2">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
