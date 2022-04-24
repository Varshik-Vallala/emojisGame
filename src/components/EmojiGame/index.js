/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

const maintainUniqueList = []

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, isGameOver: false}

  onClickEmojiCard = id => {
    console.log(id)

    if (!maintainUniqueList.includes(id)) {
      maintainUniqueList.push(id)
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      if (maintainUniqueList.length === 12) {
        const {topScore} = this.state
        console.log(topScore)

        // const maxScore = score > topScore ? score : topScore

        this.setState({
          isGameOver: true,
          // score: 0,
          topScore: 12,
        })
      }
      console.log(maintainUniqueList.length)
    } else {
      const {score, topScore} = this.state

      const maxScore = score > topScore ? score : topScore

      this.setState({
        isGameOver: true,
        // score: 0,
        topScore: maxScore,
      })
      console.log('game over')
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickPlayAgain = () => {
    this.setState({isGameOver: false, score: 0})
    maintainUniqueList.length = 0
  }

  render() {
    // const {emojisList} = this.props
    const emojisList = this.shuffledEmojisList()
    // console.log(emojisList)

    console.log(maintainUniqueList)

    const {score, topScore, isGameOver} = this.state

    return (
      <>
        <NavBar score={score} topScore={topScore} gameOver={isGameOver} />
        <div className="emojis-container">
          {isGameOver ? (
            <WinOrLoseCard score={score} playAgain={this.onClickPlayAgain} />
          ) : (
            <ul className="emojis-list">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  clickCard={this.onClickEmojiCard}
                />
              ))}
            </ul>
          )}
        </div>
      </>
    )
  }
}

export default EmojiGame
