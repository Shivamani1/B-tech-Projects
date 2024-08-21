import React from 'react'
import './rightSide.css'
import profileImg from '../assets/profile.jpg'
const RightSide = () => {
    return (
        <div className="rightSideHome">
            <div className="topProfileRight">
                <div className="leftRightProfile">
                    <div className="imageDivRightSide">
                        <img className="imageRightSideProfile" src={profileImg} />
                    </div>
                    <div className="userNameBlock">
                        <div className="userNameRightSide">shivamanikiran</div>
                        <div className="userFullName">Shivamani Kiran Kurikala</div>
                    </div>
                </div>
                <div className="switchBtn">
                    Switch
                </div>
            </div>
            <div className="bottomRightSide">
                <div className="suggestedBlock">
                    <div className="suggestedForYou">Suggested for you</div>
                    <div className="seeAll">See All</div>
                </div>
                <div className="followBlockRightSide">
                    <div className="topProfileRightBottomProfile">
                        <div className="leftRightProfile">
                            <div className="imageDivRightSide">
                                <img className="imageRightSideProfile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQk3sbubAvl77V0LyuCIhMBxLC407EmzQBfQ&s" />
                            </div>
                            <div className="userNameBlock">
                                <div className="userNameRightSide">rajesh_kaparla</div>
                                <div className="userFullName">New to Instagram</div>
                            </div>
                        </div>
                        <div className="switchBtn">
                            Follow
                        </div>
                    </div>
                    <div className="topProfileRightBottomProfile">
                        <div className="leftRightProfile">
                            <div className="imageDivRightSide">
                                <img className="imageRightSideProfile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5rJ9bo6bWmO5V55oahnFe3fH8B38cp6guQ&s" />
                            </div>
                            <div className="userNameBlock">
                                <div className="userNameRightSide">ragav_raja</div>
                                <div className="userFullName">New to Instagram</div>
                            </div>
                        </div>
                        <div className="switchBtn">
                            Follow
                        </div>
                    </div>
                    <div className="topProfileRightBottomProfile">
                        <div className="leftRightProfile">
                            <div className="imageDivRightSide">
                                <img className="imageRightSideProfile" src="data:image/jpeg;base64,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" />
                            </div>
                            <div className="userNameBlock">
                                <div className="userNameRightSide">its_madhu</div>
                                <div className="userFullName">New to Instagram</div>
                            </div>
                        </div>
                        <div className="switchBtn">
                            Follow
                        </div>
                    </div>
                    <div className="topProfileRightBottomProfile">
                        <div className="leftRightProfile">
                            <div className="imageDivRightSide">
                                <img className="imageRightSideProfile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s"/>
                            </div>
                            <div className="userNameBlock">
                                <div className="userNameRightSide">little_prince</div>
                                <div className="userFullName">New to Instagram</div>
                            </div>
                        </div>
                        <div className="switchBtn">
                            Follow
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RightSide