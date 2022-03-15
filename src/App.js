import StudentList from "./components/StudentList";
import StudentContextProvider from "./contexts/StudentContext";


function App() {
  return (
    <div classNameName="container-xl">
	    <div className="table-responsive">
		    <div className="table-wrapper">
          <StudentContextProvider>
           <StudentList />
          </StudentContextProvider>

        </div>
      </div>
    </div>
  );
}

export default App;
