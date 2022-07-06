import './footer.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Container } from '@mui/system';
import DraftsIcon from '@mui/icons-material/Drafts';

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="wrapper">
          <div className="left">
            <div className="logo">
              <span>Electronic Shop</span>
            </div>
            <div className="shop_des">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, corrupti ipsa repellendus, libero autem consequatur distinctio error magni ex cumque illo laborum consectetur. Id fuga dolore quibusdam, quas et optio?</p>
            </div>
            <div className="newsletter">
              <input type="email" placeholder='Sign up for Newsletter...' />
              <DraftsIcon className='icon' />
            </div>
          </div>
          <div className="middle">
            <div className="middle-title">
              <span>Quick Links</span>
            </div>
            <div className="footer-links">
              <div className="footer-link">
                Home
              </div>
              <div className="footer-link">
                Products
              </div>
              <div className="footer-link">
                Cart
              </div>
            </div>
          </div>
          <div className="right">
            <div className="footer-title">
              <span>Contact</span>
            </div>
            <div className="footer_contact_items">
              <div className="footer_contact_item">
                <LocationOnIcon className='icon' />
                Kathmandu, Tokha, Grande Villa
              </div>
              <div className="footer_contact_item">
                <LocalPhoneIcon className='icon' />
                +977-98123456
              </div>
              <div className="footer_contact_item">
                <EmailIcon className='icon' />
                nsrapoudel@gmail.com
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer