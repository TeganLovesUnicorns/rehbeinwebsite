import React from 'react'
import Nav from '../components/Nav';

import '../styles/main.scss'


class AboutUs extends React.Component {
  render () {
    return (
        <div>
          <Nav />
          <h1>About Daniel Rehbein</h1>
          <p>Daniel Rehbein got his start in the production world back when he was just a young kid in the 7th grade.
          He decided that he was going to run the sound at church since no one else would, and it needed help.
          </p>
          {/* <style jsx>{`
            h1 {
              font-family: san-serif;
            }
          `}</style> */}
        </div>
    )
  }
}

export default AboutUs;