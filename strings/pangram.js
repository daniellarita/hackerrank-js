function pangram(str){
  var result = "not pangram";
  alph = {'a':0,'b':0,'c':0,'d':0,'e':0,'f':0,'g':0,'h':0,'i':0,'j':0,'k':0,'l':0,'m':0,'n':0,'o':0,'p':0,'q':0,'r':0,'s':0,'t':0,'u':0,'v':0,'w':0,'x':0,'y':0,'z':0};
  var newStr = str.toLowerCase().split(' ').join('');
  for (let i=0;i<newStr.length;i++){
    for (var key in alph){
      if (newStr[i] === key){
        alph[key] = alph[key]+1;
      }
    }
  }

  for (var key2 in alph){
    if (alph[key2]>0){
      result = "pangram";
    }
  }
  console.log(result);
}

pangram("We promptly judged antique ivory buckles for the next prize")

//https://www.hackerrank.com/challenges/pangrams/problem
