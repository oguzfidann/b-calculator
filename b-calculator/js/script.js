

let ans = document.querySelector("#answer");

function Display(num){
    ans.value += num;
}

function Calculate() {
    ans.value = eval(ans.value)
}

function Clear() {
    ans.value = "";
}

function Del() {
    ans.value = ans.value.slice(0,-1)
}