const createRecipeHtml = (id, name, type, serving, preparation, ingredients)  => {
    
    const html = `<div class="card card-body text-start mb-3 border border-dark" data-task-id=${id}>
        <h5 class="mb-4 fw-bolder text-center">${name}</h5>
        <p class="mb-2 fw-bolder">Serving People:<span id="pplSpan" class="px-2 fw-normal">${serving}</span></p>
        <p class="mb-2 fw-bolder">Preparation Time:<span id="prepSpan" class="px-2 fw-normal">${preparation}</span></p>
        <p class="mb-2 fw-bolder">Ingredients:
            <p class="border p-1">${ingredients}</p>
        </p>
        <button type="button" class="btn btn-outline-danger btn-sm mx-5">Delete</button>
    </div>`;
  
  return html;
  }

class RecipeManager {
    constructor(currentId = 0){
        this.recipes = [];
        this.currentId = currentId;
    }

    addTask(name, type, serving, preparation, ingredients) {
        const newRecipe = {
            id: this.currentId++,
            name: name,
            type: type,
            serving: serving,
            preparation: preparation,
            ingredients: ingredients
        };
        this.recipes.push(newRecipe);
    }  
    
    render(){
        const appertizers = document.querySelector("#appertizers");
        const mains = document.querySelector("#mains");
        const sides = document.querySelector("#sides");
        const desserts = document.querySelector("#desserts");

        const appertizersHtmlList = [];
        const mainsHtmlList = [];
        const sidesHtmlList = [];
        const dessertsHtmlList = [];
        for(let i = 0; i < this.recipes.length; i++){
          const renderRecipe = this.recipes[i];
          //console.log(renderRecipe);
          
          const recipeHtml = createRecipeHtml(
            renderRecipe.id,
            renderRecipe.name, 
            renderRecipe.type, 
            renderRecipe.serving,
            renderRecipe.preparation,
            renderRecipe.ingredients);
            
    
            if(renderRecipe.type === "appertizer"){
                appertizersHtmlList.push(recipeHtml);
                //console.log("appertizer");
            }else if (renderRecipe.type === "main"){
                mainsHtmlList.push(recipeHtml);
                //console.log("main");
            }else if (renderRecipe.type === "side"){
                sidesHtmlList.push(recipeHtml);
                //console.log("side");
            }else if (renderRecipe.type === "dessert"){
                dessertsHtmlList.push(recipeHtml);
                //console.log("dessert");
            }
        }
        
        const appertizersHtml = appertizersHtmlList.join("\n");
        appertizers.innerHTML = appertizersHtml;

        const mainsHtml = mainsHtmlList.join("\n");
        mains.innerHTML = mainsHtml;

        const sidesHtml = sidesHtmlList.join("\n");
        sides.innerHTML = sidesHtml;

        const dessertsHtml = dessertsHtmlList.join("\n");
        desserts.innerHTML = dessertsHtml;
        
    }
}


//console.log(createRecipeHtml(1,"gnocchi","MAIN", 4, "40mins", "tomato, pasta, onion"));