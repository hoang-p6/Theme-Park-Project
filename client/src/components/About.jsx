import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="about">
        <h2>About Us</h2>
        <h4>Our mission</h4>
        <div>
          <big>
            Our mission is to provide honest reviews of rollercoasters to help
            consumers make informed decisions on to which rollercoaster they
            should ride. We strive to be a trusted source of information,
            providing detailed analysis and evaluation of each rollercoaster
            reviewed. Our aim is to simplify the decision-making process and
            save time for our viewers by presenting clear and concise
            information that is easy to understand.
          </big>
        </div>
        <h4>Our Statement</h4>
        <big>
          We are dedicated to providing viewers with the most comprehensive and
          reliable reviews of rollercoasters. Our team of experts research and
          test each ride thoroughly to ensure that our reviews are accurate,
          objective, and up-to-date. We believe that informed thrill riders make
          better decisions after looking into our descriptions, and we are
          committed to helping our viewers find the best rollercoasters for
          their needs. You can trust our reviews to provide you with the best
          information you need to make an informed choice.
        </big>
        <div>
          <img
            className="about-img"
            src="https://thumbs.gfycat.com/HonoredTartDrake.webp"
            alt="theme-park"
          ></img>
        </div>
      </div>
      <footer>
        <Link to="https://github.com/hoang-p6/Theme-Park-Project">
          <img
            className="github"
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          ></img>
        </Link>
      </footer>
    </div>
  )
}

export default About
