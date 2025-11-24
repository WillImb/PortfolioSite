import * as Display from "./displayClass.js";
let minesweeperDisplay = new Display.Display('<div><a href="https://people.rit.edu/wai5503/235/235_Project3/" class="showcase"><div class="divcase"><img src="Images/minesweeperCover.JPG" class="cover"><p class="bottomtext">Minesweeper<br>• Fall 2024<br><span class="software"><img src="Images/Icons/icons8-html.svg" style="width:25px; height:25px;"></span><span class="software"><img src="Images/Icons/icons8-css.svg" style="width:25px; height:25px;"></span><span class="software"><img src="Images/Icons/icons8-javascript.svg" style="width:25px; height:25px;"></span><br><details>Pass the time with Minesweeper on a variety of board Sizes</details></p></div></a></div>',
    ["frontPage", "game", "javascript", "solo", "web"]);
let circleGameDisplay = new Display.Display('<div><a href="https://youbestbelieve.itch.io/circle-game-2048" class="showcase"><div class="divcase"><img src="Images/Ballgame_Cover.png" class="cover" alt="hi"><p class="bottomtext">2048 Circles<br>• Spring 2024<br><span class="software"><img src="Images/Icons/unity.svg" style="width:20px; height:20px;"></span><span class="software"><img src="Images/Icons/Logo_C_sharp.svg" style="width:20px; height:20px;"></span><br><details>Drop Circles. Combine Numbers. Score!</details></p></div></a></div>',
    ["frontPage", "unity", "game", "solo", "web","twodee", "csharp"]);
let worldFlagDisplay = new Display.Display(`<div><a href="https://people.rit.edu/wai5503/235/235_Project2/" class="showcase"><div class="divcase"><img src="Images/FlagQuizCover.JPG" class="cover"><p class="bottomtext">World Flag Quiz<br>• Fall 2024<br><span class="software"><img src="Images/Icons/icons8-html.svg" style="width:25px; height:25px;"></span><span class="software"><img src="Images/Icons/icons8-css.svg" style="width:25px; height:25px;"></span><span class="software"><img src="Images/Icons/icons8-javascript.svg" style="width:25px; height:25px;"></span><br> <details>Test you're knowledge of World flags by generating short quizzes using RestCountries API</details></p></div></a></div>`,
    ["frontPage", "game", "javascript", "solo", "web"]);
let ecoSnapDisplay = new Display.Display(`<div><a href="EcoSnapDisplay.html" class="showcase"><div class="divcase"><img src="Images/EcoCover.png" class="cover"><p class="bottomtext">Eco Snap<br>• Spring 2025<br><span class="software"><img src="Images/Icons/unity.svg" style="width:20px; height:20px;"></span><span class="software"><img src="Images/Icons/Logo_C_sharp.svg" style="width:20px; height:20px;"></span><span class="software"><img src="Images/Icons/group-svgrepo-com.svg" style="width:25px; height:25px;"></span><br> <details>2025 G4C Student Challenge Entry - Explore a park and take pictures of the local wildlife</details></p></div></a></div>`,
    ["frontPage", "unity", "game", "team", "web", "threedee", "csharp"]);
let toytakedownDisplay = new Display.Display(`<div><a href="https://youbestbelieve.itch.io/robot-battle" class="showcase"><div class="divcase"><img src="Images/ToyTakeDown_Cover.png" class="cover"><p class="bottomtext">Toy Takedown<br>• Fall 2024<br><span class="software"><img src="Images/Icons/unity.svg" style="width:20px; height:20px;"></span><span class="software"><img src="Images/Icons/Logo_C_sharp.svg" style="width:20px; height:20px;"></span><span class="software"><img src="Images/Icons/group-svgrepo-com.svg" style="width:25px; height:25px;"></span><br><details>Battle bosses as an action figure toy. Worked in a group of four to make this in uner 2 days for a game jam</details></p></div></a></div>`,
    ["frontPage", "unity", "game", "team", "download","twodee", "csharp"]);
let asciiDisplay = new Display.Display(`<div><a href="VideoToAsciiDisplay.html" class="showcase"><div class="divcase"><img src="Images/Ascci_Cover.JPG" class="cover"><p class="bottomtext">Video to ASCII<br>• Summer 2025<br><span class="software"><img src="Images/Icons/python-svgrepo-com.svg" style="width:20px; height:20px;"></span><span class="software"><img src="Images/Icons/qt-svgrepo-com.svg" style="width:20px; height:20px;"></span><br><details>Turns the pixels of each frame of a video into ASCII text, then back into a new video!</details></p></div></a></div>`,
    ["frontPage", "python", "application", "solo", "download"]);



let activeTags = [];
let displays = [];
function init() {
    displays.push(asciiDisplay);
    displays.push(ecoSnapDisplay);
    displays.push(minesweeperDisplay);
    displays.push(worldFlagDisplay);
    displays.push(toytakedownDisplay);
    displays.push(circleGameDisplay);

    UpdateDisplay();
}

function UpdateDisplay() {

    let tempDisplays = displays.map((x) => x);
    let containsATag = true;
    for (let i = displays.length - 1; i >= 0; i--) {

        if (activeTags.length > 0) {
            for (let j = 0; j < activeTags.length; j++) {

                for (let k = 0; k < displays[i].tags.length; k++) {
                    if (displays[i].tags[k] == activeTags[j]) {
                        break;
                    }
                    else {
                        if (k == displays[i].tags.length - 1) {
                            containsATag = false;
                        }
                    }

                }

            }
            if (!containsATag) {
                tempDisplays.splice(i, 1);
            }
            containsATag = true;
        }
        else {
            for (let k = 0; k < displays[i].tags.length; k++) {
                if (displays[i].tags[k] == "frontPage") {

                    break;
                }
                else {
                    if (k == displays[i].tags.length - 1) {
                        containsATag = false;
                    }
                }

            }
            if (!containsATag) {
                tempDisplays.splice(i, 1);
            }
            containsATag = true;
        }

    }


    document.querySelector(".display").innerHTML = "";
    tempDisplays.forEach(element => {
        document.querySelector(".display").innerHTML += element.html;
    });

    console.log(tempDisplays);
}

const ApplyFilter = (id, tagName) => {

    if (document.querySelector(id).checked) {
        activeTags.push(tagName);
        UpdateDisplay();
    }
    else {
        activeTags.splice(activeTags.indexOf(tagName), 1);
        UpdateDisplay();

    }
}


//Checkboxes

document.querySelector("#javascript-cb").onclick = () => {
    ApplyFilter("#javascript-cb", "javascript");
}
document.querySelector("#unity-cb").onclick = () => {
    ApplyFilter("#unity-cb", "unity");
}
document.querySelector("#game-cb").onclick = () => {
    ApplyFilter("#game-cb", "game");
}
document.querySelector("#application-cb").onclick = () => {
    ApplyFilter("#application-cb", "application");
}
document.querySelector("#solo-cb").onclick = () => {
    ApplyFilter("#solo-cb", "solo");
}
document.querySelector("#team-cb").onclick = () => {
    ApplyFilter("#team-cb", "team");
}
document.querySelector("#web-cb").onclick = () => {
    ApplyFilter("#web-cb", "web");
}
document.querySelector("#download-cb").onclick = () => {
    ApplyFilter("#download-cb", "download");
}
document.querySelector("#python-cb").onclick = () => {
    ApplyFilter("#python-cb", "python");
}
/*
document.querySelector("#cpp-cb").onclick = () => {
    ApplyFilter("#cpp-cb", "cpp");
}
    */
document.querySelector("#csharp-cb").onclick = () => {
    ApplyFilter("#csharp-cb", "csharp");
}
document.querySelector("#twodee-cb").onclick = () => {
    ApplyFilter("#twodee-cb", "twodee");
}
document.querySelector("#threedee-cb").onclick = () => {
    ApplyFilter("#threedee-cb", "threedee");
}



init();