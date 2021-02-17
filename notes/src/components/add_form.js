//import Add_form from "./add_form";
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
    but.setAttribute("class","btn btn-danger");
    f1.appendChild(lab);
    f1.appendChild(input);
    f1.appendChild(but);
    input.setAttribute("class","note");
    add1.appendChild(f1);
    but.addEventListener("click", fun);
    return add1;
}
const fun = (e) =>
{
    e.preventDefault();
    var note=document.querySelector(".note").value;
    //console.log(typeof(note));
    return note;
}
export{add,fun}