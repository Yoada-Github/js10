function delay(ms) {
    return new Promise((resolve) =>{
        setTimeout(resolve, ms);
    });
}
async function asyncFunction() {
    console.log("Hello")
    await delay(2000);
    console.log("World");
    
}

asyncFunction();
