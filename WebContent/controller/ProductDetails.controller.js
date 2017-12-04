sap.ui.controller("smax.batch25.split.controller.ProductDetails", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.ProductDetails
*/
	onInit: function() {
		var router = this.getOwnerComponent().getRouter(this);
		
		router.getRoute("detailName").attachPatternMatched(function(evt){
			var pid = evt.getParameters().arguments.pid;
			debugger;
			this.getView().byId("idobjHeader")
			.bindElement("/ProductSet('"+pid+"')");
			
		}, this);

	},
	
	onCreate : function(){
		
		var oDialog = new sap.m.Dialog({
			title : "Create a Product",
			content : [
				new sap.m.Label({ text : "Product ID"}),
				new sap.m.Input(),
				new sap.m.Label({ text : "Name"}),
				new sap.m.Input(),
				new sap.m.Label({ text : "Description"}),
				new sap.m.Input(),
				new sap.m.Label({ text : "Category"}),
				new sap.m.Input(),
				new sap.m.Label({ text : "Supplier ID"}),
				new sap.m.Input(),
				
			],
			beginButton : new sap.m.Button({ text : "Close", press : function(){
				oDialog.close();
			}}),
			endButton : new sap.m.Button({ text : "Save", press : function(){
				// send data to SAP
				var data = {
						ProductID : oDialog.getContent()[1].getValue(),
						Name : oDialog.getContent()[3].getValue(),
						Description : oDialog.getContent()[5].getValue(),
						Category : oDialog.getContent()[7].getValue(),
						SupplierID : oDialog.getContent()[9].getValue()
				}
				debugger;
				var oModel = this.getOwnerComponent().getModel();
				oModel.create("/ProductSet", data, {
					success : function(){						
						sap.m.MessageToast.show("Data Created")
					},
					error : function(){
						sap.m.MessageToast.show("Not Created");
					}
				});
				
				oDialog.close();
			}.bind(this) })
		});
		oDialog.open();	
		
	},
	
	onUpdate : function(){
		
		var oDialog = new sap.m.Dialog({
			title : "Update Product",
			content : [
				new sap.m.Label({ text : "Product ID"}),
				new sap.m.Input({editable : false}),
				new sap.m.Label({ text : "Name"}),
				new sap.m.Input()
			],
			endButton : new sap.m.Button({
				text : "Update and Close",
				press : function(){
					var data = {
							Name : oDialog.getContent()[3].getValue(name)
					}
			//	var oModel = this.getOwnerComponent().getModel();	
					this.getOwnerComponent().getModel().update("/ProductSet('"+oDialog.getContent()[1].getValue(prodID)+"')", data, {
						success : function(){
							sap.m.MessageToast.show("Data Updated");
						},
						error : function(){
							sap.m.MessageToast.show("Not Updated");
						}
					})
					oDialog.close();
				}.bind(this)
			})
		});
		
		//set the data to NIputs
		var prodID = this.getView().byId("idobjHeader").getTitle();
		var name = this.getView().byId("idobjHeader").getIntro();			
		oDialog.open();
		oDialog.getContent()[1].setValue(prodID);
		oDialog.getContent()[3].setValue(name);
	},
	
	onRemove : function(){
		var prodID = this.getView().byId("idobjHeader").getTitle();
		
		this.getOwnerComponent().getModel().remove("/ProductSet('"+prodID+"')", {
			success : function(){
				sap.m.MessageToast.show("Data Deleted");
			},
			error : function(){
				sap.m.MessageToast.show("Not Deleted");
			}
		})
	}


});


















