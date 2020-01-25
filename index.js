// Code your solutions in this file

let names=[ 'Lisa', 'Kaitlin', 'Jan' ];
let eventName='surprise';

function writeCards(names, eventName){

    let thankYou = [];
    for(let i=0; i< names.length; i++){
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYou;
}


function countDown(startingNumber){

    let i=startingNumber;
    while(i>0){

        console.log(i);
        i --;
    }
    console.log(i); //must include this to display 0, otherwise stops at 1
}