
const recipeManager = new RecipeManager(0); 

recipeManager.load();
recipeManager.render();

let recipeForm = document.querySelector("#recipeForm");
let recipeName = document.querySelector("#recipeName");
let mealType = document.querySelector("#mealType");
let servingPpl = document.querySelector("#servingPpl");
let prepTime = document.querySelector("#prepTime");
let ingredients = document.querySelector("#ingredients");

const submitForm = (e) => {
    e.preventDefault();

    // add the recipe to the array recipes
    recipeManager.addTask(recipeName.value.toUpperCase(), mealType.value, servingPpl.value, prepTime.value, ingredients.value);
    //console.log(recipeManager.recipes);

    // resete the forms inputs
    recipeForm.reset();

    //render the recipe in the webpage
    recipeManager.render();

    //load the recipes to the local storage
    recipeManager.save();
};

recipeForm.addEventListener("submit", submitForm);

const appertizers = document.querySelector("#appertizers");
const mains = document.querySelector("#mains");
const sides = document.querySelector("#sides");
const desserts = document.querySelector("#desserts");

mains.addEventListener("click", (event) =>{
    if(event.target.classList.contains("delete-button")){
        const parentRecipe = event.target.parentElement;  
         const recipeId = Number(parentRecipe.dataset.recipeId);
         recipeManager.deleteTask(recipeId);

        recipeManager.render();
        //Saving the data in the localSorage
        recipeManager.save();
    }
});

sides.addEventListener("click", (event) =>{
    if(event.target.classList.contains("delete-button")){
        const parentRecipe = event.target.parentElement;  
         const recipeId = Number(parentRecipe.dataset.recipeId);
         recipeManager.deleteTask(recipeId);

        recipeManager.render();
        //Saving the data in the localSorage
        recipeManager.save();
    }
});

desserts.addEventListener("click", (event) =>{
    if(event.target.classList.contains("delete-button")){
        const parentRecipe = event.target.parentElement;  
         const recipeId = Number(parentRecipe.dataset.recipeId);
         recipeManager.deleteTask(recipeId);

        recipeManager.render();
        //Saving the data in the localSorage
        recipeManager.save();
    }
});

appertizers.addEventListener("click", (event) =>{
    if(event.target.classList.contains("delete-button")){
        const parentRecipe = event.target.parentElement;  
         const recipeId = Number(parentRecipe.dataset.recipeId);
         recipeManager.deleteTask(recipeId);

        recipeManager.render();
        //Saving the data in the localSorage
        recipeManager.save();
    }
});