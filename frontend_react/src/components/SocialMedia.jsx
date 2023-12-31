import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href='https://www.linkedin.com/in/changferrisf' target='_blank'><div>
        <BsLinkedin />
        </div></a>
      <a href='https://github.com/FerrisChang' target='_blank'><div>
        <BsGithub />
      </div></a>
    </div>
  )
}

export default SocialMedia
