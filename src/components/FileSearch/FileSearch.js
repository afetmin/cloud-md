import React, { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons"

const FileSearch = ({ title, onFileSearch }) => {
  const [inputActive, setinputActive] = useState(false)
  const [value, setValue] = useState("")
  const inputDom = useRef(null)

  const closeSearch = (e) => {
    e.preventDefault()
    setinputActive(false)
    setValue("")
  }
  useEffect(() => {
    const handleInputEvent = (event) => {
      const { keyCode } = event
      if (keyCode === 13 && inputActive) {
        onFileSearch(value)
      } else if (keyCode === 27 && inputActive) {
        closeSearch(event)
      }
    }
    document.addEventListener("keyup", handleInputEvent)
    return () => {
      document.removeEventListener("keyup", handleInputEvent)
    }
  })

  useEffect(() => {
    if (inputActive) {
      inputDom.current.focus()
    }
  }, [inputActive])
  return (
    <div className="alert alert-primary d-flex justify-content-between align-items-center">
      {!inputActive ? (
        <>
          <span>{title}</span>
          <button
            type="button"
            className="icon-btn"
            onClick={() => {
              setinputActive(true)
            }}
          >
            <FontAwesomeIcon title="搜索" size="lg" icon={faSearch} />
          </button>
        </>
      ) : (
        <>
          <input
            className=""
            value={value}
            ref={inputDom}
            onChange={(e) => {
              setValue(e.target.value)
            }}
          ></input>
          <button type="button" className="icon-btn" onClick={closeSearch}>
            <FontAwesomeIcon title="关闭" size="lg" icon={faTimes} />
          </button>
        </>
      )}
    </div>
  )
}

export default FileSearch
