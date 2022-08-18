function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer-center bg-neutral text-neutral-content">
      <p className="text-c">Copyright © {year} All rights reserved</p>
    </footer>
  );
}

export default Footer;
