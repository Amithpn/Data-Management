var salesApp = angular.module("salesApp",
		[]);

salesApp.controller(
				'salesDetailsController',
				function($rootScope, $scope, $http) {
					$scope.purchaseOrderList = [];
					$scope.quotationList = [];
					$scope.inventoryList = [];
					$scope.salesList = [];
					
					$scope.styleClassH = "active";
					$scope.isHome = true;
					
					$scope.styleClassP = "";
					$scope.isPurchase = "";
					
					$scope.styleClassQ = "";
					$scope.Quotation = "";
					
					$scope.styleClassI = "";
					$scope.isInventory = "";
					
					$scope.styleClassS = "";
					$scope.isSales = "";
					
					var clear = function() {
						$scope.styleClassH = "";
						$scope.isHome = "";
						$scope.styleClassP = "";
						$scope.isPurchase = "";
						$scope.styleClassQ = "";
						$scope.isQuotation = "";
						$scope.isEnquiry = "";
						$scope.styleClassI = "";
						$scope.isInventory = "";
						$scope.styleClassS = "";
						$scope.isSales = "";
						$scope.add = false;
						$scope.addQuote = false;
					}
					$scope.showHome = function() {
						clear();
						$scope.styleClassH="active";
						$scope.isHome = true;
					}
					$scope.showPurchaseOrder = function() {
						clear();
						$scope.styleClassP="active";
						$scope.isPurchase = true;
						
					}
					$scope.showQuotation = function() {
						clear();
						$scope.styleClassQ="active";
						$scope.isQuotation = true;
					}
					$scope.showEnquiry = function() {
						clear();
						$scope.styleClassQ="active";
						$scope.isEnquiry = true;
					}
					$scope.showInventory = function() {
						clear();
						$scope.styleClassI="active";
						$scope.isInventory = true;
					}
					$scope.showSales = function() {
						clear();
						$scope.styleClassS="active";
						$scope.isSales = true;
					}
					$scope.addItems = function() {
						$scope.add = true;
						 $scope.purchaseOrderList.push({
							 	itemId:0,
							 	itemName : '' , 
							 	quantity : 0,
							 	price : 0
					  });
						 
					}
					$scope.addQuotation = function() {
						$scope.addQuote = true;
						 $scope.quotationList.push({
							 	itemId: 0,
							 	itemName : '' , 
							 	itemDesc : '',
							 	unitPrice: 0,
							 	quantity : 0,
							 	totalAmt : 0
					  });
						 
					}
					$scope.openInputBox = function() {
						$scope.existingVen = true;
						$scope.showSubmit = true;
						$scope.addInventory = false;
						$scope.addVendor = false;
					}
					$scope.submitVendorId = function(vendorId) {
						$scope.showSubmit = false;
						$scope.addInventory = true;
						$scope.inventoryList.push({
							itemId: '',
							unitPrice: 0,
							noOfUnits: 0,
							totalPrice: 0
						})
					}
					$scope.addNewVendor = function() {
						$scope.addVendor = true;
						$scope.showSubmit = false;
						$scope.addInventory = false;
					} 
					$scope.addSales = function() {
						$scope.addSalesDetails = true;
						 $scope.salesList.push({
							 	itemId: '',
							 	vendorId : '' , 
							 	quantitySold: 0,
							 	unitPrice: 0,
							 	TotalAmt: 0
					  });
						 
					}
					
				}
			);