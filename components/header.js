/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 *   Remember that keyword "this" does not get pushed to inner functions
 *   use thisClass = this because inner functions have access to it's parents variables
 */

webKing.inject("header");

webKing.classify(header, {

    //setup defaults
   appName:"",
   appSubName:"",
   appFamilyName:"",
   hasAppSwitcher:false,
   appSwitcherText:"",
   logoURL:"",
   hasLogo:true,
   hasUserID:false,
   hasLinks:true,
   numLinks:null,
   domNode:"",

   initiate:function(){
       //initiate vars
       this.domNode = this.domTemplate();
   },
   
   setLinks:function(/*linksList*/ll){
       
       this.hasLinks = true;
   },

   setAppName:function(/*string*/appName, /*domNode*/div){
        this.appName = appName;
        var appNameTextNode = document.createTextNode(this.appName);
        div.appendChild(appNameTextNode);
   },

   validateName:function(){
       //can only have familyname and appname or appname and subname,  but not both;
   },

   getDomNode:function(){

   },
   defaultBuild:function(){
       new styles("css/kubrickHeader.css");
       this.appName="Application Name";
       

   }

});