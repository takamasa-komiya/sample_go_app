import * as React from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
  label: string,
  defaultValue?: string
}

export default function MultiLineForm(props: Props) {
  const {label, defaultValue} = props
  const [value, setValue] = React.useState('Controlled');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return ( <TextField
    id="outlined-multiline-static"
    label={label}
    multiline
    rows={4}
    defaultValue={defaultValue}
    style={{width: '500px'}}
    ></TextField>
  )
}
