/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 *   Remember that keyword "this" does not get pushed to inner functions
 *   use thisClass = this because inner functions have access to it's parents variables
 */

webKing.create("styles");

webKing.classify(styles,{

   styleSheet:"",
   inlineStyles:"",
   
   initiate:function(){
       if(this.arguments.length == 1){
           this.styleSheet = this.arguments[0];
           this.getStyles();
       }
   },

   getStyles:function(){
      //get setStyles over CSS
        if(this.inlineStyles == ""){
            if(this.styleSheet == ""){
                return "";
            }
            var headID = document.getElementsByTagName("head")[0];         
            var styleLoc = document.createElement('link');
            styleLoc.type = 'text/css';
            styleLoc.rel = 'stylesheet';
            styleLoc.href = this.styleSheet;
            headID.appendChild(styleLoc);
        }
        return this.inlineStyles;
    },

    addClass:function(/*obj or domNode*/obj, classNameValue){
        var dom;
        if(webKing.isKingObj(obj)){
            dom = obj.domNode;
        }else{
            dom = obj;
        }
       
      /*TODO allow true or false to include child elements*/
      if(dom.className.indexOf(classNameValue) != -1){
        return;
      }
      classNameValue = " "+classNameValue;
      dom.className += classNameValue;
      for(var i = 0; i != dom.children.length; i++){
          dom.children[i].className += classNameValue;
      }
   },

   removeClass:function(domNode, classNameValue){
      /*TODO allow true or false to include child elements*/

      var newClass = domNode.className.replace(classNameValue, "");
      domNode.className = newClass;
      for(var i = 0; i != domNode.children.length; i++){
          var newChildClass = domNode.children[i].className.replace(classNameValue, "");
          domNode.children[i].className = newChildClass;
      }
   }

});