import React from 'react'

export const FeedbackList = ({ list , remove ,edit}) => {
    return (
        <div>
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
