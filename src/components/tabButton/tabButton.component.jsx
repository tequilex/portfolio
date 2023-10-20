import React from 'react'

import './tabButton.styles.scss'

const TabButton = ({data, change}) => {
  return (
    <button className='tab__button' onClick={change}>
      <p className='tab__button-text'>{data.title}</p>
      <div className="tab__button-footer active"></div>
    </button>
  )
}

export default TabButton