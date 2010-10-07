/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 *   Remember that keyword "this" does not get pushed to inner functions
 *   use thisClass = this because inner functions have access to it's parents variables
 */

webKing.inject("primaryTab");

webKing.classify(primaryTab,{
   
    tabName:"",
    className:"",
    cssString:"",
    usesExternalCss:true,
    selected:false,
    domNode:"",

    initiate:function(){
        if(this.arguments.length == 2){
            this.tabName = this.arguments[0];
            this.className = this.arguments[1];
        }else{this.die("please provide two arguments:  tabName, className");}
        this.domNode = this.domTemplate();
    },
    
    display:function(){
      var tab = this.domNode;
      return tab;
    },
    
    domTemplate:function(){
      var outerTabBox = document.createElement('div');
      var leftRounded = document.createElement('div');
      var rightRounded = document.createElement('div');
      var center = document.createElement('span');
      var tabText = document.createTextNode(this.tabName);
      center.appendChild(tabText);
      outerTabBox.className = this.className;
      leftRounded.className = this.className+" leftRound";
      center.className = this.className+" center";
      rightRounded.className = this.className+" rightRound";
      outerTabBox.appendChild(leftRounded);
      outerTabBox.appendChild(center);
      outerTabBox.appendChild(rightRounded);
      return outerTabBox;
    },

    setSelected:function(sel){
        this.selected = sel;
        if(sel){
            new styles().addClass(this.domNode, "selected");
            new action().shout("parimaryTab selected");
        }else{
            new styles().removeClass(this.domNode, "selected");
            new action().shout("parimaryTab selected");
        }
    }


});