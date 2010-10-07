/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 *   Remember that keyword "this" does not get pushed to inner functions
 *   use thisClass = this because inner functions have access to it's parents variables
 */

webKing.inject("menuBar");

webKing.classify(menuBar, {

    //default styles for kubrick styles
    
    //menuBarTag: function(){return this.arguments[0]},
    //this.getArgs()
    menuBarTag: "",
    hasTabs:true,
    numOfTabs:0,
    tabs:[],//domNode Array
    domNode:"",
    
    initiate:function(){
       if(this.arguments.length < 1){
           this.die("please supply 1 argument: Need DomNode for component placement.");
       }
       //console.log(this.arguments);
       this.menuBarTag = this.arguments[0];
    },

    addTab:function(/*obj*/tab){
        this.numOfTabs++;
        this.tabs.push(tab);
    },

    removeTab:function(/*obj*/tab){
        /*TODO: probabley wont work - fix it(removeTab)*/
        this.numOfTabs--;
        this.tabs.pop(tab);
    },

    display:function(){
       return this.domTemplate();
    },

    domTemplate: function(){
        menubar = this.menuBarTag;
        menubar.id = "menubar";
        for(var i in this.tabs){
            menubar.appendChild(this.tabs[i].display());
        }
        return menubar;
    },

    defaultBuild:function(){
        
    }

});