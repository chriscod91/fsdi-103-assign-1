var global=10;

function hello(){
     console.log("hello");
     console.log(global);
     let internal=20;
     console.log(internal);
     return "this function returns the value" +internal; 
    }
    
    console.log(global);
    console.log(hello());

    let traveling=function(){
        return "i am traveling to" + country;
    }

    console.log(traveling(italy) + country);
    let travel;

    travel= traveling("london");
    console.log(travel);

    function sum(a,b){
        console.log(a+b);
    }

    console.log(sum(2,8)*1.11);
     // autocalling function
    (function(topic){
        console.log("i am learning" + topic);
    })("js");

    // arrow function
    let sum2 = (a,b) => a+b;
    console.log(sum2(1,2));

    var username=prompt("enter your name: ");
    docu
    document.write(username);

