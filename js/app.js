const mergeQueues = (q1,q2) =>{
  if(q1 instanceof Queue && q2 instanceof Queue){
    const q3 = new Queue();
  
    while(q1.size && q2.size){
      q3.push(q1.unshift());
      q3.push(q2.unshift());  
    }
    
    while(q1.size){
      q3.push(q1.unshift());  
    }
    
    while(q2.size){
      q3.push(q2.unshift());  
    }
      
    return q3;
  }

  throw TypeError ('merging items must be a Queue')
  }

 
    
  
const q1 = new Queue(11,12,13,14);
const q2 = new Queue(1,2,3,4,5,6);

const mergedQueue = mergeQueues(q1,q2)
console.log(mergedQueue)




