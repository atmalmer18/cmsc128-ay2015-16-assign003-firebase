/**
 * RecipeController
 *
 * @description :: Server-side logic for managing Recipes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Firebase = require("firebase");
var ref = new Firebase("https://laziz.firebaseio.com/web/saving-data/fireblog");

module.exports = {
	getRecipes: function(req, res) {
		ref.child("recipe").orderByKey().on("value", function(snapshot) {
			RecipeService.getRecipes(function(recipes) {
				recipes = snapshot.key();
				res.json(snapshot.key);
			});
		});
	},
	addRecipe: function(req, res) {
		var recipeVal = {
			name: (req.body.name) ? req.body.name : undefined,
			classification: (req.body.classification) ? req.body.classification : undefined,
			content: (req.body.content) ? req.body.content : undefined,
		};
		var usersRef = ref.child("recipe");
		usersRef.set({
			recipeVal
		});
		RecipeService.addRecipe(recipeVal, function(success) {
			res.json(success);
		});
	},
	removeRecipe: function(req, res) {
		var recipeVal = (req.param.name) ? req.param.name : undefined;
		RecipeService.removeRecipe(recipeVal, function(success) {
			res.json(success);
		});
	}
};

