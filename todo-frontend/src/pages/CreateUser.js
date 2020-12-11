import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import "./CreateUser.css";
import { addNewUser } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form } from "formik";
import { object, string } from "yup";
import { TextField } from "formik-material-ui";
const CreateUser = () => {
  const dispatch = useDispatch();

  const initialValues = { input: "" };
  const validationSchema = object({
    input: string()
      .required("Required")
      .min(3, "Minimum 3 letters")
      .max(60, "Maximum 60 letters"),
  });
  const onSubmit = (value, submitProps) => {
    const { input } = value;
    const { resetForm, setSubmitting, ...rest } = submitProps;
    dispatch(addNewUser(input, submitProps));
  };

  return (
    <div className="createUser">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className="createUser__form">
              <Field name="input" component={ TextField } label = "Username"/>
              <Button
                variant="contained"
                color="primary"
                className="createUser__submit"
                type="submit"
                disabled = {formik.isSubmitting}
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateUser;
