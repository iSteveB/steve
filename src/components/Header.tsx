import Logo from "./Logo";
import Link from "next/link";
import SocialNetwork from "./SocialNetworks";

const Header = () => {
    return (
        <div>
            <Logo />
            <Link href="/">Accueil</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contactez-moi</Link>
            <SocialNetwork />
        </div>
    );
};

export default Header;