import React from 'react'
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Listt(props) {

    return (<>
        <div className=' listclass'>
            <Button className='listbut' size="large" color="error" onClick={() => props.onSelect(props.id)}><DeleteOutlineIcon /></Button>
            <li>
                {props.Text}
            </li>
        </div>
    </>
    )
}

export default Listt
