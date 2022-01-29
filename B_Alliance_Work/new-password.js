const form = document.querySelector("form");
pField = form.querySelector(".password"),
pField_2 = form.querySelector(".confirm_password"),
pInput = pField.querySelector("input");
pInput_2 = pField_2.querySelector("input");
form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
  setTimeout(()=>{ //remove shake class after 500ms
    pField.classList.remove("shake");
  }, 500);
  pInput.onkeyup = ()=>{checkPass();}


  (pInput.value !== pInput_2.value) ? pField_2.classList.add("shake", "error") : check();
  setTimeout(()=>{ //remove shake class after 500ms
    pField_2.classList.remove("shake");
  }, 500);

  pInput_2.onkeyup = ()=>{check();} //calling checkPassword function on pass input keyup

  function checkPass(){ //checkPass function
    if(pInput.value == ""){ //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  function check(){ //checkPass function
    if(pInput.value !== pInput_2.value){ //if pass is empty then add error and remove valid class
      pField_2.classList.add("error");
      pField_2.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pField_2.classList.remove("error");
      pField_2.classList.add("valid");
    }
  }


  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!pField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
}




