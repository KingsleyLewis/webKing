/**
 * 
 */
webKing.inject("selectMenu");

webKing.classify(selectMenu, {
	
	multiple:true,
	domNode:"",
	
	initiate:function(/*string*/json, /*string*/name){
		select = document.createElement('input');
		select.type = "select";
		console.log(json[name]);
	},

	getDomNode:function(){
		return this.domNode;
	}
	
	
});