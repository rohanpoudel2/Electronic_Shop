import './banner.scss';

const Banner = ({ url1, url2 }) => {
  return (
    <div className='banner'>
      <div className="left">
        <img src={url1} alt="bannerimg" />
      </div>
      <div className="right">
        <img src={url2} alt="banner2img" />
      </div>
    </div>
  )
}

export default Banner