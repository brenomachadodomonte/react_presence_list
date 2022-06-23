import { Card } from '../../components/Card'
import './styles.css'


export function Home() {

  return (
    <div className='container'>
      <h1>Presence List</h1>
      <input type="text" placeholder="Type the name" />
      <button type="button">Add</button>

      <Card name="Breno" time="10:55:24" />
      <Card name="Vanessa" time="08:10:15" />
    </div>
  )

}
