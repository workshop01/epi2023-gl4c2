import React from 'react'

export const Stats = ({ list }) => {
    var somme = list.reduce((acc, current) => +current.rating + acc, 0)
    return (
        <div className='feedback-stats'>
            <h4>Feedbacks : {list.length}</h4>
            <h4>average :

                {list.length > 0 ? (somme / list.length).toFixed(2) : 0}
            </h4>
        </div>
    )
}
