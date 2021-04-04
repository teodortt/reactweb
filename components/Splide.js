import { Splide, SplideSlide } from '@splidejs/react-splide'
// import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';


const SplideJSAbout = () => {

    return (

        <Splide
            options={{
                rewind: true,
                width: 1200,
                gap: '1rem',
                type: 'loop',
                perPage: 3,
                autoplay: true,
                breakpoints: {
                    640: {
                        perPage: 1,
                        fixedHeight: 150,
                        fixedWidth: 280
                    },
                }
            }}
        >

            <SplideSlide>
                <a target="_blank" href="https://helium.bg">
                    <img src="static/heliumBG.png" alt="helium.bg" className="splidec" />
                </a>
            </SplideSlide>

            <SplideSlide>
                <a target="_blank" href="https://visentto.com">
                    <img src="static/viSS.png" alt="visentto.com" className="splidec" />
                </a>
            </SplideSlide>

            <SplideSlide>
                <a target="_blank" href="https://centralparktours.net">
                    <img src="static/CPT.png" alt="centralparktours.net" className="splidec" />
                </a>
            </SplideSlide>

            <SplideSlide>
                <a target="_blank" href="https://heliumhosts.com">
                    <img src="static/hhosts.png" alt="heliumhosts.com" className="splidec" />
                </a>
            </SplideSlide>

        </Splide>

    )
}
export default SplideJSAbout;