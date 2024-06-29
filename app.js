function myfun() {
let username = document.getElementById("userName").value
let password = document.getElementById("password").value
let task = document.getElementById("task")
    let account={
        message:"logged succefully",
        user:"js",
        pin:111
    }
    let account2={
        message:"logged succefully",
        user:"jk",
        pin:222
    }

    let source=[account,account2]

    let index=0;
    while (index<source.length) {
        if (source[index].user==username&&source[index].pin==password) {
            console.log(source[index].message);
            task.style.opacity=1;
            return
        }
        index++
    }
    console.log("invalid username and pin");
}