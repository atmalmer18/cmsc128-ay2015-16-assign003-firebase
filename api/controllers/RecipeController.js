/**
 * RecipeController
 *
 * @description :: Server-side logic for managing Recipes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getRecipes: function(req, res) {
		RecipeService.getRecipes(function(recipes) {
			res.json(recipes);
		});
	},
	addRecipe: function(req, res) {
		var recipeVal = (req.param.name) ? req.param.name : undefined
			RecipeService.addRecipe(recipeVal, function(success) {
			res.json(success);
		});
	},
	removeRecipe: function(req, res) {
		var recipeVal = (req.param.name) ? req.param.name : undefined
			RecipeService.removeRecipe(recipeVal, function(success) {
			res.json(success);
		});
	}
};

