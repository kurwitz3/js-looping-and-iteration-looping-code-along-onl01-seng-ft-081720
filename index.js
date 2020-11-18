const array = []
function writeCards(list){
    
for (let i = 0; i < list.length; i++) {
 array.push(`Thank you, ${list[i]}, for the wonderful surprise gift!`);
}
return array
}

function countDown(number){
    let i = 0;
    while (i <= number) {
        console.log(number);
       number -= 1; 
        
    }
}


