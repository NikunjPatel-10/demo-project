import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = (props) => {
    return (
        <Card  className={classes.users}>
            <ul>
               {
                props.items.map((user)=>(
                    <li>{user.name} ({user.age} in Years)</li>
                ))
               }
            </ul>
        </Card>
    )
}

export default UsersList