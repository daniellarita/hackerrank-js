function anagram(a,b){
  for (var i=0;i<a.length;i++){
    for (var j=0;j<b.length;j++){
      if(a[i] === b[j]){
        a = a.slice(0,i)+a.slice(i+1,a.length)
        b = b.slice(0,j)+b.slice(j+1,b.length)
      }
    }
  }
  console.log(a+b)
  return (a+b).length;
}
anagram('ad','dca')
