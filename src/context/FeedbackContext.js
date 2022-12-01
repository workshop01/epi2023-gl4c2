import React, { useState } from 'react'
import { createContext } from 'react'

export const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) => {
    const [list, setList] = useState([])
    const [listCopy, setListCopy] = useState([])
    const send = (e, feed) => {
        e.preventDefault() // annuler l'action par défaut du bouton ( refresh)
        if (feed.id) {
            setList(list.map((element) => element.id == feed.id ? feed : element))
        } else {
            const nextid = list.length > 0 ? list[0].id + 1 : 1
            setList([{ ...feed, id: nextid }, ...list])
            setListCopy([{ ...feed, id: nextid }, ...list])

        }

        console.log(feed)
    }
    const remove = (id) => {
        setList(list.filter(item => item.id != id))
    }

    const [editedItem, setItem] = useState({})
    const edit = (feedback) => {
        setItem(feedback)
    }

    const sort = () => {
        setList([...list.sort((a, b) => a.rating - b.rating)])
    }

    const search = (value) => {
        setList(listCopy.filter((element) => element.text.toLowerCase().includes(value.toLowerCase())))
    }





    const test = "Test context"
    return (
    <FeedbackContext.Provider value={{test  , send, editedItem , list , remove ,edit , sort , search }}>
        {children}

    </FeedbackContext.Provider>
  )
}
