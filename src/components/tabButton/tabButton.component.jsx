import React from 'react'

import './tabButton.styles.scss'

const TabButton = ({data, change, active}) => {
  const btnClasses = active ? "tab__button-footer active" : "tab__button-footer"

  return (
    <button className='tab__button' onClick={change}>
      <p className='tab__button-text'>{data.title}</p>
      <div className={btnClasses}></div>
    </button>
  )
}

export default TabButton