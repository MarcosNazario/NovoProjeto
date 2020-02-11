function contador(min, max) {
    document.write(min + "<br>");
    console.log(min+"<br>");
    if (min < max) {
        contador(++min, max);
    }
    
}
contador(0, 10);