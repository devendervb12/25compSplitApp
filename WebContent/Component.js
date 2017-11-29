sap.ui.core.UIComponent.extend("smax.batch25.split.Component", {
	metadata : {
		manifest : "json"
	},
	init : function(){
		// applying current component to super class init method
		sap.ui.core.UIComponent.prototype.init.apply(this);	
		
		//initializing Router Object
		this.getRouter().initialize();
	}
})