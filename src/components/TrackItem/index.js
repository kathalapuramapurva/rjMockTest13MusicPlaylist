import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const TrackItem = props => {
  const {trackDetails, removeTrack} = props
  const {id, imageUrl, name, genre, duration} = trackDetails
  const onClickRemoveTrack = () => {
    removeTrack(id)
  }
  return (
    <li className="each-track">
      <img src={imageUrl} alt="track" className="track-image" />
      <div className="name-genre">
        <p className="track-name">{name}</p>
        <p className="track-genre">{genre}</p>
      </div>
      <p className="track-duration">{duration}</p>
      <button
        type="button"
        className="delete-button"
        onClick={onClickRemoveTrack}
        data-testid="delete"
      >
        <AiOutlineDelete
          size={20}
          color="#ffffff"
          aria-label="AiOutlineDelete"
        />
      </button>
    </li>
  )
}

export default TrackItem
