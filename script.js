
  function inputfield()
  {
      var demo = document.getElementById("membership");
      if(demo.value == 1)
      {
        document.getElementById("ye1").style.display="block";
        document.getElementById("ye11").style.display="none";
        document.getElementById("ye111").style.display="none";
      }
      else if(demo.value == 2)
      {
          document.getElementById("ye1").style.display="none";
         document.getElementById("ye11").style.display="block";
         document.getElementById("ye111").style.display="none";
      }
      else if(demo.value == 3)
      {
         document.getElementById("ye111").style.display="block";
          document.getElementById("ye1").style.display="none";
           document.getElementById("ye11").style.display="none";
      }
      else{
        document.getElementById("ye1").style.display="none";
        document.getElementById("ye11").style.display="none";
        document.getElementById("ye111").style.display="none";
      }
  }
  function inputfield2()
  {
      var demo = document.getElementById("membership2");
      if(demo.value == 1)
      {
        document.getElementById("ye2").style.display="block";
        document.getElementById("ye22").style.display="none";
        document.getElementById("ye222").style.display="none";
      }
      else if(demo.value == 2)
      {
          document.getElementById("ye2").style.display="none";
         document.getElementById("ye22").style.display="block";
         document.getElementById("ye222").style.display="none";
      }
      else if(demo.value == 3)
      {
         document.getElementById("ye222").style.display="block";
          document.getElementById("ye2").style.display="none";
           document.getElementById("ye22").style.display="none";
      }
      else{
        document.getElementById("ye2").style.display="none";
         document.getElementById("ye22").style.display="none";
        document.getElementById("ye222").style.display="none";

      }
  }
  function inputfield3()
  {
      var demo = document.getElementById("membership3");
      if(demo.value == 1)
      {
        document.getElementById("ye3").style.display="block";
         document.getElementById("ye33").style.display="none";

 document.getElementById("ye333").style.display="none";

      }
      else if(demo.value == 2)
      {
          document.getElementById("ye3").style.display="none";
         document.getElementById("ye33").style.display="block";
         document.getElementById("ye333").style.display="none";
      }
      else if(demo.value == 3)
      {
         document.getElementById("ye333").style.display="block";
          document.getElementById("ye3").style.display="none";
           document.getElementById("ye33").style.display="none";
      }
      else{
        document.getElementById("ye3").style.display="none";
         document.getElementById("ye33").style.display="none";

 document.getElementById("ye333").style.display="none";
      }
  }
  function resetF()
  {
    document.getElementById("num1").value=0;
    document.getElementById("num2").value=0;
    document.getElementById("num3").value=0;
    document.getElementById("num4").value=0;
    document.getElementById("num5").value=0;
    document.getElementById("num6").value=0;
    document.getElementById("num7").value=0;
    document.getElementById("num8").value=0;
    document.getElementById("num9").value=0;
    document.getElementById("num10").value=0;
    document.getElementById("num11").value=0;
    document.getElementById("num12").value=0;
     document.getElementById("num13").value=0;
    document.getElementById("num14").value=0;
    document.getElementById("num15").value=0;
    document.getElementById("num16").value=0;
    document.getElementById("num17").value=0;
    document.getElementById("num18").value=0;
    document.getElementById("num19").value=0;
    document.getElementById("num20").value=0;
    document.getElementById("num21").value=0;
    document.getElementById("num22").value=0;
    document.getElementById("num23").value=0;
    document.getElementById("num24").value=0;
     document.getElementById("num25").value=0;
    document.getElementById("num26").value=0;
    document.getElementById("num27").value=0;
    document.getElementById("num28").value=0;
    document.getElementById("num29").value=0;
    document.getElementById("num30").value=0;
    document.getElementById("num31").value=0;
    document.getElementById("num32").value=0;
    document.getElementById("num33").value=0;
    document.getElementById("num34").value=0;
    document.getElementById("num35").value=0;
    document.getElementById("num36").value=0;
  }
  




function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}

function myFun() {
  var checkBox = document.getElementById("Check");
  var text = document.getElementById("text2");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}
function newFun() {
  var checkBox = document.getElementById("newCheck");
  var text = document.getElementById("text3");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}
function select() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function Fun() {
  var checkBox = document.getElementById("dCheck");
  var text = document.getElementById("text3");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}
function months_new() {
  document.getElementById("myDd").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.monbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-cont");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


