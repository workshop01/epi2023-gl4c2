import React from 'react'
import { useContext } from 'react'
import { FeedbackContext } from '../../context/FeedbackContext'

export const FeedbackList = () => {
    const { list , remove ,edit , sort , search} = useContext(FeedbackContext)
    return (
        <div>
            <div>
                <a onClick={sort}>Sort</a>
                <input onChange={(event)=>search(event.target.value)} ></input>
            </div>
            {/* feedback card */}
            {list.map((feedback, index) => {
                return (
                    <div className='card' key={index}>

                        <button className='close'
                        onClick={()=>remove(feedback.id)}
                        >
                            x
                        </button>
                        <button className='edit'
                         onClick={()=>edit(feedback)}
                        >
                            E
                        </button>
                        <h3 className='num-display'>{feedback.rating}</h3>
                        <p> {feedback.text} </p>
                    </div>
                )
            })}

            {/* /feedback card */}
        </div>
    )
}
