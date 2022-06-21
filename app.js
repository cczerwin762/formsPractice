function verify(){
  p1 = document.getElementById('password').value;
  p2 = document.getElementById('vpassword').value;
  uname = document.getElementById('username').value;
  console.log(p1+""+p2);
  if(p1!=p2 || p1.length==0||uname.length===0){
    alert("Passwords must match, and all fields must be filled out.");
    return false;
  }
  else{
    alert("Hello " + uname +"! Thank you for creating an account." )
    return true;
  }
}
console.log("Start \n");
