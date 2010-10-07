(function(){
   //empty function for prototyping
   function webKing() {}
   //set it up for prototyping

    webKing = webKing.prototype = {};

    webKing.version = "2010.05.28";

    webKing.scriptPath = ".";
    
    webKing.setScriptPath = function (/*String*/ path){
        this.scriptPath = path;
    };

    webKing.include = function(/*String*/includeFile){
        //load external javascript files that include the inject
        //include file is the fileName - .js
        //TODO: dynamically create script and src tags
        var scr = document.createElement("script");

        var source = document.createAttribute("src");
        source.nodeValue = this.scriptPath + includeFile + ".js";
        scr.setAttributeNode(source);

        var type = document.createAttribute("type");
        type.nodeValue = "text/JavaScript";
        scr.setAttributeNode(type);
        
       //document.childNodes[1].childNodes[0].appendChild(scr);
       document.getElementsByTagName("head")[0].appendChild(scr);

    };
    //create new object to be extended later
    webKing.inject = function(/*str*/component){
            var myCode = 'function '+ component +'(){this.arguments = arguments;if(this.initiate){this.initiate()};} '+
                    component +'.prototype.die = function(msg){console.log(msg);return false};'+
                    component +'.prototype.objClass = new Array("'+ component +'"); return '+ component +';';
            window[component] = new Function(myCode)();
    };
    // add functionality to object, should be used with inject
    webKing.classify = function(/*obj*/objToExt, /*objLit*/extender, /*bool*/includeWebKing){
        
        for(var funcName in extender){
            objToExt.prototype[funcName] = extender[funcName];
        }
       
        (includeWebKing == null) ? includeWebKing == false : includeWebKing;
        if(includeWebKing){
           for (var wkFunc in this){
              console.log(wkFunc);
              console.log(this[wkFunc].toSource());
              objToExt.prototype[wkFunc] = this[wkFunc];
           }
        }
    };

    webKing.inherit = function(mySuper){
        //accept two classes and combine the super into the sub
        console.log(this);
        console.log(mySub.prototype);
        //mySub.prototype = new mySuper();
        //mySuper.prototype.objClass.push(mySub.prototype.objClass);
        this.classify(mySub,new mySuper());
    };

    /*directly extend the webKing object
     *I basically want to be able to make this kinda like a plugin
     *I want to be able to call webking.mergename.{property/function}*/
    webKing.meld = function(/*string*/newMeth){
            this[newMeth] = new Function().constructor;
            this[newMeth] = this[newMeth].prototype = {};
            console.log(this);
   };

   webKing.isEmpty = function(val){
       if(val == "" || val == null || val == " " || val.length == 0){
           return true;
       }else{return false;}
   };

   webKing.isArray = function(obj){
       if ( typeof(obj) == 'object' )
            if (obj.length){
                return true;
            }else{
                return obj;}
   };

   webKing.isKingObj = function(obj){
       if (webKing.isArray(obj.objClass)){
            return true;
       }else{
            return false;
       }
    };

    webKing.addCallback = function(obj, func){
        obj.callback = func;
    };
   

   webKing.bind = function(obj,meth){
       return function(){return meth.call(obj);};
   };

   //attach domNode to document or other object
   webKing.attach = function(dn, obj){
       console.log(this);
       document[dn] = dn;
   };

   webKing.trimTags = function(/*string of HTMl*/html){
       var trimRegEx = /\s+(?!<.*>)\s/g;
       return html.replace(trimRegEx, "");
   };

    window['webKing'] = webKing;
})();