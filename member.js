function skillsMember(){
    console.log("Skills Member");
}

function listOutFirst100FibonacciNumbers(){
    let a = 0;
    let b = 1;
    let c = 0;
    for(let i = 0; i < 100; i++){
        console.log(a);
        c = a + b;
        a = b;
        b = c;
    }
}