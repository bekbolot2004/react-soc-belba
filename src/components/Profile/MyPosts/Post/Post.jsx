import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return(
        <div>
            <div className={s.item}>
                <img src="https://i10.fotocdn.net/s119/4489425fbeb25f4f/user_l/2719745891.jpg" alt=""/>
                {props.message}
                <div>
                    <span>like {props.likesCount}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;