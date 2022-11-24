import React, { useState } from 'react'
import { FeedbackForm } from './components/FeedbackForm'
import { FeedbackList } from './components/FeedbackList'
import { Header } from './components/Header'
import { Stats } from './components/Stats'
import './feedback.css'
export const FeedbackApp = () => {
    const [list, setList] = useState([])
    const [listCopy, setListCopy] = useState([])
    const send = (e , feed) => {
        e.preventDefault() // annuler l'action par défaut du bouton ( refresh)
        if(feed.id){
            setList(list.map((element)=> element.id == feed.id ? feed : element))
        }else{
            const nextid = list.length >0 ?list[0].id + 1 : 1
            setList([{...feed , id : nextid}, ...list])
            setListCopy([{...feed , id : nextid}, ...list])

        }
        
        console.log(feed)
    }
    const remove = (id)=>{
        setList(list.filter(item=> item.id != id))
    }

    const [editedItem , setItem] = useState({})
    const edit = (feedback)=>{
        setItem(feedback)
    }

    const sort = ()=>{
        setList([...list.sort((a , b)=> a.rating-b.rating)])
    }

    const search = (value)=>{
        setList(listCopy.filter((element)=> element.text.toLowerCase().includes(value.toLowerCase())))
    }

    return (
        <div>

            {/* header */}
            <Header></Header>
            {/*  / header */}


            <div className="container">
                {/* feedback form */}
                <FeedbackForm send={send} editedItem={editedItem} />
                {/* / feedback form */}
                {/* feedback stats */}
               <Stats list={list}/>
                {/* /feedback stats */}
                {/* feedbacks */}
                <FeedbackList list={list} remove={remove} edit={edit} sort={sort} 
                search={search}/>
                {/* /feedbacks */}
            </div>
        </div>
    )
} 
