import * as Display from "./displayClass.js";
let minesweeperDisplay = new Display.Display('<div><a href="https://people.rit.edu/wai5503/235/235_Project3/" class="showcase"><div class="divcase"><img src="Images/minesweeperCover.JPG" class="cover"><p class="bottomtext">Minesweeper<br>• Fall 2024<br><span class="software"><img src="Images/Icons/icons8-html.svg" style="width:25px; height:25px;"></span><span class="software"><img src="Images/Icons/icons8-css.svg" style="width:25px; height:25px;"></span><span class="software"><img src="Images/Icons/icons8-javascript.svg" style="width:25px; height:25px;"></span><br><details>Pass the time with Minesweeper on a variety of board Sizes</details></p></div></a></div>',
    ["frontPage", "web", "game", "javascript"]);
let circleGameDisplay = new Display.Display('<div><a href="https://youbestbelieve.itch.io/circle-game-2048" class="showcase"><div class="divcase"><img src="Images/Ballgame_Cover.png" class="cover" alt="hi"><p class="bottomtext">2048 Circles<br>• Spring 2024<br><span class="software"><img src="Images/Icons/unity.svg" style="width:20px; height:20px;"></span><span class="software"><img src="Images/Icons/Logo_C_sharp.svg" style="width:20px; height:20px;"></span><br><details>Drop Circles. Combine Numbers. Score!</details></p></div></a></div>',
    ["frontPage", "unity", "game"]);
let worldFlagDisplay = new Display.Display(`<div><a href="https://people.rit.edu/wai5503/235/235_Project2/" class="showcase"><div class="divcase"><img src="Images/FlagQuizCover.JPG" class="cover"><p class="bottomtext">World Flag Quiz<br>• Fall 2024<br><span class="software"><img src="Images/Icons/icons8-html.svg" style="width:25px; height:25px;"></span><span class="software"><img src="Images/Icons/icons8-css.svg" style="width:25px; height:25px;"></span><span class="software"><img src="Images/Icons/icons8-javascript.svg" style="width:25px; height:25px;"></span><br> <details>Test you're knowledge of World flags by generating short quizzes using RestCountries API</details></p></div></a></div>`,
    ["frontPage", "web", "game", "javascript"]);
let ecoSnapDisplay = new Display.Display(`<div><a href="EcoSnapDisplay.html" class="showcase"><div class="divcase"><img src="Images/EcoCover.png" class="cover"><p class="bottomtext">Eco Snap<br>• Spring 2025<br><span class="software"><img src="Images/Icons/unity.svg" style="width:20px; height:20px;"></span><span class="software"><img src="Images/Icons/Logo_C_sharp.svg" style="width:20px; height:20px;"></span><span class="software"><img src="Images/Icons/group-svgrepo-com.svg" style="width:25px; height:25px;"></span><br> <details>2025 G4C Student Challenge Entry - Explore a park and take pictures of the local wildlife</details></p></div></a></div>`,
    ["frontPage", "unity", "game"]);
let toytakedownDisplay = new Display.Display(`<div><a href="https://youbestbelieve.itch.io/robot-battle" class="showcase"><div class="divcase"><img src="Images/ToyTakeDown_Cover.png" class="cover"><p class="bottomtext">Toy Takedown<br>• Fall 2024<br><span class="software"><img src="Images/Icons/unity.svg" style="width:20px; height:20px;"></span><span class="software"><img src="Images/Icons/Logo_C_sharp.svg" style="width:20px; height:20px;"></span><span class="software"><img src="Images/Icons/group-svgrepo-com.svg" style="width:25px; height:25px;"></span><br><details>Battle bosses as an action figure toy. Worked in a group of four to make this in uner 2 days for a game jam</details></p></div></a></div>`,
    ["frontPage", "unity", "game"]);
let asciiDisplay = new Display.Display(`<div><a href="VideoToAsciiDisplay.html" class="showcase"><div class="divcase"><img src="Images/Ascci_Cover.JPG" class="cover"><p class="bottomtext">Video to ASCII<br>• Summer 2025<br><span class="software"><img src="Images/Icons/python-svgrepo-com.svg" style="width:20px; height:20px;"></span><span class="software"><img src="Images/Icons/qt-svgrepo-com.svg" style="width:20px; height:20px;"></span><br><details>Turns the pixels of each frame of a video into ASCII text, then back into a new video!</details></p></div></a></div>`,
    ["frontPage", "python", "program"]);



let activeTags = ["frontPage"];
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
    let containsATag = false;
    for (let i = displays.length - 1; i >= 0; i--) {

        for (let j = 0; j < activeTags.length; j++) {

            for (let k = 0; k < displays[i].tags.length; k++) {
                if (displays[i].tags[k] == activeTags[j]) {
                    containsATag = true;
                    break;
                }

            }

        }
        if (!containsATag) {
            tempDisplays.splice(i, 1);
        }
        containsATag = false;

    }

    if (tempDisplays.length > 0) {
        tempDisplays.forEach(element => {
            document.querySelector(".display").innerHTML += element.html;
        });
    }
}

//Checkboxes
let cbClicked = (name = "") => {
    if (name != "") {
     
        if (document.querySelector(`#${name}-cb`).checked) {
            activeTags.push(name);
        }
        else {
            //activeTags.splice(name, 1);
        }
    }
    console.log(activeTags);
}

 
for (let c of document.querySelectorAll(".cb")) {
    
    c.addEventListener("click",cbClicked(c.value));
}


init();