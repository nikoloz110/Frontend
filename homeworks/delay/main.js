function delay(ms) { 
  return new Promise(function(resolve, reject){
    
  setTimeout(()=>{
    resolve(ms)
  }, ms);
})
}

delay(3000).then((ms)=>alert(`runs after ${ms/1000} seconds`));