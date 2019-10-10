var content = document.getElementById("content");

console.log(content);

var button = document.getElementById("button");



button.onclick = function(){

    if(content.className == "open"){
        content.className = "test";
        button.innerHTML = "Show More";
    } else if(content.className == "test"){
        content.className = "open";
        console.log(content);
        button.innerHTML = "Show Less";
    }
};