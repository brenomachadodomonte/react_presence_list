import { Card } from '../../components/Card'
import './styles.css'


export function Home() {

  return (
    <div className='container'>
      <h1>Presence List</h1>
      <input type="text" placeholder="Type the name" />
      <button type="button">Add</button>

      <Card />
      <Card />
      <Card />
    </div>
  )

}
