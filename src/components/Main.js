import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import kfc_vn_rollout from '../images/kfc_vn_rollout.jpg'
import farrierPic from '../images/farrier.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Outcome driven, I have worked on software and business 
            projects in the United States, the Philippines, and 
            Vietnam. I enjoy the challenge of a fast paced work 
            environment, but also firmly believe that the meaning 
            derived from work comes from interacting with those who 
            the work impacts. 
          </p>
          <p>
            I am looking to challenge myself by moving into work 
            that takes advantage of my understanding of the business 
            as a whole, and not only the fine details that make up the 
            tech stack. I take great enjoyment from my work, but am not 
            defined by it. Happy to get to know others, so please feel 
            free to reach out. 
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <p>
            I was pleased to take part as project manager of the 
            NCR point of sale rollout for KFC Vietnam. I was able 
            to assist with communication between the different business 
            partners, while also actively taking part in the software 
            and hardware setup. Pictured below, the first KFC to receive 
            the NCR system was a resounding success, and was a 48 hour 
            span I won’t soon forget. 
          </p>
          <span className="image main">
            <img src={kfc_vn_rollout} alt="" />
          </span>
          <p>
            Throughout my youth, and while finding my place after returning 
            from Vietnam (during the beginning of the COVID-19 pandemic) I 
            returned to my roots working as a farrier. This was a pivotal 
            time for me which allowed me to solidify my desires to move forward 
            in technology and development.
          </p>
          <p>
          I am looking to challenge myself by moving into work 
          that takes advantage of my understanding of the business 
          as a whole, and not only the fine details that make up the 
          tech stack. I take great enjoyment from my work, but am not 
          defined by it. Happy to get to know others, so please feel 
          free to reach out. 

          </p>
          <span className="image main">
            <img src={farrierPic} alt="" />
          </span>
          <p>
            I find many of the lessons learned from working with horses 
            to transfer well to tech and business, and wouldn’t change 
            this segment of my life for the world. 
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I take great pleasure in my hobbies (of which there are many). 
            When I’m not reading or riding motorcycles, I enjoy snowboarding, 
            fishing, and traveling. While several of these have been tampered 
            down by the current pandemic, I look forward to resuming activities 
            once we are able to return to normal. 
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            Please connect with me through Linkedin, or 
            <a href = "mailto: colin@colinreed.me">email.</a>
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/ColinR1994"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/colin.reed.75873/" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/colinr1994/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/colinr1994"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
