import { useRouter } from "next/router"
import Transition from "./Transition"
import { Footer } from './Footer'
import { Nav } from './Nav';

const Layout = ({ children }) => {
    const router = useRouter()
    return (
        <div>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            {/* <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-DXN9NX1ETW`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-DXN9NX1ETW', {
                        page_path: window.location.pathname,
                        });
                    `,
                }}
            /> */}
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
            <Nav />
            <Transition location={router.pathname}>
                <main>{children}</main>
            </Transition>
            <Footer />
        </div>
    )
}
export default Layout

