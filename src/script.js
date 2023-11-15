const userbtn = document.getElementById("UserBtn");
const toolbtn = document.getElementById("ToolBtn");

function toolActMain(){
    const mainuser = document.getElementsByClassName("mainUser");
    const maintool = document.getElementsByClassName("mainTool");

    maintool.style.display = "block";
    mainuser.style.display = "none";
}
maintool.addEventeListener('click', toolActMain);