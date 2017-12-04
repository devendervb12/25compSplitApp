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

	
	onItemPress : function(oEvent){
//	debugger;
	// get the Title
	var title = oEvent.getSource().getTitle();
	// pass the data- title(ProductID) to detailView
	this.getOwnerComponent().getRouter().navTo("detailName", {pid : title})
	}
});










