import React from 'react';
import StartPage from './StartPage';
import TodoPage from './TodoPage';
import NewPage from './NewPage';
import { NavLink } from 'react-router-dom';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import '../index.css'; 

export default function WordsPage() {
  const location = useLocation();

  return (
    <>
      <div className='box-header'>
        <nav className="menu">
          <NavLink to="/">Game</NavLink>
          <Link to="/todo">Todo</Link>
        </nav>

        <div className='container'>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/todo" element={<TodoPage />} />
          </Routes>
        </div>
      </div>

        {location.pathname === '/' && (
        <div className='button-wrapper'>
          <NewPage />
        </div>
      )}

      {location.pathname === '/todo' && (
        <div className='todo-style'>
          <TodoPage />
        </div>
      )}
    </>
  );
}