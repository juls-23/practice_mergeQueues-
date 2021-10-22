// Для 2 аргументов

const mergeQueues = (q1,q2) =>{
  if(q1 instanceof Queue && q2 instanceof Queue){
    const q3 = new Queue();
     
    while(q1.size || q2.size){
      if(q1.size){
        q3.push(q1.unshift());
        
      }if(q2.size){
        q3.push(q2.unshift());
      } 
    }
      
    return q3;
  }

  throw TypeError ('merging items must be a Queue')
  }

// Для любого количества аргументов 

const mergeQueues2 = (...args) =>{
  const q3 = new Queue();  
  const length = args.reduce((acc, el)=>{return acc += el.size},0);
  
  for(arg of args){
    if(!(arg instanceof Queue)){
      throw TypeError ('merging items must be a Queue')
    }
  }
 
  while(q3.size < length){
    args.forEach((arg)=>{
      if(arg.size){
        q3.push(arg.unshift());  
      }  
    }
  )} return q3; 

}
    
const q1 = new Queue(11,12,13,14);
const q2 = new Queue(1,2,3,4,5,6);

const mergedQueue = mergeQueues(q1,q2)
console.log(mergedQueue)

const q3 = new Queue(11,12);
const q4 = new Queue(100,200,300,400,500,600);
const q5 = new Queue(1,2,3,4,5,6,7,8);

const mergedQueue2 = mergeQueues2(q3,q4,q5)
console.log(mergedQueue2)




  