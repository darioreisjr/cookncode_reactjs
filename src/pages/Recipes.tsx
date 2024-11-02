import { Search, ChefHat, Clock, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Recipe } from "../types";
import { useCart } from "../contexts/CartContext";

const RECIPES: Recipe[] = [
  {
    id: "1",
    title: "Python Pancakes",
    description: "Stack your breakfast like you stack your code",
    prepTime: 25,
    difficulty: "easy",
    ingredients: ["2 cups flour", "2 eggs", "1 cup milk", "1 tsp vanilla"],
    instructions: [
      "Mix dry ingredients",
      "Add wet ingredients",
      "Cook on griddle",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
    category: "Breakfast",
    author: "Sarah Code",
    createdAt: "2024-03-10",
    price: 12.99,
  },
  {
    id: "2",
    title: "React Risotto",
    description: "A state management approach to creamy risotto",
    prepTime: 45,
    difficulty: "medium",
    ingredients: ["Arborio rice", "Chicken stock", "White wine", "Parmesan"],
    instructions: ["Toast rice", "Add stock gradually", "Stir until creamy"],
    imageUrl:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
    category: "Main Course",
    author: "Mike Dev",
    createdAt: "2024-03-09",
    price: 24.99,
  },
  {
    id: "3",
    title: "JavaScript Juice",
    description: "Blend your favorite fruits with async/await",
    prepTime: 15,
    difficulty: "easy",
    ingredients: ["Orange", "Banana", "Mango", "Yogurt"],
    instructions: ["Peel fruits", "Blend until smooth", "Serve chilled"],
    imageUrl:
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=800&q=80",
    category: "Beverages",
    author: "Lisa Tech",
    createdAt: "2024-03-08",
    price: 8.99,
  },
];

const CATEGORIES = ["All", "Breakfast", "Main Course", "Desserts", "Beverages"];
const DIFFICULTIES = ["all", "easy", "medium", "hard"];

export default function Recipes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const { dispatch } = useCart();

  const filteredRecipes = RECIPES.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || recipe.category === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === "all" || recipe.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explorar receitas
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Descubra receitas inspiradas em tecnologia da nossa comunidade
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-[#e67e22] focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-[#e67e22] focus:border-transparent"
              >
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-[#e67e22] focus:border-transparent"
              >
                {DIFFICULTIES.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-[#e67e22]">
                  {recipe.difficulty}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {recipe.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {recipe.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>{recipe.prepTime} mins</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <ChefHat className="h-4 w-4" />
                    <span>{recipe.author}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-[#e67e22]">
                    R${recipe.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() =>
                      dispatch({ type: "ADD_ITEM", payload: recipe })
                    }
                    className="flex items-center space-x-2 bg-[#3498db] text-white px-4 py-2 rounded-lg hover:bg-[#2980b9] transition-colors"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>adicionar ao carrinho</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
