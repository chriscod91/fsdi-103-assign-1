  var username=prompt("please enter name");
  var email=prompt("add an email");
  var password=prompt("what is your password");
  var age=prompt("what is your age");
  var country=prompt("what country do you live");
  var salary=prompt("what is your monthly salary");
 

 
  document.getElementById("msg").innerHTML=`<h2>info</h2>
              <p> <b> name:</b>${username}</p>     
              <p> <b> email:</b>${email}</p>
              <p> <b> password:</b>${password}</p>
              <p> <b> age:</b>${age}</p>
              <p> <b> country:</b>${country}</p>
              <p> <b> salary(monthly):</b>${salary}</p>`;
            


