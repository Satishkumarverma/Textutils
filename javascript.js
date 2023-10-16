box.oninput = changePara;
function changePara() {
    preview.innerText = box.value;
    word.innerText = box.value.split(/\s+/).filter((e) => { return e.length !== 0 }).length;
    char.innerText = box.value.length;
}

function upperCase() {
    let input = document.getElementById("box");
    let text = input.value.toUpperCase();
    document.getElementById("preview").innerHTML = text;
    document.getElementById("box").value = text;

}

function lowerCase() {
    let input = document.getElementById("box");
    let text = input.value.toLowerCase();
    document.getElementById("preview").innerHTML = text;
    document.getElementById("box").value = text;
}

function clearText() {
    let input = document.getElementById("box");
    let text = "";
    document.getElementById("preview").innerHTML = text;
    document.getElementById("box").value = text;
    document.getElementById("word").innerHTML = 0;
    document.getElementById("char").innerHTML = 0;
}

function copyText() {
    let input = document.getElementById("box");
    input.select();
    navigator.clipboard.writeText(input.value);
}
function removeSpace() {
    let input = document.getElementById("box");
    let newText = input.value.split(/[ ]+/);
    let out = newText.join(" ");
    document.getElementById("preview").innerHTML = out;
    document.getElementById("box").value = out;
}