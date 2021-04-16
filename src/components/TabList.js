import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const TabList = ({ files, activeId, unsaveIds, onTabClick, onCloseTab }) => {
  return (
    <ul className='nav nav-pills'>
      {files.map((file) => {
        const klass = classNames("nav-link rounded-0 border border-bottom-0", {
          active: file.id === activeId,
        })
        return (
          <li className='nav-item' key={file.id}>
            <a
              href='.'
              className={klass}
              onClick={(e) => {
                e.preventDefault()
                onTabClick(file.id)
              }}
            >
              {file.title}
              <span className='ml-2'>
                <FontAwesomeIcon title='关闭' icon={faTimes} />
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
TabList.propTypes = {
  files: PropTypes.array,
  activeId: PropTypes.string,
  unsaveIds: PropTypes.array,
  onTabClick: PropTypes.func,
  onCloseTab: PropTypes.func,
}

TabList.defaultProps = {
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

export default TabList
