import React from 'react'

const LanguageOption = (props) => {
  return (
    <select onChange={props.onChange}>
        <option>Select Language</option>
        <option value={'en'}>English</option>
        <option value={'hi'}>Hindi</option>
        <option value={'mar'}>Marathi</option>
    </select>
  )
}

export default LanguageOption;
