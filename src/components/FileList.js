import React, { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { faMarkdown } from "@fortawesome/free-brands-svg-icons"
import PropTypes from "prop-types"

const FileList = ({ files, onFileClick, onSaveEdit, onFileDelete }) => {
  return (
    <ul className="list-group list-group-flush file-list">
      {files.map((file) => {
        return (
          <li
            className="row list-group-item bg-light d-flex align-items-center"
            key={file.id}
          >
            <span className="col-1">
              <FontAwesomeIcon size="lg" icon={faMarkdown} />
            </span>
            <span className="col-8">{file.title}</span>
            <button type="button" className="icon-btn col-1" onClick={() => {}}>
              <FontAwesomeIcon title="编辑" size="lg" icon={faEdit} />
            </button>
            <button type="button" className="icon-btn col-1" onClick={() => {}}>
              <FontAwesomeIcon title="删除" size="lg" icon={faTrash} />
            </button>
          </li>
        )
      })}
    </ul>
  )
}

FileList.propTypes = {
  files: PropTypes.array,
}

FileList.defaultProps = {
  files: [
    {
      id: 1,
      title: "first",
      body: "first content",
    },
    {
      id: 2,
      title: "second",
      body: "second content",
    },
  ],
}

export default FileList
