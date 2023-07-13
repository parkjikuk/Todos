import React from 'react'
import './AddTodo.css'
import { Link } from 'react-router-dom'

export default function AddTodo() {
  return (
    <div className="modify-container">
      <div className="modify-wrapper">
        <h1>Todo 추가</h1>

        <div className="modify-input-wrapper"> 
        <div>
          <h3>제목</h3>
          <input className="modify-title-input" placeholder="제목을 입력하세요"/> 
        </div>

        <div>
          <h3>상세 내용</h3>
          <input className="modify-descreption-input" placeholder="내용을 입력하세요"/>
        </div>
        </div>

        <div>
          <Link to='/'>
            <button className="modify-btn">확인</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
