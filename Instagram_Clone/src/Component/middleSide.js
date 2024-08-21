import React from 'react'
import './middleSide.css'
import story from '../story.json';
import Post from './Post/post';
const MiddleSide = () => {
    const storys = story.story;
    return (
        <div className="middleHomeSide">
            <div className="storyBlock">
                {
                    storys?.map((item, index) => {
                        return (
                            <div className="storyParticular">
                                <div className="imageDiv">
                                    <img  className='statusImg' src={item.img}/>
                                </div>
                                <div className="profileNameprofileName">{item.name}</div>
                            </div>
                        );
                    })
            }
            </div>
            <div className="postSection">
                
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}
export default MiddleSide