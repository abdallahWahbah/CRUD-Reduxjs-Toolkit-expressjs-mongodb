import React from 'react';

import { useFormik } from 'formik';

const StreamForm = (props) => 
{
    const initialValues=
    {
        title: props?.initialValues?.title || "",
        description: props?.initialValues?.description || ""
    }

    const onSubmit =  values => 
    {
        props.onSubmit(values);
    }
    const validate = (values) =>
    {
        let errors={};

        if(!values.title) errors.title= "Please, enter a valid title";
        if(!values.description) errors.description = "Please, enter a valid description";
        return errors;
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });
    
    const classes =`field${Object.keys(formik.errors).length !== 0 && formik.touched ? " error" : ""}`;

    return (
        <div style={{margin:"15px 0"}}>

            {props?.initialValues?.title}
            {props?.initialValues?.description}

            <form className='ui form error' onSubmit={formik.handleSubmit}>
                <div className={classes}>
                    <label htmlFor='title'>Enter title</label>
                    <input type="text" 
                        id="title" 
                        name="title" 
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                    </input>
                    {formik.touched.title && formik.errors.title ? (
                        <div className="ui error message">
                        <div className="header">{formik.errors.title}</div>
                    </div>
                    ) : null}
                </div>

                <label htmlFor='description'>Enter description</label>
                <input type="text" 
                    id="description" 
                    name="description" 
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
                {formik.touched.description && formik.errors.description ? (
                    <div className="ui error message">
                        <div className="header">{formik.errors.description}</div>
                    </div>
                ) : null}

                <button className='ui button primary' type='submit'>Submit</button>
            </form>
        </div>
    );
};
export default StreamForm;
