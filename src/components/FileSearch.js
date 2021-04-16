import React, { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"
import useKeyPress from "../hooks/useKeyPress"
const FileSearch = ({ title, onFileSearch }) => {
  const [inputActive, setinputActive] = useState(false)
  const [value, setValue] = useState("")
  const inputDom = useRef(null)
  const enterPress = useKeyPress(13)
  const escPress = useKeyPress(27)
  const closeSearch = () => {
    setinputActive(false)
    setValue("")
  }
  useEffect(() => {
    if (enterPress && inputActive) {
      onFileSearch(value)
    }
    if (escPress && inputActive) {
      closeSearch()
    }
  })

  useEffect(() => {
    if (inputActive) {
      inputDom.current.focus()
    }
  }, [inputActive])
  return (
    <div className='alert alert-primary d-flex justify-content-between align-items-center mb-0 rounded-0'>
      {!inputActive ? (
        <>
          <span>{title}</span>
          <button
            type='button'
            className='icon-btn'
            onClick={() => {
              setinputActive(true)
            }}
          >
            <FontAwesomeIcon title='搜索' size='lg' icon={faSearch} />
          </button>
        </>
      ) : (
        <>
          <input
            className=''
            value={value}
            ref={inputDom}
            onChange={(e) => {
              setValue(e.target.value)
            }}
          ></input>
          <button type='button' className='icon-btn' onClick={closeSearch}>
            <FontAwesomeIcon title='关闭' size='lg' icon={faTimes} />
          </button>
        </>
      )}
    </div>
  )
}

FileSearch.propTypes = {
  title: PropTypes.string,
  onFileSearch: PropTypes.func.isRequired,
}

FileSearch.defaultProps = {
  title: "我的云文档",
}
export default FileSearch
