import Create from "./components/create";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Edit from "./components/edit";
import Note_table from "./components/note_table";

function App() {
  return (
    <div className="App">
      <div className="card offset-sm-4 col-sm-4">
        <div className="card-header">
            <Header />
      </div>
      <div className="card-body">
          <Note_table />
      </div>
      <div className="card-footer">
        <div className="">
             <div className="col-sm-2"><Create /></div>
        </div>
        <br/>
        <div className="add col-sm-12">
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
