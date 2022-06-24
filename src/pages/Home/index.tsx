import React, { useState, useEffect } from 'react';
import { Card } from '../../components/Card'
import './styles.css'


export function Home() {

  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: '' });

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

  useEffect(() => {
    // body of useEffect
    // fetch('https://api.github.com/users/brenomachadodomonte')
    // .then(response => response.json())
    // .then(data => {
    //   setUser({
    //     avatar: data.avatar_url,
    //     name: data.name
    //   })
    // })

    async function asyncData() {
      const response = await fetch('https://api.github.com/users/brenomachadodomonte');
      const data = await response.json();

      setUser({
        avatar: data.avatar_url,
        name: data.name
      })      
    }

    asyncData();
  }, [students]);

  return (
    <div className='container'>
      <header>
        <h1>Presence List</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Profile Photo" />
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
