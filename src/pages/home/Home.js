import CreateTask from '../../components/createTask/CreateTask'
import Timeline from '../../components/timeline/Timeline'
import './home.css'

function Home() {
  return (
    <div className="home">
      <CreateTask/>
      <Timeline/>
    </div>
  )
}

export default Home