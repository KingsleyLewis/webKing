/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 *   Remember that keyword "this" does not get pushed to inner functions
 *   use thisClass = this because inner functions have access to it's parents variables
 */

webKing.inject("action");

webKing.classify(action, {
    
    action:"",
    regObj:null,
    func:function(){},
   /*accepts three arguments
    *@1 event - event that gets fired
    *@2 obj - this is the obj to register the event for
    *@3 function - anon function\or function list
    */
   initiate:function(){
       if(this.arguments.length == 0){
           return ;
       }
       this.action = this.arguments[0];
       this.regObj = this.arguments[1];
       this.func = this.arguments[2];
       //console.log(this.action.length);
       if(webKing.isArray(this.action)){
           for(var i = this.action.length - 1; i >= 0; i--){
               this.regObj.domNode[this.action[i]] = webKing.bind(this.regObj,this.func);
           }
       }else{
            this.regObj.domNode[this.action] = webKing.bind(this.regObj,this.func);
       }
   },

   checkEvent:function (e) {
       alert('Event type is ' + e.type);
   },

   shout:function(listenerList){
       //console.log(listenerList);
   },

   listen:function(){

   }
});

