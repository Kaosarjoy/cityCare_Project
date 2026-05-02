import logoImg from '../../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <aside>
                {/* SVG এর বদলে আপনার প্রজেক্টের লোগো ব্যবহার করা হয়েছে */}
                <img src={logoImg} alt="CityCare Logo" className="h-14 w-14 object-contain" />
                <p className="mt-2">
                    <span className="text-xl font-bold">CityCare</span>
                    <br />
                    Reporting issues for a better city since 2026
                </p>
            </aside>
            <nav>
                <h6 className="footer-title text-primary">Services</h6>
                <a className="link link-hover">Issue Reporting</a>
                <a className="link link-hover">Infrastructure Audit</a>
                <a className="link link-hover">City Planning</a>
                <a className="link link-hover">Community Support</a>
            </nav>
            <nav>
                <h6 className="footer-title text-primary">Quick Links</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Active Coverage</a>
                <a className="link link-hover">Report Status</a>
            </nav>
            <nav>
                <h6 className="footer-title text-primary">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;