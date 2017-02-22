
var name,email,password;


function validatesignup()
    {
    name=$('#name').val();
    password=$('#password').val();
    email=$('#email').val();
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    if(name==""||password==""||email=="")
    {
        alert("please fill all the details");
    }
    else if(password.length<6) 
    {
        alert("password must be atleast 6 characters long");
    }
    else{
        alert("Successfully registered...Now you can login")
        login();
    }
    $('#name').val('');
    $('#email').val('');
    $('#password').val('');
};
function validatelogin()
    {
        var email1=$('#email1').val();
        var password1=$('#password1').val();
    if(password1==""||email1=="")
    {
        alert("please fill all the details");
    }
    else if(password1.length<6) 
    {
        alert("password must be atleast 6 characters long");
    }
     else if(password1!=password||email1!=email){
        alert("Incorrect email or password");
        $('form')[0].reset();
    } 
    else if(email1==email&&password1==password){
         home();
    } 
     $('#email1').val('');
      $('#password1').val('');
    };


    