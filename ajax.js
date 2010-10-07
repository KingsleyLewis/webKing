/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 *   Remember that keyword "this" does not get pushed to inner functions
 *   use thisClass = this because inner functions have access to it's parents variables
 */

webKing.inject("ajax");

webKing.classify(ajax,{

    xmlHttpObj: {},
    async: true,
    error: "",
    method:"POST",
    url:"",
    asText:"",
    asXml: "",
    asHtml:"",
    params:"",
    
    callback: function(){console.log("Your Code fails to define this function - No Callback For You!!");}, //blank function for call back - you define it

    initiate:function(){

    },
    
    getXmlHttpObject:function()
    {
        var xmlHttp = null;
        try
        {
            xmlHttp=new XMLHttpRequest();
        }
        catch (e)
        {
            try
            {
                xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e)
            {
                xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        this.xmlHttpObj = xmlHttp;
    },

    getData:function(){
        if(this.xmlHttpObj){
            //this.xmlHttpObj.open(this.Method, this.url);
            this.xmlHttpObj.onreadystatechange = function(){
                if(this.xmlHttpObj.readyState ==4 && this.xmlHttpObj.status ==200){
                    this.asText = this.xmlHttpObj.responseText;
                    this.asXml = this.xmlHttpObj.responseXML;
                    this.asHtml = text2html(this.asText);
                    this.callback();
                }
            };
        }else{
            this.error = "Fail to load xmlhttp object";
        }
    },

    setParams:function(params){
        this.params = params;

    },

    setMethod: function(method){
        this.method = method.toString().toUpperCase();
    },

    setUrl: function(url){
        this.url = url;

    },

/*TODO:error checking*/
    sendRequest: function () {
        this.getXmlHttpObject();
        if (this.method == "POST") {
            this.xmlHttpObj.open("POST", this.url, this.async);
            this.xmlHttpObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            this.xmlHttpObj.send(this.params);
            var self = this;//this refers to global state - assign to self for fucntion state below;
            this.xmlHttpObj.onreadystatechange = function(){
               //scope changed
               if(self.xmlHttpObj.readyState == 4 && self.xmlHttpObj.status == 200){
                    self.asText = this.responseText;
                    self.asXml = this.responseXML;
                    self.asHtml = self.text2html(self.asText);
                    self.callback();
                }
            };
        }
        else if (this.method == "GET") {
            this.xmlHttpObj.open("GET", this.url + this.parms, this.async);
            this.xmlHttpObj.send (null);
        }
    },

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