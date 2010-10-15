/**
 * 
 */
webKing.create("selectMenu");

webKing.classify(selectMenu, {
	
	multiple:true,
	defaultSelect:"",
	domNode:"",
	
	initiate:function(){
		var json = this.arguments[0];
		var name = this.arguments[1];
		var select = document.createElement('select');
		for(i=0; i<=json[name].length -1; i++){
			var opt = document.createElement('option');
			opt.value = json[name][i];
			var val = document.createTextNode(json[name][i]);
			opt.appendChild(val);
			select.appendChild(opt);
		}
		this.domNode = select;
	},

	getDomNode:function(){
		return this.domNode;
	},
	
	setDefaultString:function(/*string*/defaultString){
			var defaultOpt = document.createElement('option');
			defaultOpt.value = "default";
			var defaultVal = document.createTextNode(defaultString);
			defaultOpt.appendChild(defaultVal);
			this.domNode.insertBefore( defaultOpt, this.domNode.firstChild );
			this.domNode.selectedIndex = 0;
	}
	
	
});