import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { object, string } from "yup";
import { Button, InputLabel, TextareaAutosize } from "@material-ui/core";
import { KeyboardDatePicker as DatePicker } from "@material-ui/pickers";
import { updateTodo } from "../actions/todoActions";
import { useHistory } from "react-router-dom";

const UpdateTodo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const todos = useSelector((state) => state.todoReducer).todos;
  if (id && todos.length) {
    const currentTodo = todos.find((todo) => todo.id === id);
    const { user, description, startDate, item } = currentTodo;
    const initialValues = {
      user: user.name,
      description,
      startDate: startDate.toString(),
      item,
    };
    
  const handleDateChange = (newDate, value, formik) => {
    formik.setFieldValue("startDate", new Date(newDate._d).toDateString());
  };
    const onSubmit = (value, submitProps) => {
      console.log({ value });
      let resultToBeSubmitted = { ...value, user: currentTodo.user };
      dispatch(updateTodo(id, resultToBeSubmitted, submitProps));
      // submitProps.setSubmitting(false);
    };
    const validationSchema = object({});
      return (
        <div className="updateTodo">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <div className="form-control">
                    <InputLabel htmlFor="user">User</InputLabel>
                    <Field
                      id="user"
                      name="user"
                      component={TextField}
                      disabled
                      variant="filled"
                    />
                  </div>
                  <div className="form-control">
                    <InputLabel htmlFor="item">Item</InputLabel>
                    <Field
                      name="item"
                      component={TextField}
                      variant="outlined"
                      id="item"
                    />
                  </div>

                  <div className="form-control">
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <Field name="description">
                      {(props) => {
                        return (
                          <TextareaAutosize
                            name="description"
                            component={TextField}
                            variant="outlined"
                            id="description"
                            rowsMin={3}
                            {...props.field}
                          />
                        );
                      }}
                    </Field>
                  </div>
                  <div className="form-control">
                    <DatePicker
                      name="startDate"
                      views={["year", "month", "date"]}
                      format="DD/MM/yyyy (dddd)"
                      minDate={new Date().toDateString()}
                      value={formik.values.startDate}
                      onChange={(date, value) =>
                        handleDateChange(date, value, formik)
                      }
                      label="Please Select start date"
                    />
                  </div>
                  <div className="form-control">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={formik.isSubmitting}
                    >
                      UPDATE
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      );
  }

  history.push("/")
  return null;
};

export default UpdateTodo;
