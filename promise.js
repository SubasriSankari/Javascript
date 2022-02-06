  
let myPromise = new Promise(function(myResolve, myReject) {
  
    setTimeout(()=>{
        myResolve();
    }, 5000);
    console.log("The person is waiting only for 5 sec...");
});
  
myPromise
.then(()=> {
    console.log("Sorry!! He is gone..");
})
.catch(()=> {
    console.log("The person is not there...");
});

  
  