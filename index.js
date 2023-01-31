"use client"
import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "todo 1  ", completed: false },
    { todoText: "todo 2  ", completed: true },
    { todoText: "todo 3  ", completed: true },
    { todoText: "todo 4  ", completed: false },
  ]);

  const onClickHandler = (meraElm) => {
    console.log("meraElm", meraElm);

    
    const newTodos = todos.map((todo) => {
      console.log("todo: ", todo);
      if (todo.todoText == meraElm.todoText) {
        todo.completed = !todo.completed; 
      }
      return todo;
    });

    console.log(newTodos);
    setTodos(newTodos);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  };

  const deleteTodo = (meraTodo) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == meraTodo.todoText) return false;
      return true;
    });
    console.log("old todos", todos, "new todos", newTodos);
    setTodos(newTodos);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo-app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
    <div className={styles.heading}>
      <h1 className={styles.main} >Welcome to my Todo</h1>
      <input
        placeholder="Add todo text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        className={styles.box}
      />
      <button onClick={addTodo} style={{fontSize: 30,color:"black",background:"white"}}>Add</button>
      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{
                color: elm.completed ? "red" : "green",
                fontStyle: "normal",
                listStyle: "none",
                textAlign: "center",
                fontSize: 40
              }}
              key={elm.todoText}
            >
              <input
                type="checkbox"
                checked={elm.completed}
                onChange={() => {
                  onClickHandler(elm);
                }}
                className={styles.check}
              />
              {elm.todoText}
              <button
                onClick={() => {
                  deleteTodo(elm);
                }}
                style={{fontSize: 30,background:"white",color:"black"}}
              >
                {"  "}
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      </div>
    </>
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
