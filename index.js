// Code your solutions in this file

function writeCards(names, event_name){
    let answer = []
    for (let i = 0; i < names.length; i++){
        answer.push( `Thank you, ${names[i]}, for the wonderful ${event_name} gift!`)
    }
    return answer
}

function countDown(number){ 
    while ( number > 0 ){ 
        console.log(number); 
        number -= 1; 
    }
    console.log(number)
}