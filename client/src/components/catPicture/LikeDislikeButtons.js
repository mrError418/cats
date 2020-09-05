import React from 'react'
import './LikeDislikeButtons.css';

export default function LikeDislikeButtons(props) {
    return (
        <div style={{position:"relative"}}>
            <div className="Btns"  style={{position:"absolute"}}>
                <div className='LikeBtn Btn' onClick={props.like} id={props.id} > I like it</div>
                <div className='DisLikeBtn Btn' onClick={props.dislike} id={props.id} >Not as bad</div>
            </div>
        </div>
    )
}
