const ubuscabtn = document.getElementById("UBuscaBtn");
const ucadbtn = document.getElementById("uCadBtn");

function userCadAtc(){
    const ubuscaparameter = document.getElementById("UserBuscaParamater");
    const ucadparameter = document.getElementById("UserCadParamater");
    ubuscabtn.style.backgroundColor = "#d0ccd3";
    ubuscabtn.style.color = "#5b5b5b";
    ubuscabtn.style.zIndex = 0;
    ucadbtn.style.backgroundColor = "#fff";
    ucadbtn.style.color = "#000";
    ubuscaparameter.style.display = "none";
    ucadparameter.style.display = "block";

}

ucadbtn.addEventListener('click', userCadAtc);