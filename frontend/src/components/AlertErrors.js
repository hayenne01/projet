import * as React from 'react';
import Alert from '@mui/material/Alert';

import { useSelector } from 'react-redux';

function AlertErrors()  {
    const errors=useSelector((state)=> state.alertReducer);
  return (
    <div>
    {errors.map(el=> <Alert severity={el.type}>
        <strong>{el.msg}</strong>
      </Alert>)}
      
      </div>
   
  )
}

export default AlertErrors