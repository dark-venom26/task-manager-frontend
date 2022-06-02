import './timeline.css'

function Timeline() {
  return (
    <article className='timeline'>
        <div className="tasksBlock">
            <div className="task">
                <div className="status"><img src="status.svg" alt="" /></div>
                <div className="taskName">Task 1</div>
            </div>
        </div>
    </article>
  )
}

export default Timeline