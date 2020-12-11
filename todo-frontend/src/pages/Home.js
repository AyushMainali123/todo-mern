import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "../components/TodoCard";
import { ClockLoader } from "react-spinners";
import {} from "../actions/userActions";
import { getTodos } from "../actions/todoActions";
import './Home.css'
const Home = () => {
  
  const users = useSelector((state) => state.userReducer).users;
  const {todos, loading:todoLoading, error:todoError}= useSelector(
    (state) => state.todoReducer
  );
  console.log(todos)
  const getAllTodos = () => {
    
    return todos.map(({ id, user, item, description, startDate }) => {
      console.log(item)
      return (
        <TodoCard
          key={id}
          id={id}
          user={user?.name || "DELETED USER" }
          item={item}
          description={description}
          startDate = {startDate}
        />
      );
    });
  };

  const loader = () => {
    let loaderCss = `
      margin: 30vh auto;
    `;
    return <ClockLoader css={loaderCss} size={70} color={"#7EC8E3"} />;
  };

  const JSXToRender = () => {
    if (todoLoading) {
      return loader();
    }
    if (todoError) { 
      return (<h3 className = "home__message">Error Loading datas....</h3>);
    }
    if (todos.length) {
      return getAllTodos()
    }
    return <h3 className="home__message">No todos!!</h3>;
    
  };

  return <div className="home">{JSXToRender()}</div>;
};

export default Home;
