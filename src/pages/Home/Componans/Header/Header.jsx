
import './Header.css'

export default function Header() {
  return (
    <>
        <div className='background'/>
        <div className="overlay " />
        <div className='header'>
            <p>July 22 - 26 In San Francisco</p>
            <h1>Web Design Conference</h1>
            <div className='btn-header'>
                <button className='learn'>LEARN MORE</button>
                <button className='register'>REGISTER NOW</button>
            </div>
        </div>
    </>
  )
}
