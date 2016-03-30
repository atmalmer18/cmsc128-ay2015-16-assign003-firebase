module.exports = {
	getRecipes: function(next) {
		Recipe.find().exec(function(err, recipes) {
			if(err) throw err;
			next(recipes);
		});
	},
	addRecipe: function(recipeVal, next) {
		Recipe.create(recipeVal).exec(function(err, recipe) {
			if(err) throw err;
			next(recipe);
		});
	},
	removeRecipe: function(recipeVal, next) {
		Recipe.destroy({name: recipeVal}).exec(function(err, recipe) {
			if(err) throw err;
			next(recipe);
		});
	}
};