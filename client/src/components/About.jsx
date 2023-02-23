import { Link } from 'react-router-dom'

const About = () => {
  return (
  <div>
    <div className="about">
      <h2>About Us</h2>
      <h4>Our mission</h4>
      <div>
      <big>We strive to find the best roller coasters in the world. Through our own experiences and stories from others we believe we have a top tier list.</big>
      </div>
      <h4>How You Can Help</h4>
      <big>If you're an adrenaline junkie like us, navigate through this page to see the best roller coasters around the world. If you know of a ride that you feel is deserving, feel free to add it to our list. Click on them to find your favorites. If you rode any of them in the past leave your own review!</big>
      <div>
        <img className='about-img'src='https://thumbs.gfycat.com/HonoredTartDrake.webp' alt='theme-park'></img>
        </div>
        </div>
        <footer>
          <Link to='https://github.com/hoang-p6/Theme-Park-Project'>
          <img className="github" src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'></img>
          </Link>
        </footer>
    </div>
  )
}

export default About