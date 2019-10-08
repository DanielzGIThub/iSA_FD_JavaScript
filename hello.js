var pid = document.getElementsByTagName("p");

for (i=0; i < pid.length; i++) {

    pid[i].id = "paragraph-"+i;
    document.write("paragraph-"+i);

}