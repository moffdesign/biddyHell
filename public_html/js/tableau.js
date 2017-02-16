/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function initCanvas() {
    //initialisation des points de départ ! 
    x1 = xDeb1;
    y1 = yDeb1;

    x2 = xDeb2;
    y2 = yDeb2;

    //debugger;
    //réinitialiser les couleurs
    ndxColor = 40;
    myColor = "hsl(" + ndxColor + ",100%,74%)";

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext('2d');

    //réinitialiser le canvas
    //maxX = canvas.width;
    //maxY = canvas.height;
    maxX = parseInt(canvas.getAttribute("width"));  //||500;
    maxY = parseInt(canvas.getAttribute("height"));  //||500;

    //on efface le tableau en mettant une couleur uniforme
    ctx.fillStyle = "hsl(0,0%,100%)";
    ctx.fillRect(0, 0, maxX, maxY);
}

