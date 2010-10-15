webKing.inject("textBox");

webKing.classify(textBox, {
	
	name:"",
	id:"",
	value:"",
	domNode:"",
	
	initiate:function(){
		this.value = this.arguments[0];
		var tb = document.createElement("input");
		tb.type = "text";
		tb.name = this.name;
		tb.id = this.id;
		tb.value = this.value;
		this.domNode = tb;
		console.log(tb);
	},
	
	getDomNode:function(){
		return this.domNode;
	}
	
	
	

}, false);