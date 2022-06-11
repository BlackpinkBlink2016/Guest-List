studentofthearray=[];

function submit(){
    var displaystudent=[];
    for(var j=1;j<=4;j++){
    var name=document.getElementById("name_of_the_student_"+j).value ;
    console.log(name);
    studentofthearray.push(name);
    }

    console.log(name);

    var lengthofname=studentofthearray.length;
    for(var b=0;b<lengthofname;b++){
        displaystudent.push("NAME- "+ studentofthearray[b] + "</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=displaystudent;
    var remove_comma=displaystudent.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}