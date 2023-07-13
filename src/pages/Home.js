import { Link } from 'react-router-dom';
import './Home.css';
import { useState } from 'react';
import Modal from '../components/Modal';

function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleComplete = (e) => {
    e.preventDefault();
  };

  const handleDelete = (e) => {
    e.preventDefault();
  };

  return (
     <div className="todo-container">
      <h1>Todos</h1>

      <div>
        <Link to="/add">
          <button className="add-button">+ 추가하기</button>
        </Link>
      </div>

      <div className="task-buttons">
        <button>Todos</button>
        <button>complete</button>
      </div>

      <div className="todo-list"> 
        <Link to='/detail' className="todo-list-item" >
          <div className="list-item-content">
            <h3>Todo 1</h3>
          </div>
          <div className="list-item-btn">
            <button onClick={handleComplete}>완료</button>
            <button onClick={handleOpenModal}>수정</button>
            <button onClick={handleDelete}>삭제</button>
          </div>
        </Link>

        <Link to='/detail' className="todo-list-item" >
          <div className="list-item-content">
            <h3>Todo 1</h3>
          </div>
          <div className="list-item-btn">
            <button onClick={handleComplete}>완료</button>
            <button onClick={handleOpenModal}>수정</button>
            <button onClick={handleDelete}>삭제</button>
          </div>
        </Link>

        <Link to='/detail' className="todo-list-item" >
          <div className="list-item-content">
            <h3>Todo 1</h3>
          </div>
          <div className="list-item-btn">
            <button onClick={handleComplete}>완료</button>
            <button onClick={handleOpenModal}>수정</button>
            <button onClick={handleDelete}>삭제</button>
          </div>
        </Link>

        <Link to='/detail' className="todo-list-item" >
          <div className="list-item-content">
            <h3>Todo 1</h3>
          </div>
          <div className="list-item-btn">
            <button onClick={handleComplete}>완료</button>
            <button onClick={handleOpenModal}>수정</button>
            <button onClick={handleDelete}>삭제</button>
          </div>
        </Link>

        <Link to='/detail' className="todo-list-item" >
          <div className="list-item-content">
            <h3>Todo 1</h3>
          </div>
          <div className="list-item-btn">
            <button onClick={handleComplete}>완료</button>
            <button onClick={handleOpenModal}>수정</button>
            <button onClick={handleDelete}>삭제</button>
          </div>
        </Link>

        <Link to='/detail' className="todo-list-item" >
          <div className="list-item-content">
            <h3>Todo 1</h3>
          </div>
          <div className="list-item-btn">
            <button onClick={handleComplete}>완료</button>
            <button onClick={handleOpenModal}>수정</button>
            <button onClick={handleDelete}>삭제</button>
          </div>
        </Link>

        <Link to='/detail' className="todo-list-item" >
          <div className="list-item-content">
            <h3>Todo 1</h3>
          </div>
          <div className="list-item-btn">
            <button onClick={handleComplete}>완료</button>
            <button onClick={handleOpenModal}>수정</button>
            <button onClick={handleDelete}>삭제</button>
          </div>
        </Link>
      </div>

      {modalOpen && <Modal onClose={handleCloseModal} />}
     </div>
  );
}

export default Home;
