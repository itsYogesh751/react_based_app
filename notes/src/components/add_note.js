import Add_form from "./add_form";
function add(){
        var add1=document.querySelector(".add");
        console.log("heo");
        var f1=document.createElement("form");
        var f1=<form>
                <label for="note" id="note">Note</label>
                <input type="text" id="note" name="note"></input>
        </form>
        console.log(f1);
        add1.append(f1);
        console.log("hello");
        return add1;
}
export default add;