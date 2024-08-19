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
                                <img className="imageRightSideProfile" src={profileImg} />
                            </div>
                            <div className="userNameBlock">
                                <div className="userNameRightSide">shivamanikiran</div>
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
                                <img className="imageRightSideProfile" src={profileImg} />
                            </div>
                            <div className="userNameBlock">
                                <div className="userNameRightSide">shivamanikiran</div>
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
                                <img className="imageRightSideProfile" src={profileImg} />
                            </div>
                            <div className="userNameBlock">
                                <div className="userNameRightSide">shivamanikiran</div>
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
                                <img className="imageRightSideProfile" src={profileImg} />
                            </div>
                            <div className="userNameBlock">
                                <div className="userNameRightSide">shivamanikiran</div>
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