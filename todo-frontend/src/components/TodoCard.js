import React from "react";
import { Card, CardActions, CardContent, Button } from "@material-ui/core";
import './TodoCard.css'
const TodoCard = ({ id, user, item, description }) => {
  return (
    <div className="todoCard">
      <Card>
        <CardContent>
          <div className="todoCard__createdBy">
            <div>Todo Created By {user}</div>
          </div>
          <div className="todoCard__todo">{item}</div>
          <div className="todoCard__description">{description}</div>
          <div className="todoCard__actionButtons">
                      <Button variant="contained" color="primary" style={{ marginRight: 15}}>
              Update
            </Button>
            <Button variant="contained" color="secondary">
              Delete
            </Button>
          </div>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default TodoCard;
