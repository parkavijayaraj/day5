var resume={
    "name":"parkavi",
    "age":"22",
    "qualification":"BE-CSE",
    "skill":["c","java","css"],
    "language":["tamil","english"]
}
var result=Object.entries(resume); //to convert the object as a array for in automatically printed
//for loop
for(var i=0;i<result.length;i++){
    console.log(result[i]);
}
//for in loop
for(var key1 in result){
    console.log(result[key1]);
}
//for of function
for(var [key,value] of result) //array destructuring [key,array]
{
    console.log(key,value);
}
//foreach function
result.forEach((ele)=>console.log(ele))