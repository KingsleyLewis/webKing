webKing.inject("textBox");

webKing.classify(textBox, {
	
	name:"",
	id:"",
	value:"",
	domNode:"",
	
	
	inititate:function(){
		this.value = this.arguments[0];
		tb = document.createElement("input");
		tb.type = "text";
		tb.name = this.name;
		tb.id = this.id;
		tb.value = this.value;
		this.domNode = tb;
	},
	
	getDomNode:function(){
		return this.domNode;
	}
	
	
	

}, false);