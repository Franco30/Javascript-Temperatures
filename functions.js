  function findCelsius() {
      var fahrenheit = document.getElementById("fahrenheit").value;
      var celsius;
      if (fahrenheit != '') {
          celsius = (fahrenheit - 32) * 5 / 9;
          document.getElementById("output").innerHTML = celsius;
      } else {
          document.getElementById("output").innerHTML = "Please enter a value!";
      }
  }

  function findFahreinheit() {
      var celsius = document.getElementById("celsius").value;
      var fahrenheit;
      if (celsius != '') {
          fahrenheit = ((celsius * 9) / 5) + 32;
          document.getElementById("output2").innerHTML = fahrenheit;
      } else {
          document.getElementById("output2").innerHTML = "Please enter a value!";
      }
  }
  //the purpose of this function is that only numbers can be input in the textfield
  function allowOnlyNumbers(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false;
      }
      return true;
  }