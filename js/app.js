(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function() {
		this.products = gems;

	});

	app.controller('TabController', function(){
	    this.tab = 1;

	    this.setTab = function(newValue){
	      this.tab = newValue;
	    };

	    this.isSet = function(tabName){
	      return this.tab === tabName;
	    };
  	});

  	app.directive('productTitle', function() {
  		return {
  			restrict: 'E',
 			templateUrl: 'product-title.html'
  		};
  	});

  	app.directive('productTabs', function() {
  		return {
  			restrict: 'E',
  			templateUrl: 'product-tabs.html',
  			controller: function () {
  			    this.tab = 1;

			    this.setTab = function(newValue){
			      this.tab = newValue;
			    };

			    this.isSet = function(tabName){
			      return this.tab === tabName;
			    };

  			},
  			controllerAs: 'tab',
  		};
  	});

  	app.directive('productReview', function() {
  		return {
  			restrict: 'E',
  			templateUrl: 'product-review.html',
  			controller: function() {
  		  		this.review = {};

				this.addReview = function(product) {
	  				product.reviews.push(this.review);
	  				this.review = {};
  				};
  			},
  			controllerAs: 'reviewCtrl',
  		};
  	});


	var gems = [{
			name: 'Azurite',
			price: 2,
			description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.',
			canPurchase: true,
			reviews : [
				{
					stars: 5,
					body: "I really like this product!",
					author: "joe@thomas.com",
					createdOn: 1397490980837,
				},
				{
					stars: 3,
					body: "It was ok",
					author: "bob@toysrus.com",
					createdOn: 1397490980837,
				},
			],
		},
		{
			name: 'Bloodstone',
			price: 5.95,
			description: 'Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.',
			canPurchase: false,
			reviews : [
				{
					stars: 4,
					body: "Good product!",
					author: "thomas@joe.com",
					createdOn: 1397490980837,
				},
			],
		}
	];

})();