let speed = prompt("enterSpeed")
function totalPointscalculated(speed){
    const points=5;
    const kmperPoints=5;
    const speedLimit=70; 
if (speed<=70){
    return "Ok";
}
else if (speed>70){
    let Pointsfound = ((speed-70)/5)
    console.log(Pointsfound);
    if (Pointsfound>=12)
    return "License suspended"
}
}
console.log (totalPointscalculated(72))