


function food(name,calories) {
	this.name = name;
	this.calories = calories;
}

//holds diffrent kinds of foods 
var foodData = {
	foods : [],
	//name,calories
	add : function(name,calories) {},
	
	remove : function(name) {},
	
	find : function(name) {},
	
	getNames : function() {
		var names = [];
		foods.forEach(function(val) {
			names.push(val.name)
			});
		return names;
	}
	};

//dropdown control for foodData
//in the future it will be a searchbox, to make selection fast
var dropDownControlForFoodData = {
	id : "dropDownControlForFoodData",
	
	elem : null,
	
	redraw : function(foodDataLocal) {
		if (this.elem == null) {
			this.elem = $("<select></select>",{id:this.id})
		} else {
			this.elem.html("");
			var names = foodDataLocal.getNames();
			names.forEach(function(value) {
				$("<option></option>")
				.val(value.name)
				.html(value.name)
				.appendTo(this.elem);
			});
		}
	},
	
	initToContainer : function(container,foodDataLocal) {
		this.redraw(foodDataLocal);
		this.elem.appendTo(container);
	},

};

//a text input object with validation inputs
var servingSizeControl = {};


//manipulates controlsModule
var resetBtn = {};

//button element, pulls data from dropdown and serving size.
//pushes data to foodData, and manipulatesFoodTable
var addBtn = {};

//composite of resetBtn,addBtn,foodDropDown
var controlsModule = {};

//basic model for a meal component
//pulls from foodData
function mealBit(name,size,calories) {
	this.name = name;
	this.size = size;
	this.calories = foodData.find(this.name).calories * this.size;
}

//takes a foodDetail, name calories etc
//formats it into html
//adds controls : remove etc
//pushes data to meal
function FoodListing(mealDetail) {
	this.name = mealDetail.name;
	this.size = mealDetail.size;
	this.calories = mealDetail.calories;
}



//panel containing all addedMeals
//calculates total calories
//contains FoodListing s 
var meal = {
	//array of FoodListing
	mealBitList : [],
	
	//working element
	elem : null;
	
	//redraws elem based on data
	redraw : function() {
	},
	
	//redraws and appends to container
	initToContainer = function(container) {
		
	},
	
}

//composite of meal and controlsModule
//initializes the page and does other high level stuff.
var content = {}


//loads the current foodList from ajax 
//foodlist is personal to the user, user can select categories
//categories are functional(ie most used,user added)
//or premade lists
//and served via API
//the user doesn't manage food data directly from mealContruction screen
function getFoodDataFromServer(accessData) {
	//connects to server and fetches all foodData
	//accessData would be ip address or some API request
}





