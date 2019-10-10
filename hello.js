var new_li = document.createElement("li");
var new_li2 = document.createElement("li");

var new_a = document.createElement("a");
var new_a2 = document.createElement("a");

var get_ul = document.getElementsByTagName("ul");

console.log(new_li);
console.log(new_a);
console.log(get_ul[0]);

get_ul[0].appendChild(new_li);

new_li.appendChild(new_a);

new_a.href = "https://github.com/DanielzGIThub";

new_a.innerHTML = "shutterstock"

get_ul[0].insertBefore(new_li2, get_ul[0].getElementsByTagName("li")[1]);

new_li2.appendChild(new_a2);

var removed_li = get_ul[0].removeChild(get_ul[0].getElementsByTagName("li")[4]);

get_ul[0].appendChild(removed_li);

