
/*
 *   Remember that keyword "this" does not get pushed to inner functions
 *   use thisClass = this because inner functions have access to it's parents variables
 */

webKing.inject("tab");

webKing.classify(tab,{

    tabName:"",
    className:"",
    cssString:"",
    usesExternalCss:true,
    selected:false,
    domNode:"",
    numDivs:0,

    initiate:function(){
       if(this.arguments.length == 2){
            this.tabName = this.arguments[0];
            this.className = this.arguments[1];
        }else{this.die("please provide two arguments:  tabName, className");}
        this.domNode = this.domTemplate();
    },

    getDomNode:function(){
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
    }


});

