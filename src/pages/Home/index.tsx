import React, { useState, useEffect } from 'react';
import { Card } from '../../components/Card'
import './styles.css'


export function Home() {

  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);

  function handleAddStudent(){
    const newStudent =  {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }

    setStudents(prevState => [...prevState, newStudent])
  }

  return (
    <div className='container'>
      <header>
        <h1>Presence List</h1>
        <div>
          <strong>Breno Machado</strong>
          <img src="https://github.com/brenomachadodomonte.png" alt="Profile Photo" />
        </div>
      </header>
      <input type="text" placeholder="Type the name" onChange={e => setStudentName(e.target.value)} />
      <button type="button" onClick={handleAddStudent}>Add</button>

      {
        students.map(student => <Card key={student.time} name={student.name} time={student.time} />)
      }
    </div>
  )

}
