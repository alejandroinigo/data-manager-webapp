import React from 'react';
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <header data-testid="navbar" className={styles.navbar}>
          <div>
            <div className={styles.logo}>
              <Image
                  src="/kinglogo.webp"
                  alt="King logo"
                  width={100}
                  height={59}
              />
            </div>
            <div className={styles.menu}>
              <a href="">Home</a>
            </div>
          </div>
      </header>
    </>
  );
}

export default Navbar;
