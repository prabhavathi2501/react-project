import Sidebar from "./components/Sidebar"
import Notes from "./components/Notes"
import context from "react-bootstrap/esm/AccordionContext"

function App() {

  return <>
    <div id='wrapper'>
        <Sidebar/>
        <div id="context-wrapper" className="d-flex flex-columum p-2 bg-gray-200 width:100vh" style={{background:"blue-500"}}>
       <Notes/>
       </div>
    </div>
  </>
}

export default App