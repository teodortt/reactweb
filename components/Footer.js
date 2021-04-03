import Link from "next/link";
export const Footer = () => (
    <footer>
        <div className="container">
            <ul>
                <li><Link href="/contacts">Контакти</Link></li>
                {/* <li><a href="#">Карта на сайта</a></li> */}
                <li><Link href="/about">За нас</Link></li>
            </ul>
            <p>&copy; {new Date().getFullYear()} ReactWeb Designs. All rights reserved.</p>
        </div>
    </footer>
);
