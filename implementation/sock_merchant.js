function sockMerchant(n,arr){
  var pairCount = 0;
  var numObj = {};
  for (let i=0;i<arr.length;i++){
    if (!numObj[arr[i]]){
      numObj[arr[i]] = 1;
    }
    else {
      numObj[arr[i]] = numObj[arr[i]]+1;
    }
  }

  for (let key in numObj){
    pairCount += Math.floor(numObj[key]/2);
  }
  console.log(pairCount);
}

sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]);
//3

//https://www.hackerrank.com/challenges/sock-merchant/problem
