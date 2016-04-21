

var model = {
	
	cats: [{
		name: 'Polly',
		clickCount: 0,
		picSource: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426'

	},
	{
		name: 'Dolly',
		clickCount: 0,
		picSource: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'

	},
	{
		name: 'Molly',
		clickCount: 0,
		picSource: 'https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454'

	},
	{
		name: 'Roy',
		clickCount: 0,
		picSource: 'https://www.worldsbestcatlitter.com/clearing-the-air/wp-content/uploads/2015/02/WBCL_web_2015_blog_easy_ways_adult_cat.jpg'

	},
	{
		name: 'Amber',
		clickCount: 0,
		picSource: 'https://www.worldsbestcatlitter.com/clearing-the-air/wp-content/uploads/2014/04/WBCL_web_2014_blog_outdoor-cat-safe.jpg'

	}
	],

	currentCat: null

};



var appController = {

    init: function() {
    	model.currentCat = model.cats[0];
    	appView.init();
    	appViewList.init();

    	},

    getAllCats: function() {
    	return model.cats;
    },

    getCurrentCat: function() {
    	return model.currentCat;
    },

    setCurrentCat: function(someCat) {
    	model.currentCat = someCat;
    },

    setClicksCount: function() {
    	model.currentCat.clickCount++;
    	appView.update();
    }
    

};




var appView = {

	init: function() {
		this.catSection = document.getElementsByClassName('cat-info');
		this.catName = document.getElementsByClassName('name')[0];
		this.catImg = document.getElementById('image');
		this.countMessage = document.getElementsByClassName('message')[0];



		this.catImg.addEventListener('click', function(e) {
			appController.setClicksCount();
		});

		this.update();
	},


	update: function() {
		var currentCat = appController.getCurrentCat();
		this.countMessage.textContent = currentCat.clickCount;
		this.catName.textContent = currentCat.name;
		this.catImg.src = currentCat.picSource;
	}

};

var appViewList = {

	init: function() {

		this.catsList = document.getElementsByClassName('cats')[0];

		this.update();
	},

	update: function() {

		var cats = appController.getAllCats();

		this.catsList.innerHTML = '';

		for (var i=0; i<cats.length; i++) {

			var cat = cats[i];

			var newLi = document.createElement('li');
			newLi.textContent = cat.name;


			newLi.addEventListener('click', (function(cat){
				return function() {
					appController.setCurrentCat(cat);
					appView.update();
				};
			})(cat));

			this.catsList.appendChild(newLi);
		}
	}
};
 window.onload = function() {
	appController.init();
}
