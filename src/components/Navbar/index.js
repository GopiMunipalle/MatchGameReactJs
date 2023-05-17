import './index.css'

const Navbar = props => {
  const {score, timeRemaining} = props

  return (
    <nav className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="time-score-container">
        <p className="score">
          score:<span className="score-span">{score}</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="score-span">{timeRemaining} sec</p>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
