import * as React from 'react';
import { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

export default function SearchInputHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }

    return 'Helper text';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}