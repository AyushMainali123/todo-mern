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
import {
  KeyboardDatePicker as DatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { useSelector } from "react-redux";
import MomentUtils from "@date-io/moment";
const initialValues = {
  user: "",
  item: "",
  description: "",
  startDate: "",
};
const validationSchema = object({
  user: string().required("Please enter the user"),
  item: string().required("This field is required"),
  description: string().required("Please enter valid description"),
  startDate: date(),
});
const onSubmit = (values, submitProps) => {
  console.log("Submit");
};

const CreateTodo = () => {
  const { users } = useSelector((state) => state.userReducer);
  const dropDownUser = [{ id: "", name: "Please enter a user" }, ...users];
  console.log({ users, dropDownUser });

  return (
    <div className="createTodo">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          console.log(formik);
          return (
            <Form>
              {/* User Select */}
              <div className="form-control">
                <InputLabel htmlFor="user">User:</InputLabel>
                <Field
                  component={Select}
                  name="user"
                  variant="outlined"
                  value={formik.values.user ? formik.values.user : 0}
                  inputProps={{ id: "user" }}
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
                  {(props) => <TextareaAutosize {...props.field} />}
                </Field>
                <div style={{ color: "red" }}>
                  <ErrorMessage name="description" />
                </div>
              </div>

              {/* Date */}

              <Field type="date" name="startDate" />

              {/* Submit Button */}
              <div className="form-control">
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateTodo;
