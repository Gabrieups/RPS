const userbtn = document.getElementById("UserBtn");
const toolbtn = document.getElementById("ToolBtn");
const uparameter = document.getElementById("mainUser");
const tparameter = document.getElementById("mainTool");

function userAct(){
    const tguide = document.getElementById("guideT");
    const uguide = document.getElementById("guideU");

    tparameter.style.display = "none";
    uparameter.style.display = "block";
    tguide.style.display = "none";
    uguide.style.display = "block";
}

function toolAct(){
    const tguide = document.getElementById("guideT");
    const uguide = document.getElementById("guideU");

    tparameter.style.display = "block";
    uparameter.style.display = "none";
    tguide.style.display = "block";
    uguide.style.display = "none";

}
userbtn.addEventListener('click', userAct);
toolbtn.addEventListener('click', toolAct);


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

function userBuscaAtc(){
    const ubuscaparameter = document.getElementById("UserBuscaParamater");
    const ucadparameter = document.getElementById("UserCadParamater");
    ubuscabtn.style.backgroundColor = "#fff";
    ubuscabtn.style.color = "#000";
    ubuscabtn.style.zIndex = 1;
    ucadbtn.style.backgroundColor = "#d0ccd3";
    ucadbtn.style.color = "#5b5b5b";
    ubuscaparameter.style.display = "block";
    ucadparameter.style.display = "none";

}

ucadbtn.addEventListener('click', userCadAtc);
ubuscabtn.addEventListener('click', userBuscaAtc);