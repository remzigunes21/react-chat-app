import React from 'react'
import { Button } from 'semantic-ui-react'

export const Home = (props) => {
    return (
        <div>
            <Button onClick={()=>{props.history.push("/login")}}>Click</Button>
        </div>
    )
}
