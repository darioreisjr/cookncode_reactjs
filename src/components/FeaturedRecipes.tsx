import { Clock, ChefHat } from "lucide-react";

const FEATURED_RECIPES = [
  {
    id: "1",
    title: "Python Pancakes",
    description: "Stack your breakfast like you stack your code",
    prepTime: 25,
    difficulty: "easy",
    imageUrl:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
    author: "Sarah Code",
  },
  {
    id: "2",
    title: "React Risotto",
    description: "A state management approach to creamy risotto",
    prepTime: 45,
    difficulty: "medium",
    imageUrl:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
    author: "Mike Dev",
  },
  {
    id: "3",
    title: "JavaScript Juice",
    description: "Blend your favorite fruits with async/await",
    prepTime: 15,
    difficulty: "easy",
    imageUrl:
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=800&q=80",
    author: "Lisa Tech",
  },
];

export default function FeaturedRecipes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Recipes</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our most popular tech-inspired dishes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_RECIPES.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#e67e22]">
                  {recipe.difficulty}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {recipe.title}
                </h3>
                <p className="mt-2 text-gray-600">{recipe.description}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{recipe.prepTime} mins</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <ChefHat className="h-4 w-4" />
                    <span>{recipe.author}</span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-[#3498db] text-white py-2 rounded-lg hover:bg-[#2980b9] transition-colors">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
