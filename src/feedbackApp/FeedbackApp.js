import React, { useState } from 'react'
import { FeedbackProvider } from '../context/FeedbackContext'
import { FeedbackForm } from './components/FeedbackForm'
import { FeedbackList } from './components/FeedbackList'
import { Header } from './components/Header'
import { Stats } from './components/Stats'
import './feedback.css'
export const FeedbackApp = () => {
   
    return (
        <div>

            <FeedbackProvider>
                {/* header */}
                <Header></Header>
                {/*  / header */}


                <div className="container">
                    {/* feedback form */}
                    <FeedbackForm  />
                    {/* / feedback form */}
                    {/* feedback stats */}
                    <Stats />
                    {/* /feedback stats */}
                    {/* feedbacks */}
                    <FeedbackList  />
                    {/* /feedbacks */}
                </div>
            </FeedbackProvider>
        </div>
    )
} 
