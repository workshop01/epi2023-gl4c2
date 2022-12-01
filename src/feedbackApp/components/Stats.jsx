import React from 'react'
import { useContext } from 'react'
import { FeedbackContext } from '../../context/FeedbackContext'

export const Stats = () => {
    const {test , list}= useContext(FeedbackContext)
    var somme = list.reduce((acc, current) => +current.rating + acc, 0)
    return (
        <div className='feedback-stats'>
            <h4>Feedbacks {test} : {list.length}</h4>
            <h4>average :

                {list.length > 0 ? (somme / list.length).toFixed(2) : 0}
            </h4>
        </div>                                                                                                  
    )
}
