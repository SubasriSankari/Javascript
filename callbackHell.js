const secondOperation = () =>{
    setTimeout( ()=>{
        console.log("Second operation finished Successfully!!");
    }, 3000);
}

const firstOperation = () =>{
    console.log("First Operation finished Successfully!!");
    secondOperation();
    console.log("This second operation takes some seconds...");
}

firstOperation();