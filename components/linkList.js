
webKing.create("linkList");

webKing.classify(linkList,{
    
    links:[],
    linkListTag:"",
    orientation:"",
    domNode:"",

   initiate:function(){
        if(this.arguments.length == 2){
            this.orientation = this.arguments[0];
            this.linkListTag = this.arguments[1];
            //this[this.orientation]();
        }else{this.die('Usage new linkList(string layout orientation,domNode to attach to)');}
        this.domNode = this.domTemplate();
   },
   add:function(label, loc){
       var linkObj = {name:label,location:loc};
       this.links.push(linkObj);
   },
   display:function(){
/*TODO: allow domNode sent in display also not just autorun*/
       for(var i in this.links){
           var anchor = document.createElement("a");
           var anchorText = document.createTextNode(this.links[i].name);
           anchor.href = this.links[i].location;
           anchor.id = "linkList"+i;
           anchor.appendChild(anchorText);
           this.linkListTag.appendChild(anchor);
       }
       return this.linksLayout;
   },

    domTemplate:function(){

    },
   reverse:function(){
        this.links = this.links.reverse();
   },

   horizontal:function(){
        alert("horz");
   },
   vertical:function(){
        alert("vert");
   }


});