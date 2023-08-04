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
        <h2>Tiana's Palace</h2>
        <h2>Welcome to Tiana's Recipes</h2>
        <p>
          Tiana's Recipes is your go-to app for creating easy and healthy meal plans that align with your workout routines.
          Whether you are just starting your fitness journey or an experienced fitness enthusiast, our app has got you
          covered with a variety of delicious meals to help you achieve your fitness goals.
        </p>
        <h3>Features:</h3>
        <ul>
          <li>Access to a wide range of meal options for breakfast, lunch, and dinner.</li>
          <li>Easy-to-follow recipes with step-by-step instructions.</li>
          <li>Option to filter meals based on dietary preferences.</li>
          <li>Meal plans tailored to complement your workout routines and fitness goals.</li>
          <li>User-friendly interface for a seamless experience.</li>
        </ul>
        <p>
          Start your journey to a healthier lifestyle today with Tiana's Recipes. Choose your meals, stay on track with your
          workouts, and witness a positive change in your overall well-being.
        </p>
        <p>Contact us for any inquiries or feedback at: info@tianaspalace.com</p>
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


// import { useState, useEffect } from 'react';
// import SearchBar from './components/SearchBar';
// import RecipeCard from './components/RecipeCard';
// import {
//   ChakraProvider,
//   Box,
//   Flex,
//   Heading,
//   Text,
//   UnorderedList,
//   ListItem,
// } from '@chakra-ui/react';
// import './index.css'

// const searchApi = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

// function App() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [query, setQuery] = useState('');
//   const [recipes, setRecipes] = useState([]);

//   // Searching for recipes
//   const searchRecipes = async () => {
//     setIsLoading(true);
//     const url = searchApi + query;
//     const res = await fetch(url);
//     const data = await res.json();
//     setRecipes(data.meals);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     searchRecipes();
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     searchRecipes();
//   };

//   return (
//     <ChakraProvider>
//       <Box fontFamily="Arial, Helvetica, sans-serif" className="container">
//         <Heading as="h2" size="xl">
//           Tiana's Palace
//         </Heading>
//         <Heading as="h2" size="xl">
//           Welcome to Tiana's Recipes
//         </Heading>
//         <Text>
//           Tiana's Recipes is your go-to app for creating easy and healthy meal plans that align with
//           your workout routines. Whether you are just starting your fitness journey or an experienced
//           fitness enthusiast, our app has got you covered with a variety of delicious meals to help
//           you achieve your fitness goals.
//         </Text>
//         <Heading as="h3" size="lg">
//           Features:
//         </Heading>
//         <UnorderedList>
//           <ListItem>Access to a wide range of meal options for breakfast, lunch, and dinner.</ListItem>
//           <ListItem>Easy-to-follow recipes with step-by-step instructions.</ListItem>
//           <ListItem>Option to filter meals based on dietary preferences.</ListItem>
//           <ListItem>Meal plans tailored to complement your workout routines and fitness goals.</ListItem>
//           <ListItem>User-friendly interface for a seamless experience.</ListItem>
//         </UnorderedList>
//         <Text>
//           Start your journey to a healthier lifestyle today with Tiana's Recipes. Choose your meals,
//           stay on track with your workouts, and witness a positive change in your overall well-being.
//         </Text>
//         <Text>Contact us for any inquiries or feedback at: info@tianaspalace.com</Text>
//         <SearchBar isLoading={isLoading} query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
//         <Flex display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" marginTop="20px">
//           {recipes ? (
//             recipes.map((recipe) => (
//               <RecipeCard key={recipe.idMeal} recipe={recipe} />
//             ))
//           ) : (
//             <Text>No Results.</Text>
//           )}
//         </Flex>
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default App;