import { Pacifico } from "next/font/google";

// defining the font
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <>
      <nav className="navbar flex items-center justify-between gap-4 bg-slate-300 shadow-md min-h-10 sticky top-0">
        <div className="title">
          <p className={pacifico.className}>E-Store</p>
        </div>
        <div className="search">
          <p className="hidden md:block"> Search...</p>
        </div>
        <div className="flex justify-between gap-x-5">
          <div className="cart-count">
            <p>Cart Count</p>
          </div>
          <div className="user-menu">
            <p>User Menu</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
