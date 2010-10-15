webKing.create("workFlowFactory");

webKing.classify(workFlowFactory,{

    workFlowSteps: 0,/*int*/
    currentStep:0 /*int*/,
    insertBeforeDomNode: ""/*Node*/,
    stepName: ""/*String*/,
    stepIdName: ""/*String*/,
    numOfStepsPerFlow: 1,//Default 1

    setNumOfStepsPerFlow:function(num){
        this.numOfSteps = num;
    },
    
    getNumOfStepsPerFlow:function(){
       return this.numOfSteps;
    },

    setStepName: function(/*int*/name){
        this.stepName = name;
    },

    getStepName:function(){
        return this.stepName;
    },

    setWorkFlowSteps: function(/*int*/numSteps){
        this.workFlowSteps = numSteps;
    },

    getWorkFlowSteps:function(){
        return this.workFlowSteps;
    },

     setCurrentStep:function(){

    },

    getCurrentStep:function(){
        return this.currentStep;
    },

    setInsertBeforeDomNode:function(domNode){
        this.insertBeforeDomNode = domNode;
    },

    getInsertBeforeDomNode:function(){
        return this.insertBeforeDomNode;
    },

     setStepIdName: function(){
        var nameToConvert = this.stepName;
        //removespaces
        nameToConvert = nameToConvert.split(' ').join('');
        //lowercase first Char
        var convertedName = nameToConvert.charAt(0).toLowerCase() + nameToConvert.substring(1);

        this.stepIdName = convertedName;
    },

    createWorkFlow: function(){
        this.workFlowSteps++;
        this.currentStep++;
        this.setStepIdName();
        var newDiv = this.domTemplate();
        this.insertBeforeDomNode.parentNode.insertBefore(newDiv,this.insertBeforeDomNode);
    },

    removeWorkFlow: function(){
        var myId = this.stepIdName+"["+this.getWorkFlowSteps()+"]";
        //get a list of child nodes
        var badChildren = document.getElementById(myId).childNodes;
        
        // blank out the old domNode
        for (var i = badChildren.length; i != 0; i--){
            document.getElementById(myId).removeChild(badChildren[i - 1]);
        } 
        var par = document.getElementById(myId).parentNode;
        par.removeChild(document.getElementById(myId));
        this.workFlowSteps--;

        this.currentStep = this.currentStep - this.getNumOfStepsPerFlow();
        
    },
    
    domTemplate: function(){
        var step = document.createElement("span");
        var stepTextNode = document.createTextNode(this.stepName+" "+this.getWorkFlowSteps()+": ");
        var br = document.createElement("br");
        step.appendChild(stepTextNode);
        step.appendChild(br);
        step.name = this.stepIdName+"["+this.getCurrentStep()+"]";
        
        var stepText = document.createElement("textarea");
        stepText.name = this.stepIdName+"text["+this.getCurrentStep()+"]";
        stepText.id = this.stepIdName+"text["+this.getCurrentStep()+"]";
        var div = document.createElement("div");
        div.id = this.stepIdName+"["+this.getWorkFlowSteps()+"]";
        div.appendChild(step);
        div.appendChild(stepText);
        return div;
    }
});
