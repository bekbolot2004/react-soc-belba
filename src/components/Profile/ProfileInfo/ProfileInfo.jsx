import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <did>
            <div>
                <img className={s.content_img} src="http://cdn.knowledgehi.com/1920x1080/20121025/japan%20tokyo%20cityscapes%20skylines%20buildings%20skyscrapers%20asians%20asia%20asian%20architecture%20seoul%20city%20skyl_www.knowledgehi.com_21.jpg" alt=""/>
            </div>
            <div className={s.desriptionBlock}>
                ava + description
            </div>
        </did>
    );
}

export default ProfileInfo;