import React, { useState } from 'react';
import "./chat.scss";

const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/82298650?s=400&u=c779a9b416ecc7293f0cadfe7eacdba933c5418c&v=4"
            alt=""
          />
          <span>Charles Tabot</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/82298650?s=400&u=c779a9b416ecc7293f0cadfe7eacdba933c5418c&v=4"
            alt=""
          />
          <span>Charles Tabot</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/82298650?s=400&u=c779a9b416ecc7293f0cadfe7eacdba933c5418c&v=4"
            alt=""
          />
          <span>Charles Tabot</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/82298650?s=400&u=c779a9b416ecc7293f0cadfe7eacdba933c5418c&v=4"
            alt=""
          />
          <span>Charles Tabot</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/82298650?s=400&u=c779a9b416ecc7293f0cadfe7eacdba933c5418c&v=4"
            alt=""
          />
          <span>Charles Tabot</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/82298650?s=400&u=c779a9b416ecc7293f0cadfe7eacdba933c5418c&v=4"
            alt=""
          />
          <span>Charles Tabot</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://avatars.githubusercontent.com/u/82298650?s=400&u=c779a9b416ecc7293f0cadfe7eacdba933c5418c&v=4"
                alt=""
              />
              Charles Tabot
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat