let overAllTexture
class Radiation{
	constructor(args){
		let def ={
			p: createVector(0,0),
			color: random(colors),
			randomId: int(random(10000)),
			freq: int(random(300,1000)),
			lastWaveEmitTs: 0
		}
	}
}

let canvas
let mainCanvas
function setup() {
	pixelDensity(2)
	canvas = createCanvas(windowWidth, windowHeight);
    // mainCanvas = createCanvas(width, height);
	// mainCanvas.background('canvas');
	
	overAllTexture=createGraphics(width,height)
	overAllTexture.loadPixels()
	for(var i=0;i<width+50;i++){
		for(var o=0;o<height+50;o++){
			overAllTexture.set(i,o,color(200,noise(i/10,i*o/300)*random([0,0,20	,50])))
		}
	}
	overAllTexture.updatePixels()
}

function draw() {
	fill(240)
	rect(0,0,width,height)
    push()
		blendMode(MULTIPLY)
		image(overAllTexture,0,0,width,height)
	pop()
	
	push()
		blendMode(MULTIPLY)
		image(overAllTexture,0,0,width,height)

	pop()
}
// function keyPressed(){
// 	if (key==' '){
// 		if (isLooping()){
// 			noLoop()
// 		}else{
// 			loop()
// 		}
// 	}
// 	if (key=="s"){
// 		save()
// 	}
// }

// let myCanvas
// function setup() {
//     myCanvas = createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//     // background(255)
//     // let lastX=0,lastY=0;
//     image(Canvas,0,2)
//     beginShape()

//     strokeWeight(1)
//     noFill()
//     translate(0,-200)
//     let mouseRatio = map(mouseX,0,width,0,1)
//     // let mouseRatio = noise(frameCount/20)
//     for(let x=0; x<width; x+=5) {
//         let y = 
//             mouseRatio*sin(x/80+frameCount/50)*50+
//             mouseRatio*sin(x/20+frameCount/50)*20
//         +mouseRatio*noise(x/100,frameCount/50)
//         *noise(x/500,frameCount/50)
//         *(map (sin(x/
//                   (10+ noise(x/2000,frameCount/500)*40)
//                   ),-1,1,0,1) )
//         *height/5+height/3
//         +noise(x/100,frameCount/50)*100;
//         // fill(0)
//         curveVertex(x,y)
//         if (y>height*0.44) {
//             push()
//                 noStroke()
//                 fill(76 +sin(x)*50, 255+ sin(x*1.2)*50, 247+ sin(x*1.2)*30)
//                 ellipse(x+ random(-1,1),y+ random(-1,1),5)
//             pop()
//         }
//     }
//     stroke(255,map(sin(frameCount/(20+(1-mouseRatio)*500)),-1,1,50,255))
//     endShape()
// }

// function draw() {
//     image(bgTexture, 0, 0)
//     // 繪製其它畫面元素
// }
// function draw() {
//     // image(Canvas,0,2)
//     beginShape()

//     strokeWeight(1)
//     noFill()
//     translate(0,-200)
//     let mouseRatio = map(mouseX,0,width,0,1)
//     // let mouseRatio = noise(frameCount/20)
//     for(let x=0; x<width; x+=5) {
//         let y = 
//             mouseRatio*sin(x/80+frameCount/50)*50+
//             mouseRatio*sin(x/20+frameCount/50)*20
//         +mouseRatio*noise(x/100,frameCount/50)
//         *noise(x/500,frameCount/50)
//         *(map (sin(x/
//                   (10+ noise(x/2000,frameCount/500)*40)
//                   ),-1,1,0,1) )
//         *height/5+height/3
//         +noise(x/100,frameCount/50)*100;
//         // fill(0)
//         curveVertex(x,y)
//         if (y>height*0.44) {
//             push()
//                 noStroke()
//                 fill(76 +sin(x)*50, 255+ sin(x*1.2)*50, 247+ sin(x*1.2)*30)
//                 ellipse(x+ random(-1,1),y+ random(-1,1),5)
//             pop()
//         }
//     }
//     stroke(255,map(sin(frameCount/(20+(1-mouseRatio)*500)),-1,1,50,255))
//     endShape()

// }
