sap.ui.controller("smax.batch25.split.controller.ProductList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.ProductList
*/
	onInit: function() {
    // get the event of list upload
		var oList = this.getView().byId("idList");
		
		oList.attachUpdateFinished(function(){
			debugger;
			this.getView().byId("idList").getItems()[0].firePress();	
		},this);
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.ProductList
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.ProductList
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.ProductList
*/
//	onExit: function() {
//
//	}
	
	onItemPress : function(oEvent){
	debugger;
	// get the Title
	var title = oEvent.getSource().getTitle();
	// pass the data- title(ProductID) to detailView
	this.getOwnerComponent().getRouter().navTo("detailName", {pid : title})
	}

});










