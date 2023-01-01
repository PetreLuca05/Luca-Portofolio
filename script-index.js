
const secondColorConst = "--second-color";
const possibleColors = ["red", "orange", "orangered", "limegreen", "cadetblue"];
const like_btn_hover_color = "--like-btn-hover-color";
const possibleBgs = ["projects/fnaf/d8.png", "projects/rac/rac1.jpg", "projects/scifi-kfc/Demos/D8.png", "projects/gum-ball-guy/d3.PNG", "projects/rmg/1.PNG"]

var btn = document.getElementById('btn');
let root = document.querySelector(':root');
let rootVars = getComputedStyle(root);

let copyText = document.querySelector(".personal-info-copy-mail");

const header = document.querySelector("header");
const pg1bg = document.getElementById("pg1");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 10);
});

PickRandoTheme();

function PickRandoTheme(){
    var index;
    
    index = getRandomNumber(0, possibleColors.length - 1);
    //index = 3;
    document.documentElement.style.setProperty(secondColorConst, possibleColors[index]);

    pg1bg.style.backgroundImage = "url('" + possibleBgs[index] + "')";


    if(index == 0){
        document.getElementById("pg1").style.backgroundPositionY = "-950px";
        //document.getElementById("pg1").style.backgroundPositionX = "350px";
    }
}

function PickFixedTheme(nr){
    var index;
    
    index = nr;
    document.documentElement.style.setProperty(secondColorConst, possibleColors[index]);

    document.getElementById("pg1").style.backgroundImage = "url('" + possibleBgs[index] + "')";
    if(index == 0){
        document.getElementById("pg1").style.backgroundPositionY = "-950px";
        //document.getElementById("pg1").style.backgroundPositionX = "350px";
    }
}


function getRandomNumber(min, max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

function HeartPressed(btnname){
    if(document.getElementById(btnname).classList.contains("far")){
        document.getElementById(btnname).classList.remove("far");
        document.getElementById(btnname).classList.add("fas");

        document.documentElement.style.setProperty(like_btn_hover_color, rootVars.getPropertyValue('--like-btn-color'));

        document.getElementById(btnname).style.color = rootVars.getPropertyValue('--like-btn-color');
    }
    else if(document.getElementById(btnname).classList.contains("fas")){
        document.getElementById(btnname).classList.remove("fas");
        document.getElementById(btnname).classList.add("far");

        document.documentElement.style.setProperty(like_btn_hover_color, "white");

        document.getElementById(btnname).style.color = "white";
    }
}

copyText.querySelector("input").addEventListener("click", function(){
    let input = copyText.querySelector("input.text");
    input.select();
    document.execCommand("copy");
});


function CopyMailToClipboard(){
    document.getElementById("mail-textt").querySelector("text");
    document.execCommand("copy");
    //alert("You just copied my E-Mail address.Contact me anytime!")
    callAlert("You just copied my E-Mail address.Contact me anytime!");
}

function callAlert(msg){
    alert(msg);
}

window.alert  = function(message, timeout = null){
    const alert = document.createElement('div');
    alert.classList.add('alert');
    alert.setAttribute('style', 'position:fixed; top:100px; left 50%; padding 20px; border-radius:20px; box-shadow: 0 10px 5px 0 red');
    alert.innerText = message;
    document.body.appendChild(alert);
}

function LearnAboutMe(){
    document.getElementById('pg2').scrollIntoView({behavior:'smooth', block:'start'});
}

function MySkills(){
    document.getElementById('pg3').scrollIntoView({behavior:'smooth', block:"start"});
}

function GoToProjects(){
    window.location = "projects-rm.html";
}

function ContactMe(){
    document.getElementById('pg5').scrollIntoView({behavior:'smooth', block:"start"});
}

function GoUp(){
    document.getElementById('pg1').scrollIntoView({behavior:'smooth', block:"start"});
}

function PickAProject_Rac()
{

    PickFixedTheme(1);

    document.getElementById("prj-title-1").innerText = "ratchet";
    document.getElementById("prj-title-2").innerText = "remake";

    document.getElementById("prj-desc").innerText = "Racthet and Clank Remake in Unreal Engine 5 that is a combination of the first 2 games complete with Weapon system, skins, guns ,gadgets, etc.";

    document.getElementById("used-engine").innerText = "Unreal Engine 5";
    document.getElementById("complete-time").innerText = "28 Days";

    document.getElementById("ss-container").style.gridTemplateColumns = "repeat(4, 1000px)"

    document.getElementById("ss-1").style.backgroundImage = "url(projects/rac/rac1.jpg)";
    document.getElementById("ss-2").style.backgroundImage = "url(projects/rac/rac2.jpg)";
    document.getElementById("ss-3").style.backgroundImage = "url(projects/rac/rac3.jpg)";
}

function PickAProject_Endo()
{
    PickFixedTheme(0);

    document.getElementById("prj-title-1").innerText = "endo";
    document.getElementById("prj-title-2").innerText = "skeleton";

    document.getElementById("prj-desc").innerText = "A reinterpretation of the Five Nights At Freddy's Endo-Skeleton with a small touch of Sci-Fi.";

    document.getElementById("used-engine").innerText = "Blender";
    document.getElementById("complete-time").innerText = "8 Days";

    document.getElementById("ss-container").style.gridTemplateColumns = "400px 800px 800px 1000px"

    document.getElementById("ss-1").style.backgroundImage = "url(projects/fnaf/d8.png)";
    document.getElementById("ss-2").style.backgroundImage = "url(projects/fnaf/d11.png)";
    document.getElementById("ss-3").style.backgroundImage = "url(projects/fnaf/d12.png)";
}

function PickAProject_RC()
{
    PickFixedTheme(4);

    document.getElementById("prj-title-1").innerText = "Random";
    document.getElementById("prj-title-2").innerText = "Creation";

    document.getElementById("prj-desc").innerText = "Procedually generated map.";

    document.getElementById("used-engine").innerText = "Unity";
    document.getElementById("complete-time").innerText = "14 Days";

    document.getElementById("ss-container").style.gridTemplateColumns = "repeat(4, 1000px)"

    document.getElementById("ss-1").style.backgroundImage = "url(projects/rmg/2.PNG)";
    document.getElementById("ss-2").style.backgroundImage = "url(projects/rmg/5.PNG)";
    document.getElementById("ss-3").style.backgroundImage = "url(projects/rmg/3.PNG)";
}

function PickAProject_GMG()
{
    PickFixedTheme(3);

    document.getElementById("prj-title-1").innerText = "GumBall";
    document.getElementById("prj-title-2").innerText = "Guy";

    document.getElementById("prj-desc").innerText = "Grand Theft Auto inspired project made in Unreal Engine 5 with realistic vehicle physics and logic.";

    document.getElementById("used-engine").innerText = "Unity";
    document.getElementById("complete-time").innerText = "55 Days";

    document.getElementById("ss-container").style.gridTemplateColumns = "repeat(4, 1000px)"

    document.getElementById("ss-1").style.backgroundImage = "url(projects/gum-ball-guy/d3.PNG)";
    document.getElementById("ss-2").style.backgroundImage = "url(projects/gum-ball-guy/d7.PNG)";
    document.getElementById("ss-3").style.backgroundImage = "url(projects/gum-ball-guy/d9.PNG)";
}
