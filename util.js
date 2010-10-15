/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 *   Remember that keyword "this" does not get pushed to inner functions
 *   use thisClass = this because inner functions have access to it's parents variables
 */

webKing.create("util");

webKing.classify(util,{

    toggle:{
            show:function(dom){
                dom.style.display = '';
            },
            hide:function(dom){
                dom.style.display = 'none';
            },
            toggle: function(/*DOM Node*/dom){
                if(dom.style.display == 'none'){
                    dom.style.display = '';
                }else{
                    dom.style.display = 'none';
                }
        }
    },

    initiate:function(){},

    makeIdSafe:function(id){
                /*TODO double check this - I cant remember when I coded this or if I finished it*/
        /*
         * ID and NAME tokens must begin with a letter ([A-Za-z])
         * and may be followed by any number of letters,
         * digits ([0-9]),
         * hyphens ("-"),
         * underscores ("_"),
         * colons (":"), (not on jQuery)
         * and periods ("."). (not on jQuery)
         */
        //check for string or replace fails
        if(typeof id != "string"){

        }
        var safeId;
        var safeIdRegEx = /[^(A-Za-z0-9-_:\. )]/g;
        //check first letter
        var validateFirstCharRegEx = /[A-Za-z]/g;
        //check for null
        if(id.charAt(0).match(validateFirstCharRegEx) == null){
            throw new Error("id First Char is not a Letter");
        }

        //check for jqery

        //check for conformance

        //transform
        return safeId;
    },

    makeNameSafe:function(id){
        /*TODO makeNameSafe*/
        return this.makeIdSafe(id);
    }
});