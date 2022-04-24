// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props

  const onPlayAgainClicked = () => {
    playAgain()
  }

  const winOrLoseText = score === 12 ? 'You Won' : 'You Lose'
  const winOrLoseImage =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const status = score === 12 ? 'Best Score' : 'Score'

  return (
    <div className="result-container">
      <img className="result-image" src={winOrLoseImage} alt="win or lose" />
      <div className="score-container">
        <h1 className="result-text">{winOrLoseText}</h1>
        <p className="score-text"> {status}</p>
        <p className="result-score">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onPlayAgainClicked}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
