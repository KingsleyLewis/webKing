/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 *   Remember that keyword "this" does not get pushed to inner functions
 *   use thisClass = this because inner functions have access to it's parents variables
 */

webKing.create("contentPane");

webKing.classify(contentPane,{

   vScroll:"",
   hScroll:"",
   classNames:[],//list of classnames this domNode has
   domNode:"",
   id:"",
   name:"",
  
   initiate:function(){
       if(webKing.isEmpty(this.arguments)){
           this.domNode = document.createElement('div');
           return this;
       }
        //TODO: should determine if it is html/domNode/or url to grab data.  For now just url cause thats all im dealing with
        var url = this.arguments[0];
        this.load(url);
   },

   load:function(url){
       var aj = new ajax();
       aj.setUrl(url);
       aj.callback = webKing.bind(this, function(){
           var div = document.createElement('div');
           this.domNode = div.appendChild(aj.asHtml);
           this.callback();
       });
       aj.sendRequest();
   },

   getDomNode:function(){
       if(webKing.isEmpty(this.id)){
           /*TODO: some type of cp-name or something*/
            this.domNode.id = "contentPane";
       }else{
            this.domNode.id = this.id;
       }
       return this.domNode;
   },

   loadNewContent:function(url){
       this.load(url);
   }

});