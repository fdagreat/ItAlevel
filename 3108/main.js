

var films = ["Thor1", "Thor2", "Thor3" ,"Carol", "moonlight","aa", "dsfsa", "g", "sdfas","dsafa"]

console.log(films);

for (i=0;i<=9;i++)

{
    console.log("checkpoint");
lineIndex = i

console.log(`We are inside the loop for the ${lineIndex} time and on line ${lineIndex}  `);
console.log(`The movie we are printing is :${films[lineIndex]}`);
    document.getElementById(i).innerHTML = films[i];


}