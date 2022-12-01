import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FeedbackContext } from '../../context/FeedbackContext'

export const FeedbackForm = () => {
    const { send, editedItem }=useContext(FeedbackContext)
    const [feed, setFeed] = useState({
       id : undefined, text: '', rating: 1
    })
    const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    useEffect(() => {
        if (editedItem.id) {
            console.log(editedItem)
            setFeed(editedItem)
        }
    }, [editedItem])

    //setFeed(editedItem)
    return (
        <div className='card'>
            <h2>Leave your feedback</h2>

            <form>
                <ul className='rating'>
                    {
                        tab.map((nb) => {
                            return (
                                <li key={nb}>
                                    <input type="radio" name="rating" value={nb} id={nb}
                                        checked={feed.rating == nb}
                                        onChange={(e) => setFeed({ ...feed, rating: e.target.value })}
                                    />
                                    <label htmlFor={nb}>{nb}</label>
                                </li>
                            )
                        })
                    }

                </ul>
                <div className='input-group'>
                    <input onChange={(e) => setFeed({ ...feed, text: e.target.value })}
                        value={feed.text}
                    ></input>
                    <button className="btn btn-secondary"
                        onClick={(e) => {
                            send(e, feed);
                            setFeed({ text: '', rating: 1 })
                        }
                        }>
                        send</button>
                </div>
            </form>
        </div>
    )
}
