import './index.css'

const ThumbnailItem = props => {
  const {imageDetails} = props
  const {thumbnailUrl, thumbnailAltText, imageAltText, imageUrl} = imageDetails

  onClickImg = () => {
    if (thumbnailAltText === imageAltText) {
      return <img src={imageUrl} />
    }
  }

  return (
    <div className="container">
      <li className="list-container">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={this.onClickImg}
        />
      </li>
    </div>
  )
}

export default ThumbnailItem
