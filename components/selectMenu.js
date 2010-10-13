/**
 * 
 */
webKing.inject("selectMenu");

webKing.classify(selectMenu, {
	
	multiple:true,
	domNode:"",
	
	initiate:function(){
		json = this.arguments[0];
		name = this.arguments[1];
		select = document.createElement('input');
		select.type = "select";
		for(i=0; i<=json[name].length -1; i++){
			var opt = document.createElement('option');
			var val = document.createTextNode(json[name][i]);
			opt.appendChild(val);
			select.appendChild(opt);
		}
		this.domNode = select;
	},

	getDomNode:function(){
		return this.domNode;
	}
	
	
});