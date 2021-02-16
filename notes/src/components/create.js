import Add from "./add_note";
function Create(){
    return(
        <button class="btn btn-danger" onClick={()=>Add()}>
             CREATE
        </button>
    )
}
export default Create;