import './footer.css'
import logo from '../img/logo.png'
import { GoLocation } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdCameraAlt } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";



function Footer(){
    return <>
    <section className="footer">
      <div className='garden-email'>
        <div className='garden-item'>
          <div className='garden-img part'>
          <div className='garden-img-01'>
            <img src='/public/footer icons/Frame 02.png'/>
            </div>
             <div className='garden-img-02'>
            <img src='/public/footer icons/Frame 01.png'/>
           </div>
         </div>
          <div className='garden-title'>Garden Care</div>
          <div className='garden-text'>We are an online plant shop offering a wide range of cheap and trendy plants.</div>
        </div>
       
        <div className='garden-item'>
          <div className='garden-img'>
          <img src='/public/footer icons/Group 03.png'/>
          </div>
          <div className='garden-title'>Plant Renovation</div>
          <div className='garden-text'>We are an online plant shop offering a wide range of cheap and trendy plants.</div>
        </div>
        <div className='garden-item'>
          <div className='garden-img'>
          <img src='/public/footer icons/frame 4.png'/>
          </div>
          <div className='garden-title'>Watering Graden</div>
          <div className='garden-text'>We are an online plant shop offering a wide range of cheap and trendy plants.</div>
        </div>
       
        <div className='email-letter'>
            <div className='email-title'>Would you like to join newsletters?</div>
            <form className='form'>
                <input type='email' placeholder='enter your email address...' className='form-input'/>
                <button type='submit' className='form-button'>Join</button>
            </form>
            <div className='email-text'>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </div>
        </div>
      </div>
     
      <div className='logo-sect'>
      <div className="img">
       <img  src={logo}/>
       <div className="title">GREENSHOP</div>
       </div>
      <div className='adress'>
        <div className='adress-icon'><GoLocation size={20} fill='hsl(132, 40%, 46%)'/></div>
        <div className='adress-text'>70 West Buckingham Ave.
Farmingdale, NY 11735</div>
      </div>
      <div className='email-adress'>
         <div className='email-icon'><MdOutlineMail size={20} fill='hsl(132, 40%, 46%)'/></div>
        <div className='email-text'>contact@greenshop.com</div>
        </div>
      <div className='phone'>
      <div className='phone-icon'><FaPhoneVolume size={20} fill='hsl(132, 40%, 46%)'/></div>
        <div className='phone-text'>+88 01911 717 490</div>
      </div>
     </div>
      <div className='short-navig'>
        <div className='nav-item'>
            <div className='nav-title'>My Account</div>
            <div className='nav-link'>My Account</div>
            <div className='nav-link'>Our stores</div>
            <div className='nav-link'>Contact us</div>
            <div className='nav-link'>Career</div>
            <div className='nav-link'>Career</div>
        </div>
        <div className='nav-item'>
            <div className='nav-title'>Help & Guide</div>
            <div className='nav-link'>Help Center</div>
            <div className='nav-link'>How to Buy</div>
            <div className='nav-link'>Shipping & Delivery</div>
            <div className='nav-link'>Product Policy</div>
            <div className='nav-link'>How to Return</div>
        </div>
        <div className='nav-item'>
            <div className='nav-title'>Categories</div>
            <div className='nav-link'>House Plants</div>
            <div className='nav-link'>Potter Plants</div>
            <div className='nav-link'>Seeds</div>
            <div className='nav-link'>Small Plants</div>
            <div className='nav-link'>Accessories</div>
        </div>
        <div className='navig-links'>
            <div className='navig-group'>
            <div className='nav-title'>Social Media</div>
            <div className='navig-icons'>
                <span className='icon'><FaFacebookF size={20} fill='hsl(132, 40%, 46%)'/></span>
                <span className='icon'><FaInstagram size={20} fill='hsl(132, 40%, 46%)'/></span>
                <span className='icon'><FaTwitter size={20} fill='hsl(132, 40%, 46%)'/></span>
                <span className='icon'><FaLinkedinIn size={20} fill='hsl(132, 40%, 46%)'/></span>
                <span className='icon'><MdCameraAlt size={20} fill='hsl(132, 40%, 46%)'/></span>
            </div>
            </div>
            <div className='navig-group'>
            <div className='nav-title'>We accept</div>
            <div className='navig-icons'>
                <img src='../../footer icons/paypall.png'/>
            </div>
            </div>
        </div>
      </div>
      <div className='ending'>© 2021 GreenShop. All Rights Reserved.</div>
    </section>
    </>
}
export default Footer;