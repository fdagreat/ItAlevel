


var mark

mark = prompt("Write your grade")

mark = +mark
console.log(mark);

if (mark>=0) {
result="F"
}

else if (mark<=80) {
    result="B"
    }

    else if (mark<=100) {
        result="A"   
        }

        else if (mark>100) {
            document.write( " please write your grade again " )      
            }
        
             else  if (mark = NaN) {
                 console.log("nop");
                document.write( " please write your grade" )
                mark = prompt("Write your grade")
                          }

              else {

              document.write( " please write your mark as a number " + "<br>" )
             mark = prompt("Write your grade")                          
            }
            
  document.write( mark + " is your mark " )
        document.write( "and it is graded as : " + result )

            