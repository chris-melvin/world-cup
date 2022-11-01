import { Table } from './components/table'
import {worldcup} from "./assets/teams.json"

function App() {

  return (
   <section className='max-w-7xl mx-auto mt-24'>
    <div className='grid grid-cols-4 gap-3 '>{worldcup.map(({group, teams}, i)=><Table  group={group} teams={teams} key={`group-table-${i}`} />)}</div>
   </section>
  )
}

export default App
