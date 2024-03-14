// Creating a countdown for Independence Day using Callback Hell:
var countdown = document.querySelector("#countdown") 
var c = 10;
setTimeout( ()=> { 
    console.log("cd", c) 
    countdown.innerText = c ;
    c--;  
    setTimeout( ()=> { 
        console.log("cd", c) 
        countdown.innerText = c ;
        c--;  
        setTimeout( ()=> { 
            console.log("cd", c) 
            countdown.innerText = c ;
            c--;  
            setTimeout( ()=> { 
                console.log("cd", c) 
                countdown.innerText = c ;
                c--;  
                setTimeout( ()=> { 
                    console.log("cd", c) 
                    countdown.innerText = c ;
                    c--;  
                    setTimeout( ()=> { 
                        console.log("cd", c) 
                        countdown.innerText = c ;
                        c--;  
                        setTimeout( ()=> { 
                            console.log("cd", c) 
                            countdown.innerText = c ;
                            c--;  
                            setTimeout( ()=> { 
                                console.log("cd", c) 
                                countdown.innerText = c ;
                                c--;  
                                setTimeout( ()=> { 
                                    console.log("cd", c) 
                                    countdown.innerText = c ;
                                    c--;  
                                    setTimeout( ()=> { 
                                        console.log("cd", c) 
                                        countdown.innerText = c ;
                                        c--;  
                                        setTimeout( ()=> { 
                                            console.log("indep")
                                            countdown.innerText = "HAPPY INDEPENDENCE DAY";  
                                            countdown.style.color = "Green"; 
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)