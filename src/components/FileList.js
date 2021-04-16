import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrash, faTimes } from "@fortawesome/free-solid-svg-icons"
import { faMarkdown } from "@fortawesome/free-brands-svg-icons"
import PropTypes from "prop-types"
import useKeyPress from "../hooks/useKeyPress"

const FileList = ({ files, onFileClick, onSaveEdit, onFileDelete }) => {
  const [editStatus, setEditStatus] = useState(false)
  const [value, setValue] = useState("")
  const enterPress = useKeyPress(13)
  const escPress = useKeyPress(27)
  const closeSearch = () => {
    setEditStatus(false)
    setValue("")
  }

  useEffect(() => {
    if (enterPress && editStatus) {
      const editItem = files.find((file) => file.id === editStatus)
      onSaveEdit(editItem.id, value)
      setEditStatus(false)
      setValue("")
    }
    if (escPress && editStatus) {
      closeSearch()
    }
  })

  return (
    <ul className='list-group list-group-flush file-list rounded-0'>
      {files.map((file) => {
        return (
          <li
            className='row list-group-item bg-light d-flex align-items-center mx-0'
            key={file.id}
          >
            {file.id !== editStatus ? (
              <>
                <span className='col-2'>
                  <FontAwesomeIcon size='lg' icon={faMarkdown} />
                </span>
                <span
                  className='col-6'
                  onClick={() => {
                    onFileClick(file.id)
                  }}
                >
                  {file.title}
                </span>
                <button
                  type='button'
                  className='icon-btn col-2'
                  onClick={() => {
                    setEditStatus(file.id)
                    setValue(file.title)
                  }}
                >
                  <FontAwesomeIcon title='编辑' size='lg' icon={faEdit} />
                </button>
                <button
                  type='button'
                  className='icon-btn col-2'
                  onClick={() => {
                    onFileDelete(file.id)
                  }}
                >
                  <FontAwesomeIcon title='删除' size='lg' icon={faTrash} />
                </button>
              </>
            ) : (
              <>
                <input
                  className=''
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value)
                  }}
                ></input>
                <button
                  type='button'
                  className='icon-btn'
                  onClick={closeSearch}
                >
                  <FontAwesomeIcon title='关闭' size='lg' icon={faTimes} />
                </button>
              </>
            )}
          </li>
        )
      })}
    </ul>
  )
}

FileList.propTypes = {
  files: PropTypes.array,
  onFileClick: PropTypes.func,
  onFileDelete: PropTypes.func,
}

FileList.defaultProps = {
  files: [
    {
      id: "1",
      title: "first",
      body: "first content",
    },
    {
      id: "2",
      title: "second",
      body: "second content",
    },
  ],
}

export default FileList
