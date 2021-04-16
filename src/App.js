import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import FileSearch from "./components/FileSearch"
import FileList from "./components/FileList"
import BottomBtn from "./components/BottomBtn"
import TabList from "./components/TabList"
import { faPlus, faFileImport } from "@fortawesome/free-solid-svg-icons"

function App() {
  return (
    <div className='App container-fluid px-0'>
      <div className='row no-gutters'>
        <div className='col-4 bg-light left-panel'>
          <FileSearch
            title='云文档'
            onFileSearch={(value) => {
              console.log(value)
            }}
          />
          <FileList
            onFileClick={(id) => {
              console.log(id)
            }}
            onSaveEdit={(item, value) => {
              console.log(item, value)
            }}
          />
          <div className='row no-gutters'>
            <div className='col'>
              <BottomBtn icon={faPlus} colorClass='btn-primary' />
            </div>
            <div className='col'>
              <BottomBtn
                text='导入'
                icon={faFileImport}
                colorClass='btn-success'
              />
            </div>
          </div>
        </div>
        <div className='col-8 right-panel'>
          <TabList activeId='1' />
        </div>
      </div>
    </div>
  )
}

export default App
