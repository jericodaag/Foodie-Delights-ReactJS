import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import dessertImg from '../image/dessert.png';
import sandwichImg from '../image/sandwich.jpg';
import sushiImg from '../image/sushi.png';
import karekareImg from '../image/karekare.png';
import veggiesImg from '../image/veggies.png';
import tastyImg from '../image/tasty.jpg';
import tunaImg from '../image/tuna.jpg';
import seafoodImg from '../image/seafood.jpg';
import burgerImg from '../image/burger.jpg';
import asianImg from '../image/asian.jpg';
import roastBeefImg from '../image/roastbeef.jpg';
import lambSteakImg from '../image/lambsteak.jpg';
import salmonImg from '../image/salmon.jpg';
import { Carousel} from 'react-bootstrap';

const HomePage = () => {
  // State to manage displayed recipes
  const [displayedRecipe, setDisplayedRecipe] = useState(null);

  // Recipes data
  const recipes = {
    roastBeef: {
      title: 'Roast Beef',
      ingredients: [
        '3 lbs beef roast',
        '1/4 cup olive oil',
        '2 cloves garlic, minced',
        '1 tablespoon rosemary, chopped',
        '1 tablespoon thyme, chopped',
        'Salt and pepper to taste'
      ],
      instructions: [
        'Preheat the oven to 375°F (190°C).',
        'In a small bowl, mix together olive oil, minced garlic, rosemary, thyme, salt, and pepper.',
        'Rub the mixture over the beef roast, ensuring it\'s well-coated.',
        'Place the roast in a roasting pan and roast in the oven for about 1 hour or until the internal temperature reaches your desired level of doneness.',
        'Remove from the oven, let it rest for 10 minutes, then slice and serve.'
      ],
    },
    lambSteak: {
      title: 'Lamb Steak',
      ingredients: [
        '4 lamb steaks',
        '2 tablespoons olive oil',
        '2 cloves garlic, minced',
        '1 teaspoon dried rosemary',
        'Salt and black pepper to taste'
      ],
      instructions: [
        'Preheat a grill or grill pan over medium-high heat.',
        'In a small bowl, mix together olive oil, minced garlic, dried rosemary, salt, and black pepper.',
        'Rub the mixture over each lamb steak, ensuring they are evenly coated.',
        'Grill the lamb steaks for about 4-5 minutes per side, or until they reach your desired level of doneness.',
        'Let the lamb steaks rest for a few minutes before serving.'
      ],
    },
    salmon: {
      title: 'Salmon Steak',
      ingredients: [
        '4 salmon fillets',
        '2 tablespoons olive oil',
        '1 tablespoon lemon juice',
        '1 teaspoon dried dill',
        'Salt and black pepper to taste'
      ],
      instructions: [
        'Preheat the oven to 400°F (200°C).',
        'Place the salmon fillets on a baking sheet lined with parchment paper.',
        'In a small bowl, mix together olive oil, lemon juice, dried dill, salt, and black pepper.',
        'Brush the mixture over the salmon fillets, ensuring they are well-coated.',
        'Bake in the preheated oven for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork.'
      ],
    },
    // ... (other recipes)
  };

  // Function to handle recipe display
  const handleDisplayRecipe = (recipeKey) => {
    setDisplayedRecipe(recipes[recipeKey]);
  };
  

  return (
    <div>
      {/* Main Content */}
      <main>
      <section className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <h2>Welcome to our Food Blog!</h2>
            <p style={{ fontSize: '16px' }}>
            Welcome to our food blog! Here, we share our love for food with you. From delicious recipes to cooking techniques, we have something for everyone. Whether you're a seasoned chef or a food enthusiast, you'll find something to inspire you in our blog posts.
            </p>  
            <br/>

            <h2>About Our Website</h2>
            <p style={{ fontSize: '16px' }}>
              We are food enthusiasts that give guides to our visitors to review some of the best foods around the world. Our blog features a variety of content, from detailed recipes and cooking tips to food travel guides and product reviews. We strive to create a community where food lovers can come together to discover new flavors, share their experiences, and celebrate the joy of food.
            </p>
 
            <Link to="/myblog" className="join-now-btn" style={{ color: 'white' }}>
              Join Now
            </Link>
          </div>
 
          <div className="col-lg-6 right-align">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={tastyImg}
                  alt="Tasty"
                />
                <Carousel.Caption className="carousel-caption">
                  <h3>Explore</h3>
                  <p>Embark on a culinary journey as we showcase the essence of delightful flavors and culinary creativity in every dish.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
                className="d-block w-100"
                src={tunaImg}
                alt="Tuna"
              />
              <Carousel.Caption className="carousel-caption">
                <h3>Art of Flavors</h3>
                <p>Immerse yourself in the art of flavor, where each recipe is a lesson in the rich tapestry of global gastronomy.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={seafoodImg}
                alt="Seafood"
              />
              <Carousel.Caption className="carousel-caption">
                <h3>Savor Stories</h3>
                <p>Indulge in dishes that tell captivating stories, transforming every meal into a narrative of taste and tradition.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={burgerImg}
                alt="Burger"
              />
              <Carousel.Caption className="carousel-caption">
                <h3>Discover Ratings</h3>
                <p>Explore a world of culinary excellence and discover delicious ratings that guide you to extraordinary dining experiences.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={asianImg}
                alt="Asian Food"
              />
              <Carousel.Caption className="carousel-caption">
                <h3>Culinary Journeys</h3>
                <p>Embark on culinary journeys across the world, where every dish is a passport to diverse flavors and global gastronomic adventures.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>

        </div>
      </section>

      <section className="container py-5 rounded-section" style={{ backgroundColor: '#8DC63F', color: 'white' }}>
        <h2 className="mb-4 outlined-text">Our Services</h2>
        <div className="row">
          <div className="col-lg-4">
            <img src={dessertImg} alt="Dessert" className="img-fluid" />
            <h3 className="mt-3 outlined-text">Recipe Sharing</h3>
            <p className="outlined-text">We share delicious recipes that you can try at home.</p>
          </div>
          <div className="col-lg-4">
            <img src={sandwichImg} alt="Sandwich" className="img-fluid" />
            <h3 className="mt-3 outlined-text">Cooking Techniques</h3>
            <p className="outlined-text">We teach you various cooking techniques to enhance your culinary skills.</p>
          </div>
          <div className="col-lg-4">
            <img src={sushiImg} alt="Sushi" className="img-fluid" />
            <h3 className="mt-3 outlined-text">Seasonal Food Ideas</h3>
            <p className="outlined-text">We provide seasonal food ideas to help you plan your meals.</p>
          </div>
        </div>
      </section>

       {/* Add the interactive feature for displaying recipes */}
       <section className="container py-5">
        <h2>Featured Recipes</h2>
        <div className="row">
        <div className="col-lg-4">
        <div className="recipe-card" style={{ 
          border: '1px solid black', 
          padding: '20px', 
          textAlign: 'center',
          borderRadius: '16px',
        }}>
        <img src={roastBeefImg} alt="Roast Beef" className="img-fluid" />
        <h3 style={{ marginTop: '10px' }}>Roast Beef</h3>
        <button 
          onClick={() => handleDisplayRecipe('roastBeef')} 
          className="join-now-btn" 
          style={{ color: 'white', }}
        >
          View Recipe
        </button>
        </div>
        </div>

        <div className="col-lg-4">
        <div className="recipe-card" style={{ 
        border: '1px solid black', 
        padding: '20px', 
        textAlign: 'center',
        borderRadius: '16px',
        }}>
        <img src={lambSteakImg} alt="Lamb Steak" className="img-fluid" />
        <h3 style={{ marginTop: '10px', }}>Lamb Steak</h3>
        <button 
        onClick={() => handleDisplayRecipe('lambSteak')} 
        className="join-now-btn" 
        style={{ color: 'white', }}
        >
        View Recipe
        </button>
        </div>
        </div>

        <div className="col-lg-4">
        <div className="recipe-card" style={{ 
        border: '1px solid black', 
        padding: '20px', 
        textAlign: 'center',
        borderRadius: '16px',
        }}>
        <img src={salmonImg} alt="Salmon" className="img-fluid" />
        <h3 style={{ marginTop: '10px' }}>Salmon Steak</h3>
        <button 
        onClick={() => handleDisplayRecipe('salmon')} 
        className="join-now-btn" 
        style={{ color: 'white' }}
        >
        View Recipe
        </button>
        </div>
        </div>
        </div>
      </section>

    {displayedRecipe && (
    <section className="container py-5">
    <h2 style={{ marginTop: '-50px' }}>{displayedRecipe.title}</h2>
    <h4>Ingredients</h4>
    <ul className="ingredients">
      {displayedRecipe.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
    <h4>Instructions</h4>
    <ol className="instructions">
      {displayedRecipe.instructions.map((instruction, index) => (
        <li key={index}>{instruction}</li>
      ))}
    </ol>
    <button 
      onClick={() => setDisplayedRecipe(null)} 
      className="join-now-btn" 
      style={{ color: 'white' }}
    >
      Close Recipe
    </button>
    </section>
    )}


     <section className="container py-5">
      <div className="row">
        <div className="col-lg-6">
          <h2>Food of the Week: Kare-Kare</h2>
          <img src={karekareImg} alt="Kare-Kare" className="img-fluid" style={{marginBottom: '20px'}} />
          <p className="justified-text">
            Kare Kare is a traditional Filipino stew complimented with a thick savory peanut sauce. The commonly used meats for this dish are ox tail, tripe, and pork leg; on some occasions goat and chicken meat are also used. This dish is a perfect representation of Filipino cuisine's blend of flavors and textures, with the rich, meaty stew balanced by the sweet and spicy peanut sauce. It's a comforting dish that's perfect for cold weather, and it's a must-try for anyone visiting the Philippines.
          </p>
          <div className="rating-origin">
            <div>
              <h4>Rating: ⭐️⭐️⭐️⭐️⭐️</h4>
            </div>
            <div>
              <h4>Origin: Philippines</h4>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <h2>Why is Food Important?</h2>
          <p>
            Food is not just about nutrition, it's about culture, community, and joy. It's a way of life that connects us to our past, our present, and our future. Food is a source of comfort and celebration, a tool for healing and growth, and a medium for expression and creativity. It's a universal language that brings people together, transcends borders, and unites us all in our shared humanity.
          </p>

          <img src={veggiesImg} alt="Veggies" className="img-fluid" style={{width: '100%', height: 'auto'}} />
        </div>
      </div>
      </section>

      <section className="container py-5 rounded-section"
        style={{
          backgroundColor: '#8DC63F',
          color: 'white',
        }}>
          <h2>About Us</h2>
          <p align = 'center'>
            We're a group of food lovers who share our passion for cooking and eating. We believe that food is more than just sustenance - it's a way of life, a connection with culture, and a source of joy. We hope you find our blog inspiring and that you'll join us in our culinary adventures.
          </p>
        </section>
      </main>
      {/* Footer */}
    <footer className="footer text-center py-3">
      <p>&copy; 2023 My Food Blog. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default HomePage;
