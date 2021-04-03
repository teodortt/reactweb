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
                    },
                }
            }}
        >

            <SplideSlide>
                <a target="_blank" href="https://helium.bg">
                    <img src="https://i.postimg.cc/DZx43cC4/heliumBG.png" alt="helium.bg" />
                </a>
            </SplideSlide>

            <SplideSlide>
                <a target="_blank" href="https://visentto.com">
                    <img src="https://i.postimg.cc/nrMjFQ5R/viSS.png" alt="visentto.com" />
                </a>
            </SplideSlide>

            <SplideSlide>
                <a target="_blank" href="https://centralparktours.net">
                    <img src="https://i.postimg.cc/hGb7pnTr/CPT.png" alt="centralparktours.net" />
                </a>
            </SplideSlide>

            <SplideSlide>
                <a target="_blank" href="https://heliumhosts.com">
                    <img src="https://i.postimg.cc/cHxtzzcN/hh-com.png" alt="heliumhosts.com" />
                </a>
            </SplideSlide>

        </Splide>

    )
}
export default SplideJSAbout;