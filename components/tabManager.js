/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 *   Remember that keyword "this" does not get pushed to inner functions
 *   use thisClass = this because inner functions have access to it's parents variables
 */

webKing.create("tabManager");

webKing.classify(tabManager, {

    orientation:"",
    tabs:[],
    numTabs:0,
    selectedTab:0,
    parentContainer:"",
    domNode:"",
    
    initiate:function(){
    	this.tabs = new Array();
    	this.parentContainer = document.createElement('div');
        var tabList = this.arguments[0];
        if(webKing.isArray(tabList)){
            for(var i = 0; i != tabList.length; i++){
                var tab = tabList[i];
                //check to see if the tab already exists
                if(this.tabExists(tab)){
                    continue;
                }else{
                    this.addTab(tab);
                }
            }
        }
        
    },

    tabExists:function(tab){
        //no tab would exist with a null array;
        if(this.tabs.length == 0){
            return false;
        }
        for(var i = 0; i != this.tabs.length; i++){
            if(this.tabs[i].tabName == tab.tabName){
                return true;
            }else{continue;}
           return false;
        }
    },

    addTab:function(/*obj*/tab){
    	this.numTabs++;
        this.tabs.push(tab);
    },

    removeTab:function(/*obj*/tab){
        /*TODO: probabley wont work - fix it(removeTab)*/
        this.numTabs--;
        this.tabs.pop(tab);
    },
    
    getDomNode:function(){
        for(var i in this.tabs){
            this.parentContainer.appendChild(this.tabs[i].getDomNode());
        }
        this.domNode = this.parentContainer;
        return this.domNode;
    },

    getSelectedTab:function(){
        for(var i = 0; i != this.tabs.length; i++){
            //every tab will have a selected property
            if(this.tabs[i].selected == true){
                return this.tabs[i];
            }
         }
         //what to do if no default tab is set?  set a tab and return it? die()?
         return "";
    },
    setSelectedTab:function(sel){
        //remove the selected class from every tab
        for(var i = 0; i != this.tabs.length; i++){
            new styles().removeClass(this.tabs[i].domNode, "selected");
        }
        //setup this tab as selected
        new styles().addClass(sel.domNode, "selected");
    }

});
