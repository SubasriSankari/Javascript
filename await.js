async function sum(val1 , val2){
    let getSum = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(val1 + val2);
        }, 3000);
    });
    console.log("Calculating sum takes some time...");
    console.log("Your Sum is " + await getSum);
    console.log("Sum calculated Successfully!!");
}

sum(10 , 20);
