function main(a,b) {
    magazine = a.split(' ');
    note = b.split(' ');
    var match = 0;
    for (let i=0;i<note.length;i++){
        if (magazine.indexOf(note[i]) !== -1){
            match++;
        }
     }
     if (match === note.length){
       console.log("Yes");
     }
}

main("give me one grand today night",
"give one grand today");
