for (i=1; i <= 10; i++) {

    if (i == 5 || i == 7 || i == 8){
        continue;

    }

    document.write(i);
    console.log(i);

    if (i == 9) {
        
        document.write("loop broken");
        console.log("loop broken");
        break;

    }
    
}