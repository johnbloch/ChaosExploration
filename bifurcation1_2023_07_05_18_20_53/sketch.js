let x1 = 0.7
let start = 10000
let end = 10100

// need exact values, can't use loop
let rValues = [0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8]
let graph = []
for(let i = 0; i < 19; i++){
  graph.push([]);
}

function recursion(start, end, r){
  let sequence = [x1]
  for(let i = 0; i < end; i++){
    sequence.push(r*sequence[i]*(1-sequence[i]))
  }
  sequence.splice(0,start-1)
  return sequence
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white") 
  for(let i = 0; i < rValues.length; i++){
    console.log(rValues[i])
    let a = recursion(start,end-1,rValues[i]);
    console.log(a)
    for(let j = 0; j < a.length; j++){
      graph[i].push(a[j]);
    }
  }
  graphArray(graph)
  noStroke()
  fill("black")
  textAlign(CENTER)
  let t = 0.2
  for(let i = 0; i < 19; i++){
   
    let x = map(i, 0, graph.length-1, 50, width-50)

    text(round(t,1),x,height-30)
    t+=0.2
  }
  
  textSize(20)
  text("R", width/2, height-10)
  
  textSize(30)
  text("x_(n+1) = R * x_n * (1 - x_n)", width/2, 25)
  
  textSize(20)
  text("x_1 = 0.7", width/2, 50)
  angleMode(DEGREES)
  translate(25,height/2)
  rotate(-90)
  text("x_10000 to x_10100",0,0)
  

}

function graphArray(arr){
  stroke("black")
  strokeWeight(5)
  let minY=Infinity
  let maxY=-Infinity
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++) {
      if(arr[i][j]<minY){
        minY=arr[i][j]
      }
      if(arr[i][j]>maxY){
        maxY=arr[i][j]
      }
    }
  }
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      let value = arr[i][j]
      let x = map(i, 0, arr.length-1, 50, width-50)
      let y = map(value, minY, maxY, height-50, 50);
      point(x, y)
    }
  }
}
