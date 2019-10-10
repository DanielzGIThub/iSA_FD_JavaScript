var get_head = document.getElementById("678");

get_head.onclick = function(){alert("You clicked the heading");};

var get_p = document.getElementsByTagName("div")[0].getElementsByTagName("p")[4];

console.log(get_p);

get_p.onmouseover = function(){alert("you hovered me");};
