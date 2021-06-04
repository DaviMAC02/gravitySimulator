var planet;
var starsX = [];
var starsY = [];
var planet1XposTrack = [];
var planet1YposTrack = [];
var planet2XposTrack = [];
var planet2YposTrack = [];

function setup() {
    createCanvas(2000, 800);
    background(0);

    for (var i = 0; i < 1000; i++) {
        starsX.push(random(0, width));
    }


    for (var i = 0; i < 1000; i++) {
        starsY.push(random(0, height));
    }

    planet1 = new Body(6.34 * Math.pow(10, 21), 300, 210, 70, 70);
    planet2 = new Body(9.572 * Math.pow(10, 21), 1200, 490, 70, 70);


}

function draw() {

    planet1XposTrack.push(planet1.xPos);
    planet2XposTrack.push(planet2.xPos);

    planet1YposTrack.push(planet1.yPos);
    planet2YposTrack.push(planet2.yPos);

    background(0);
    for (var i = 0; i < 1000; i++) {
        fill(255);
        ellipse(starsX[i], starsY[i], 2, 2)
    }

    for(var i = 0; i < planet1XposTrack.length;i++){

        strokeWeight(0);
        
        fill(0,255,0);
        ellipse(planet1XposTrack[i], planet1YposTrack[i], 5,5);

        fill(0,255,0);
        ellipse(planet2XposTrack[i], planet2YposTrack[i], 5,5);
    }


    fill(0, 0, 150);
    ellipse(planet1.xPos, planet1.yPos, planet1.r1, planet1.r2);

    fill(195, 0, 0);
    ellipse(planet2.xPos, planet2.yPos, planet2.r1, planet2.r2);

    if(dist(planet1.xPos, planet1.yPos, planet2.xPos, planet2.yPos) < planet2.r1){
        noLoop();
    }

    if (planet2.xPos > planet1.xPos) {
        planet1.xPos = 2.2 + planet1.xPos + velocityX(1);
        planet2.xPos = -0.5 + planet2.xPos - velocityX(2);
    } else {
        planet1.xPos = 2.2 + planet1.xPos - velocityX(1);
        planet2.xPos = -0.5 + planet2.xPos + velocityX(2);
    }

    if (planet2.yPos > planet1.yPos) {
        planet2.yPos = planet2.yPos - velocityY(2);
        planet1.yPos = planet1.yPos + velocityY(1);
    } else {
        planet2.yPos = planet2.yPos + velocityY(2);
        planet1.yPos = planet1.yPos - velocityY(1);
    }


}



function velocityX(nPlanet) {
    var angulo = 0;
    if (nPlanet == 1) {
        angulo = acos((Math.abs(planet1.xPos - planet2.xPos)) / dist(planet1.xPos, planet1.yPos, planet2.xPos, planet2.yPos));
        return cos(angulo) * ((6.67408 * Math.pow(10, -8) * planet2.mass) / (dist(planet1.xPos, planet1.yPos, planet2.xPos, planet2.yPos) * dist(planet1.xPos, planet1.yPos, planet2.xPos, planet2.yPos) * 100000 * 100000));

    } else {
        angulo = acos((Math.abs(planet1.xPos - planet2.xPos)) / dist(planet1.xPos, planet1.yPos, planet2.xPos, planet2.yPos));
        return cos(angulo) * ((6.67408 * Math.pow(10, -8) * planet1.mass) / (dist(planet1.xPos, planet1.yPos, planet2.xPos, planet2.yPos) * dist(planet1.xPos, planet1.yPos, planet2.xPos, planet2.yPos) * 100000 * 100000));
    }
}


function velocityY(nPlanet) {
    var angulo = 0;
    if (nPlanet == 1) {
        angulo = acos((Math.abs(planet1.xPos - planet2.xPos)) / dist(planet1.xPos, planet1.yPos, planet2.xPos, planet2.yPos));
        return sin(angulo) * ((6.67408 * Math.pow(10, -8) * planet2.mass) / (dist(planet1.xPos, planet1.yPos, planet2.xPos, planet2.yPos) * dist(planet1.xPos, planet1.yPos, planet2.xPos, planet2.yPos) * 100000 * 100000));

    } else {
        angulo = acos((Math.abs(planet1.xPos - planet2.xPos)) / dist(planet1.xPos, planet1.yPos, planet2.xPos, planet2.yPos));
        return sin(angulo) * ((6.67408 * Math.pow(10, -8) * planet1.mass) / (dist(planet1.xPos, planet1.yPos, planet2.xPos, planet2.yPos) * dist(planet1.xPos, planet1.yPos, planet2.xPos, planet2.yPos) * 100000 * 100000));
    }
}