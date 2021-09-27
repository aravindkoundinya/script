function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random()*num)
  }

  //object creation
  const mstorage={
      place: ['warangal','hyderabad','andhra','goa'],
      mustVisit: ['temples','market','eatfood','beach','pubs','church','bikeride','nightlife'],
      minprice: ['5k','20k','10k','25k'] 
  }
  //storing all the info in an array
  let message = [];

  for(let itt in mstorage){
      let fnum=generateRandomNumber(mstorage[itt].length)
    switch(itt){
        case 'place':
            message.push(`If you visit "${mstorage[itt][fnum]}".`)
            var p=mstorage.place[fnum];
            break;
        case 'mustVisit':
            if(p==='warangal'){
                 message.push(`you should visit "${mstorage[itt][0]},${mstorage[itt][1]}"`)
                 break;
        }
            else if(p=='hyderabad'){
                message.push(`you should visit "${mstorage[itt][2]},${mstorage[itt][4]},${mstorage[itt][7]}"`)
                break;
            }
            else if(p=='goa'){
                 message.push(`you should visit "${mstorage[itt][3]},${mstorage[itt][5]},${mstorage[itt][6]}"`)
                 break;
            }
            else{
                message.push(`Just visit bza and vizag`)
            break; 
            }
        case 'minprice':
            if(p=='warangal'){
                message.push(`Minimun price to visit "${mstorage[itt][0]}"`)
                break;
            }
             else if(p==='hyderabad'){
                message.push(`Minimun price to visit "${mstorage[itt][1]}"`)
                    break;
                }
                else if(p==='goa'){
                    message.push(`Minimun price to visit "${mstorage[itt][3]}"`)
                    break;
                }
                else{
                    message.push(`Minimun price to visit "${mstorage[itt][2]}"`)
                break; 
    }
  }
}
function formatWisdom(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = message.join('\n')
    console.log(formatted)
  }
  formatWisdom(message);