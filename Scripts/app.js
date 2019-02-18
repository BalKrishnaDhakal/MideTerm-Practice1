"use script";
// self-executing annonymous function
// IIFF -- Immediately Invoked Function Expression

(function() {
    let myFunctionalVariable = 0;

    window.addEventListener("load", () => {
        let myLocalVariable = 0;
        console.log(`App starterd...${myFunctionalVariable}`);
    });
})();