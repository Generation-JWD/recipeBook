
const recipeManager = new RecipeManager(0); 

let recipeForm = document.querySelector("#recipeForm");
let recipeName = document.querySelector("#recipeName");
let mealType = document.querySelector("#mealType");
let servingPpl = document.querySelector("#servingPpl");
let prepTime = document.querySelector("#prepTime");
let ingredients = document.querySelector("#ingredients");

const submitForm = (e) => {
    e.preventDefault();

    // add the recipe to the array recipes
    recipeManager.addTask(recipeName.value, mealType.value, servingPpl.value, prepTime.value, ingredients.value);
    //console.log(recipeManager.recipes);
    
    //render the recipe in the webpage
    recipeManager.render();

    // resete the forms inputs
    recipeForm.reset();
};

recipeForm.addEventListener("submit", submitForm);