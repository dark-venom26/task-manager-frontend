import './createTask.css'

function CreateTask() {
  return (
    <div className='createTask'>
        <div className="container">
            <div className="heading1">Create Task</div>
            <form action="" method="post" className='createform'>
                <input type="text" placeholder='Enter task...'/>
                <button type="submit" className='createBtn'>
                    <img src="createbtn.svg" alt="" />
                </button>
            </form>
        </div>
    </div>
  )
}

export default CreateTask