import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import './App.css'

const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  //searching for recipes
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }

  return (
    <div className="container">
    <h2>Tiana's Recipes</h2>
    <h2>Welcome to Tiana's Recipes</h2>
        <p>
          Tiana's Recepies is your go-to app for creating easy and healthy meal plans that align with your workout routines.
          Whether you are just starting your fitness journey or an experienced fitness enthusiast, our app has got you
          covered with a variety of delicious meals to help you achieve your fitness goals.
        </p>
        <h3>Features:</h3>
        <ul>
          <li>Access to a wide range of healthy meal options for breakfast, lunch, and dinner.</li>
          <li>Easy-to-follow recipes with step-by-step instructions.</li>
          <li>Option to filter meals based on dietary preferences and allergies.</li>
          <li>Meal plans tailored to complement your workout routines and fitness goals.</li>
          <li>User-friendly interface for a seamless experience.</li>
        </ul>
        <p>
          Start your journey to a healthier lifestyle today with Tiana's Recipes. Choose your meals, stay on track with your
          workouts, and witness a positive change in your overall well-being.
        </p>
        <p>Contact us for any inquiries or feedback at: info@easiermeals.com</p>
    <SearchBar
      isLoading={isLoading}
      query={query}
      setQuery={setQuery}
      handleSubmit={handleSubmit}
    />
    <div className="recipes">
      
      {recipes ? recipes.map(recipe => (
        <RecipeCard
           key={recipe.idMeal}
           recipe={recipe}
        />
      )) : "No Results."}
    </div>
  </div>
);
}

export default App
