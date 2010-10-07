/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 *   Remember that keyword "this" does not get pushed to inner functions
 *   use thisClass = this because inner functions have access to it's parents variables
 */
webKing.inject("html");

webKing.classify(html,{

    remove:function(){},

    removeChildren:function(parent){
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        },
     
     hide:function(){},

     hideChildren:function(parent){
         for(var i = parent.children.length - 1; i >=0;i--){
                parent.children[i].style.display = "none";
            }
     },
     
     show:function(){},
     
     showChildren:function(parent){
         for(var i = parent.children.length - 1; i >=0;i--){
                parent.children[i].style.display = " ";
            }
     },

     add:function(){},

     addChildren:function(parent){
         for(var i = parent.children.length - 1; i >=0;i--){
                parent.children[i].style.display = " ";
            }
     },
     
     //moved her from ajax 10/07/10
     text2html:function(html)
     {
         //whitespace creates textnodes that we don't want at the front or end of the html fragment
         html = webKing.trimTags(html);

         //thanks to shog9 @ stackoverflow - very simple text to html convert
         var tmp = document.createElement("div");
         tmp.innerHTML = html;
         return tmp.childNodes[0];
     }

});
