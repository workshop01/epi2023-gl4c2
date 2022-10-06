import React from 'react'

export const Header = (props) => {
    console.log(props)
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}
