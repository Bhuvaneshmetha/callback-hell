var el2 = document.createElement("div"); //Parent
var ele1 = document.createElement("h1"); //Child
ele1.setAttribute("id", "Nano");
ele1.innerText = "10";
el2.append(ele1);
document.body.append(el2);
setTimeout(() => {
    ele1.innerHTML = "9";
    setTimeout(() => {
        ele1.innerHTML = "8";
        setTimeout(() => {
            ele1.innerHTML = "7";
            setTimeout(() => {
                ele1.innerHTML = "6";
                setTimeout(() => {
                    ele1.innerHTML = "5";
                    setTimeout(() => {
                        ele1.innerHTML = "4";
                        setTimeout(() => {
                            ele1.innerHTML = "3";
                            setTimeout(() => {
                                ele1.innerHTML = "2";
                                setTimeout(() => {
                                    ele1.innerHTML = "1";
                                    setTimeout(() => {
                                        ele1.innerHTML = `Happy Independance Day`;
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