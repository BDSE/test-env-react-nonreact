/**
 * Jquery like pattern
*/

var testVar = "testVar";
(function(global, $, factory){

    factory();

}(window,jQuery,function(){

    var
        testVar = "testVar2",
        aQuery = function(fn,ln,lang){
            return new aQuery.init(fn,ln,lang);
        },

        init =  aQuery.init = function(fn,ln,lang){

            var self = this;

            self.lang = lang || "es";
            self.firstName = fn || "defaultFirstName";
            self.lastName = ln || "defaultLastName";

        },

        greeting = {
            es:"Hola",
            en:"Hello"
        },

        formalGreetings={
            es:"Saludos",
            en:"greetings"
        };

    aQuery.prototype = {

        fullName: function(){
            return this.firstName+" "+this.lastName;
        },

        greet:function(formal){
            if(formal){
                console.log(this.formalGreeting()+" "+testVar);
            }else{
                console.log(this.greetings());
            }
            return this;
        },

        greetings : function(){
            return greeting[this.lang]+" "+ this.firstName;
        },
        formalGreeting: function(){
            return formalGreetings[this.lang]+" "+ this.fullName();
        },
        setLang: function(lang){

            this.lang = lang;

            return this;

        }

    };

    aQuery.init.prototype = aQuery.prototype;

    window.aQuery = window.a$ = aQuery;

    console.log(this);

}));