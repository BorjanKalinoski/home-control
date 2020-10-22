import * as React from "react";
import {Field, useField} from "formik";

const MyTextInput = (props:any) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    return <Field {...field} {...props} helperText={errorText} error={!!errorText}/>;
};

export default MyTextInput;
