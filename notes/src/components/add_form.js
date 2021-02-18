

function add(){
    var add1=document.querySelector(".add");
    console.log("heo");
    var f1=document.createElement("form");
    var lab=document.createElement("label");
    var input=document.createElement("input");
    lab.setAttribute('for','note');
    lab.innerHTML='Note';
    input.setAttribute('id','Note');
    input.setAttribute('name','Note');
    input.setAttribute('type','text');
    var but=document.createElement("button");
    but.innerText="Submit";
    but.setAttribute("type","submit");
    but.setAttribute("class","btn btn-success");
    but.style.padding='1%';
    f1.appendChild(lab);
    f1.appendChild(input);
    f1.appendChild(but);
    f1.setAttribute("class","form_del");
    input.setAttribute("class","note");
    add1.appendChild(f1);
    but.addEventListener("click", fun);
    return add1;
}
var fun = (e) =>
{
    e.preventDefault();
    var note=document.querySelector(".note").value;
    //console.log(typeof(note));
    var tr=document.createElement("tr");
    var th1=document.createElement("th");
    var th2=document.createElement("th");
    var th3=document.createElement("th");
    var tempDate = new Date();
    var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
    var time=tempDate.getHours() + '-' + tempDate.getMinutes() + '-' + tempDate.getSeconds();
    th2.innerHTML=date;
    th3.innerHTML=time;
    th1.innerHTML=note;
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    var tbody=document.querySelector(".tbody");
    tbody.appendChild(tr);
    return tbody;
   // return note;
}
export{add,fun}