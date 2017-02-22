
$(document).ready(function(){
    $('#main').show();
    $('#login').hide();
    $('#signup').hide();
    $('#home').hide();
});
    function signup(){
        $('#signup').show();
        $('#login').hide();
        $('#main').hide();
        $('#home').hide();
       // function validateform();
    };
   function login(){
        $('#login').show();
        $('#signup').hide();
        $('#main').hide();
        $('#home').hide();
    };
    function main(){
        $('#main').show();
        $('#login').hide();
        $('#signup').hide();
        $('#home').hide();
    };
   function home(){
        $('#home').show();
         $('#main').hide();
        $('#login').hide();
        $('#signup').hide();
        $('#loggedInUser')[0].innerHTML=localStorage.getItem('name');
    };

