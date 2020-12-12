import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Button,
  MenuItem,
  InputLabel,
  TextareaAutosize,
} from "@material-ui/core";
import { date, object, string } from "yup";
import { TextField, Select } from "formik-material-ui";
import { KeyboardDatePicker as DatePicker } from "@material-ui/pickers";

import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/todoActions";
const initialValues = {
  user: "",
  item: "",
  description: "",
  startDate: new Date().toDateString(),
};
const validationSchema = object({
  user: string().required("Please select the user"),
  item: string().required("This field is required"),
  description: string().required("Please enter valid description"),
  startDate: date().required("Please select date to start your work"),
});

const handleDateChange = (newDate, value, formik) => {
  console.log({ newDate: newDate._d }, value);
  formik.setFieldValue("startDate", newDate._d.toDateString());
};

const CreateTodo = () => {
  const { users } = useSelector((state) => state.userReducer);
  const dropDownUser = [{ id: "", name: "Please enter a user" }, ...users];
  console.log({ users, dropDownUser });
  const dispatch = useDispatch();

  const onSubmit = (values, submitProps) => {
    console.log("%c Values", "color: green; font-weight: bold;", {
      values,
      submitProps,
    });
    dispatch(addTodo(values, submitProps));

  };

  return (
    <div className="createTodo">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              {/* User Select */}
              <div className="form-control">
                <InputLabel htmlFor="user">User</InputLabel>
                <Field
                  component={Select}
                  name="user"
                  variant="outlined"
                  value={formik.values.user ? formik.values.user : 0}
                  inputProps={{ id: "user" }}
                  style={{
                    border: `1px solid ${
                      formik.errors.user && formik.touched.user
                        ? "rgba(255, 0, 0, 1)"
                        : "transparent"
                    }`,
                  }}
                >
                  <MenuItem value={0} disabled>
                    Please Select A User
                  </MenuItem>
                  {users.map((user) => {
                    return (
                      <MenuItem value={user.name} key={user.name}>
                        {user.name}
                      </MenuItem>
                    );
                  })}
                </Field>
                <div style={{ color: "red" }}>
                  <ErrorMessage name="user" />
                </div>
              </div>

              {/* Item */}
              <div className="form-control">
                <InputLabel htmlFor="item">Item</InputLabel>
                <Field
                  component={TextField}
                  name="item"
                  variant="outlined"
                  inputProps={{ id: "item" }}
                />
              </div>
              {/* Description */}
              <div className="form-control">
                <InputLabel htmlFor="description">Description</InputLabel>
                <Field name="description">
                  {(props) => {
                    return (
                      <TextareaAutosize
                        {...props.field}
                        rowsMin={5}
                        style={{
                          borderRadius: 3,
                          borderColor: `${
                            formik.errors.description &&
                            formik.touched.description
                              ? "red"
                              : "gray"
                          }`,
                        }}
                      />
                    );
                  }}
                </Field>
                <div style={{ color: "red" }}>
                  <ErrorMessage name="description" />
                </div>
              </div>

              {/* Date */}
              <div className="form-control">
                <DatePicker
                  name="startDate"
                  value={formik.values.startDate}
                  onChange={(date, value) =>
                    handleDateChange(date, value, formik)
                  }
                  views={["year", "month", "date"]}
                  format="DD/MM/yyyy (dddd)"
                  minDate={formik.initialValues.startDate}
                  label="Please Select start date"
                />
                <div>
                  <ErrorMessage name="startDate" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-control">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={formik.isSubmitting}
                >
                  Submit
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateTodo;
