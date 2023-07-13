import React from 'react';
import styles from './Modal.module.css'

const Modal = ({ onClose }) => {
  return (
    <div>
      <div className={styles.overlay}>
        <div className={styles.container}>
        <button className={styles.close} onClick={onClose}>
          X
        </button>    
        <div className={styles.modalInput}>
            <input type="text" placeholder="제목을 수정하세요"/>
            <input type="text" placeholder="내용을 수정하세요" />
        </div>
        <button className={styles.editBtn} onClick={onClose}>수정</button>
       </div>
      </div>
    </div>
  );
};

export default Modal;
