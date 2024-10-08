import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./pages/RecipeList";
import RecipeForm from "./pages/RecipeForm";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add-recipe" element={<RecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
