// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameOver} = props
  return (
    <nav className="navbar">
      <div className="navbar-sub-container">
        <div className="make-row">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            alt="emoji logo"
          />
          <h1 className="emoji-heading">Emoji Game</h1>
        </div>
        {gameOver ? null : (
          <div className="make-row ">
            <p className="score">Score: {score}</p>
            <p>Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
