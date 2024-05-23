// "use client"
import React from 'react'
import DatePicker from "react-multi-date-picker"

import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import transition from "react-element-popper/animations/transition"

// type DataPickerComponentProps = {
//   value:string,
//   changeDateHandler:(e)=>void
// }

const DataPickerComponent = ({value , changeDateHandler}) => {


  return (
    <div>
        <DatePicker
            value={value}
            onChange={changeDateHandler}
            locale={persian_fa}
            calendar={persian}
            animations={[transition()]} 
        />
    </div>
  )
}

export default DataPickerComponent