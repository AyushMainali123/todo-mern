import React from 'react'
import { Button, TextField } from '@material-ui/core'
import './CreateUser.css'
const CreateUser = () => {
    return (
        <div className="createUser">
            <form className="createUser__form">
                <TextField label="Username" className="createUser__textField" />
                <Button variant="contained" color="primary" className="createUser__submit">Submit</Button>
            </form>
        </div>
    )
}

export default CreateUser
