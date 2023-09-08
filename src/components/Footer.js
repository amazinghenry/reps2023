const Footer = () => {
    const thisYear = new Date().getFullYear()
    return ( 
        <footer className="container-fluid">
            <h4 className="footer-title">
                Have any Questions ?
            </h4>
            <p className="footer-phone">08056198826, 09084441671 </p>
            <p className="footer-email">conference@reps.com</p>
            <p className="copyright">© {thisYear} Marketplace Alliance All rights Reserved</p>
        </footer>
     );
}
 
export default Footer;