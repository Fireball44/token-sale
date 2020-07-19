$(document).ready(function(){
    $('form').submit(function(event){
       var name = $('#exampleInputName1').val().length
        var email = $('#exampleInputEmail1').val().length
        var password = $('#exampleInputPassword1').val().length
        var password1 = $('#exampleInputPassword1').val()
        var password2 = $('#exampleInputPassword2').val()

       if(name == 0){
           event.preventDefault();
           $('#nameError').html('Name must not be empty!!').show().fadeOut(3000);
       }
       else if (name < 4) {
           event.preventDefault();
           $('#nameError').html('Name must be at least 4 char!!').show().fadeOut(3000);
       }
       else if (name > 30) {
           event.preventDefault();
           $('#nameError').html('Name must not be more than 30 char!!').show().fadeOut(3000);
       }

       if(email == 0){
           event.preventDefault();
           $('#emailError').html('Email must not be empty!!').show().fadeOut(3000);
       }
       
       if(password == 0){
           event.preventDefault();
           $('#passError').html('Password must not be empty!!').show().fadeOut(3000);
       }
       else if(password < 6 ){
           event.preventDefault();
           $('#passError').html('Password must be at list 6 char!!').show().fadeOut(3000);
       }
      else if (password1 !== password2){
           event.preventDefault();
           $('#conPassError').html('Password not match!!').show().fadeOut(3000);
       }

       else{
           return
    }
    })
});