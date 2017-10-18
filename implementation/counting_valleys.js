function countingValleys(n,arr){
  var valleyCount = 0;
  level = 0;
  levelArr = [];
  levelArr.push(level);
  for (var i=0;i<arr.length;i++){
    if(arr[i]==='U'){
      level = level+1;
      levelArr.push(level);
    }
    if(arr[i]==='D'){
      level = level-1;
      levelArr.push(level);
    }
  }
  console.log(levelArr);
  for (var i=0;i<levelArr.length;i++){
    if (levelArr[i]===0){
      if(levelArr[i+1] === 1 && levelArr[i+2] === 0){
        valleyCount++;
      }
      if(levelArr[i+1] === -1 && levelArr[i+2] === 0){
        valleyCount++;
      }
    }
  }
  console.log(valleyCount);
}

countingValleys(8, 'UDDDUDUU');
//1
//https://www.hackerrank.com/challenges/counting-valleys/problem
