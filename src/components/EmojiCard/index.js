// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickCard} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const onClickEmoji = () => {
    clickCard(id)
  }

  return (
    <li className="emoji-card" onClick={onClickEmoji}>
      <button type="button" className="emoji-button">
        <img className="emoji-image" src={emojiUrl} alt={emojiName} />
        <span>{id}</span>
      </button>
    </li>
  )
}

export default EmojiCard
