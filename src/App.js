import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import FileSearch from "./components/FileSearch"
import FileList from "./components/FileList"

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-4 left-panel">
          <FileSearch
            title="云文档"
            onFileSearch={(value) => {
              console.log(value)
            }}
          />
          <FileList />
        </div>
        <div className="col-8 right-panel">
          <h1>you</h1>
        </div>
      </div>
    </div>
  )
}

export default App
