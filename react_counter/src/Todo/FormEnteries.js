import React from 'react'
// import List from './List'

function FormEnteries() {
  return (
<>
<form className='todoform'>
<div className='col-12 col-lg-10 d-flex align item center gap-3 margin 3 0'>
<div className='col-12 col-md-4'>
<label htmlFor="name" className='text-white'> Name</label>
<br />
<input type="text" className='rounded-3 border-0' />
</div>
<div className='col-12 col-md-4'>
<label htmlFor="description"  className='text-white'> Description</label>
<br />
<input type="text" className='rounded-3 border-0'/>
</div>
<div className='col-12 col-md-2 ms-auto'>
  <button style={{border:"none",borderRadius:"20px",padding:"5px 10px",background:"#FF9900"}}>Add Todos</button>
</div>

</div>
</form>
{/* <List/> */}

</>
  )
}

export default FormEnteries