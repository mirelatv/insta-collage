$(document).ready(function() {
  var email = $('#inputEmail');
  var password = $('#inputPassword');


  var validateEmail = false;
  var validatePassword = false;

  // Aqui indicar que se puede implementar la función como variable
  function activeButton() {
    if (validateEmail && validatePassword ) {
      $('form > button').attr('disabled', false);
    }
  }

  function desactiveButton() {
    $('form > button').attr('disabled', 'disabled');
  }


  email.on('input', function(event) {
    // console.log(event.target.value);
    var REGEXEMAIL = /^[a-zA-Z]+$/;
    console.log(REGEXEMAIL.test($(this).val()));
    console.log($(this).val());
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  password.on('input', function() {
    console.log($(this).val());
    if ($(this).val().length >= 6) {
      validatePassword = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });
});
