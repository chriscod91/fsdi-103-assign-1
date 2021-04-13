var username="gchriscod91@gmail.com";
var password="123456";

var un=prompt("enter your name: ");
var pass=prompt("enter password");

console.log(un);
console.log(pass);

if(un==username){
    document.getElementById("msg").
    innerHTML=`<h2> welcome to system $(un)`;}
    else{
        document.getElementById(`msg`).
       innerHTML=`<h2> invalid user name or password </h2>`;
    }

    let num=10,
        num2=10,
        num3="10";

        if(num=num3){
            console.log("true");
        }