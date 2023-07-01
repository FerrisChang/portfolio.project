import React from 'react'
import { motion } from 'framer-motion'
import './About.scss'

const abouts = [
  {title: 'Web Development', Description: 'I am a good web developer.', imgUrl: ''},
  {title: 'Web Design', Description: 'I am a good web developer.', imgUrl: ''},
  {title: 'Web Animations', Description: 'I am a good web developer.', imgUrl: ''},
  {title: 'UI/UX', Description: 'I am a good web developer.', imgUrl: ''},
  {title: 'Front end', Description: 'I am a good web developer.', imgUrl: ''},
  {title: 'Back end', Description: 'I am a good web developer.', imgUrl: ''},



]
const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I Know That 
        <span>Good Design</span>
        <br />
        means
        <span>Good Business</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
            >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
              <p className='p-text' style={{ marginTop: 20 }}>{about.Description}</p>

            </motion.div>
        ))}
      </div>
    </>
  )
}

export default About
