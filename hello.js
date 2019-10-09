var link = document.getElementsByTagName("a");

console.log(link[0]);

console.log(link[0].getAttribute("href"));

console.log(link[0].getAttribute("alt"));

link[0].setAttribute("id", "link-id");

link[0].setAttribute("style", "color: red;");

console.log(link[0].href);

console.log(link[0].target);