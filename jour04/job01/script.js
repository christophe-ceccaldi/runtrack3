//wait for the DOM is load before display webpage//
document.addEventListener("DOMContentLoaded", function() {
//select id button//
    const btn = document.querySelector("#button");
    //add a eventListener "click" on the button//
    //button get back txt citation file// 
    btn.addEventListener("click", citation);

    function citation() {
        //create a new <p> to put citation in it//
        const quote = document.createElement("p");
        //use fetch function to get back txt from file expression.txt//
        fetch("expression.txt") 
        //transform awnser in text//
        .then(response => response.text())
        //put expression.txt in <p>//
        .then(textString => {
            quote.textContent = textString
        });
        //select body to put the <p> with citation//
        show_quote = document.querySelector("body");
        //add <p> with citation in the body
        show_quote.append(quote);   
    }
    
})