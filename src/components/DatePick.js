import React, { useState} from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

export default function DatePick(props) {
  const [startDate, setStartDate] = useState(new Date());

  const onChangeDate = (date) => {
    setStartDate(date)
    props.onChangeDate(date);
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => { onChangeDate(date); props.onChangeDate(date); } }
      timeInputLabel="Time:"
      dateFormat="MM/dd/yyyy h:mm aa"
      showTimeInput
    />
  );
};

