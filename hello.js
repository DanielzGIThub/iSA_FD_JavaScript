var link = document.getElementsByTagName("a");

console.log(link[0]);

console.log(link[0].getAttribute("href"));

console.log(link[0].getAttribute("alt"));

link[0].setAttribute("id", "link-id");

link[0].setAttribute("style", "color: red;");

console.log(link[0].href);

console.log(link[0].target);

link[0].setAttribute("style", "padding: 20px; background-color: brown");

link[0].style.color = "green";

link[0].style.backgroundColor = "blue"; // background-color must be converted to backgroundColor

