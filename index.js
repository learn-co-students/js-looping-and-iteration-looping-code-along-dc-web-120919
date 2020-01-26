// Code your solutions in this file
function writeCards( names, reason ) {
    let thankyoucards = []
    for ( let i = 0; i < names.length; i++ ) {
      thankyoucards.push( `Thank you, ${names[i]}, for the wonderful ${reason} gift!` )
    }
    return thankyoucards
  }

  function countDown(number){

      while(number > 0){
          console.log(number);
          number -= 1;
      }
      console.log(number);
  }