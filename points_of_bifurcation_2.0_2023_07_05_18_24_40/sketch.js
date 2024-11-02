var rValues = []
let x1 = 0.7 // start value
let pointsOfBifurcation = []
// generates sequence x_(n+1) = r * sin(pi * x_n) for specified range and r value
function recursion(start, end, r){
  let sequence = [x1]
  for(let i = 0; i < end; i++){
    sequence.push(r*sin(PI*sequence[i]))
  }
  sequence.splice(0,start-1)
  return sequence
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white") 
  
  // prompt  for range, increment value, and where in the sequence to take points from
  let minR = parseFloat(prompt("minR (Minimum R value):"))
  let maxR = parseFloat(prompt("maxR (Maximum R value):"))
  let inc = parseFloat(prompt("inc (How much to increment by):"))
  let start = parseInt(prompt("start (how far into the sequence ):"))
  let end = start + 100
  
  // fill array rValues with every value of r to use
  for(let r = minR; r <= maxR; r+=inc){
    rValues.push(round(r,-1*floor(log(inc))))
  }
  console.log(rValues)
  
  // create 2D array, graph, where each sequence for each value of r will be stored 
  let graph = []
  for(let i = 0; i < rValues.length; i++){
    graph.push([]);
  }
  
  // fill 2D array with a sequence for each value of r
  for(let i = 0; i < rValues.length; i++){
    let a = recursion(start,end,rValues[i]); // invoke recursion function to create sequence
    for(let j = 0; j < a.length; j++){
      graph[i].push(a[j]); // populate the corresponding index of graph with the sequence
    }
  }
  console.log(Math.min.apply(null,graph[14]) - Math.max.apply(null,graph[14]))
  
  graphArray(graph) // display the points on the page
  
  noStroke()
  fill("black")
  textAlign(CENTER)
  
  // label the horizontal axis with r values, ensuring the text won't overlap
  for(let i = 0; i < rValues.length; i++){
    
    if((width-100)/rValues.length >= 60){
    
      let x = map(i, 0, graph.length-1, 50, width-50)
      text(rValues[i],x,height-30)
      
    }else{
       let skip = ceil(60/((width-100)/rValues.length))
    
       if(i%skip===0){
      
         let x = map(i, 0, graph.length-1, 50, width-50)
         text(rValues[i],x,height-30)
      
       }
    }
  }
  
  // title the graph with the values for each parameter
  textSize(20)
  text("minR = "+minR+", maxR = "+maxR+", inc = "+inc+", x_"+start+" to x_"+end, width/2, 25)
  text("R", width/2, height-10)

  console.log(pointsOfBifurcation)

}

// takes a 2D array, arr, and places every point on the page, taking up the entire page using the map() function
function graphArray(arr){
  stroke("black")
  strokeWeight(3)
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
    if(i>0){
      if(getBounceValue(arr[i])!=getBounceValue(arr[i-1])){
        pointsOfBifurcation.push(rValues[i])
        stroke("green")
        let X = map(i,0,arr.length-1,50,width-50)
        //line(X, 0, X, height )
      }
    }
    for(let j = 0; j < arr[i].length; j++){
      let value = arr[i][j]
      let x = map(i, 0, arr.length-1, 50, width-50)
      let y = map(value, minY, maxY, height-50, 50);
      stroke("black")
      point(x, y)
    }
  }
}

function getBounceValue(arr){
  let sequence=[]
  for(let i = 0; i < arr.length; i++){
    sequence.push(round(arr[i],4))
  }
  let points = [...new Set(sequence)]
  return points.length
}
