import Link from "next/link";
import FooterListLayout from "./FooterListLayout";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="Footer bg-slate-600 text-white flex flex-col sm:flex-row justify-between">
        <FooterListLayout>
          <h2 className="font-bold mb-1">Shop Categories</h2>
          <Link href="#">Phones</Link>
          <Link href="#">Laptops</Link>
          <Link href="#">Desktops</Link>
          <Link href="#">Watches</Link>
          <Link href="#">TVs</Link>
          <Link href="#">Accessories</Link>
        </FooterListLayout>
        <FooterListLayout>
          <h2 className="font-bold mb-1">Customer Service</h2>
          <Link href="#">Contact Us</Link>
          <Link href="#">Shipping Policy</Link>
          <Link href="#">Returns and Exchanges</Link>
          <Link href="#">Watches</Link>
          <Link href="#">FAQs</Link>
        </FooterListLayout>
        <FooterListLayout>
          <h2 className="font-bold mb-1">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            mollitia, accusantium reprehenderit minus ducimus, vel eligendi in
            nesciunt vitae repudiandae unde.
          </p>
          <p>&copy; {new Date().getFullYear()}</p>
        </FooterListLayout>
        <FooterListLayout>
          <h2 className="font-bold mb-1">Follow Us</h2>
          <div className="flex gap-3">
            <Link href="#">
              <FaFacebook size={20} />
            </Link>
            <Link href="#">
              <FaSquareXTwitter size={20} />
            </Link>
            <Link href="#">
              <FaInstagram size={20} />
            </Link>
            <Link href="#">
              <IoLogoYoutube size={20} />
            </Link>
          </div>
        </FooterListLayout>
      </footer>
    </>
  );
};

export default Footer;
