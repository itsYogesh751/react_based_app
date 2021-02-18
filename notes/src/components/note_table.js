//import {add,fun} from "./add_note";
import TR from "./table_rows";
function note_table(){
    return(
        <table className="table">
            <thead>
            <tr>
                <th>note</th>
                <th>date</th>
                <th>time</th>
            </tr>
            </thead>
            <tbody className="tbody" onMouseOver={disappear}>
            </tbody>
        </table>
    )
}
function disappear(){
    console.log("hej");

    var form=document.querySelector(".form_del");
    if(form!=null){
    form.remove();
    }
}
export default note_table;