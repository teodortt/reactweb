import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

export const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1200) {
                setIsMobile(true);
                // console.log('true')
            } else {
                setIsMobile(false);
                // console.log('false')
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function hideMenu() {
        document.getElementById("mobileMenu").click();
    }

    return (
        <div className="nav">

            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title" role="button">
                    <a href="/">
                        <img width={'70px'} src="static/logonew.png" alt="Logo" />
                    </a>
                </div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check" id="mobileMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className="nav-links" onClick={hideMenu}>
                <Link href="/"><a className={router.pathname == "/" ? "active" : ""}>Начало</a></Link>
                <Link href="/services"><a className={router.pathname == "/services" ? "active" : ""}>Услуги</a></Link>
                {/* <Link href="/portfolio"><a className={router.pathname == "/portfolio" ? "active" : ""}>Портфолио</a></Link> */}
                <Link href="/about"><a className={router.pathname == "/about" ? "active" : ""}>За нас</a></Link>
                <Link href="/contacts"><a className={router.pathname == "/contacts" ? "active" : ""}>Контакти</a></Link>
            </div>
        </div>
    );
};
