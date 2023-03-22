let score = prompt("enterScore")
function totalGrade(score){ 
if(score > 79){
    return grade = 'A';
}
if (score >=69 && score<=79){
    return grade = 'B';
}
if (score >=59 && score<= 49){
    return grade = 'C';
}
else if (score >=40 && score <=49){
    return grade = 'D';
}
else if (score <40){ 
    return grade = 'E';
}
}
console.log(totalGrade(69))