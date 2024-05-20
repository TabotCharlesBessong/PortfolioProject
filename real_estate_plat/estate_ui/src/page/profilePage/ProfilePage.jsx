import React from 'react'
import "./profilePage.scss"

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://avatars.githubusercontent.com/u/82298650?s=400&u=c779a9b416ecc7293f0cadfe7eacdba933c5418c&v=4"
                alt=""
              />
            </span>
            <span>
              Username: <b>Charles Tabot</b>
            </span>
            <span>
              E-mail: <b>charles.tabot@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          {/* <List /> */}
          <div className="title">
            <h1>Saved List</h1>
          </div>
          {/* <List /> */}
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">{/* <Chat /> */}</div>
      </div>
    </div>
  );
}

export default ProfilePage