import profileImage from '../assets/chuck.png'
import Link from './Link'

const Hero = () => {
  return (
    <section className="hero divider">
        <div className="image">
            <img src={profileImage} alt="Photo of Hans" />
        </div>
        <div>
          <h1>Hans Steffens</h1>
          <p>Full-Stack Web Developer</p>
          <p>Medellin, Colombia</p>
          <Link id="#projects">Check out my work</Link>
        </div>
    </section>
  )
}

export default Hero