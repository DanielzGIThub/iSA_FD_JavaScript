var myBody = document.getElementsByTagName("body");

console.log(myBody[0].innerHTML);

var div_tag = myBody[0].getElementsByTagName("div");

console.log(div_tag[0]);

var p_tag = div_tag[0].getElementsByTagName("p");

console.log(p_tag);

p_tag[4].innerHTML = "Next change"
console.log(p_tag[0].textContent);

p_tag[0].textContent = "Easy busy lemon squeezer";