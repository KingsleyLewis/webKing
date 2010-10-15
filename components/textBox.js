webKing.create("textBox");

webKing.classify(textBox, {
	
	name:"",
	id:"",
	value:"",
	label:"",
	domNode:"",
	
	
	initiate:function(){
		if(this.arguments.length = 2){
			//label and value
			this.label = this.arguments[0];
			this.value = this.arguments[1];
			this.createLabel();
		}else{
			//only value
			this.value = this.arguments[0];
		}
		this.createTextBox();
	},
	
	createLabel:function(){
		var label = webKing.inject(new label(this.label));
		console.log(label);
	},
	
	createTextBox:function(){
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