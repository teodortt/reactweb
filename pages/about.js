import React, { useState, useEffect } from "react"
import emailjs from 'emailjs-com';
import dynamic from "next/dynamic";

const AboutPage = () => {

    useEffect(() => {
        document.title = 'За нас - Уеб Дизайн, СЕО Оптимизация, Онлайн Магазин, Реклама'
    }, [])

    const [show, setShow] = useState(false);
    const Gallery = dynamic(
        () => {
            return import("../components/Splide");
        },
        { ssr: false }
    );

    useEffect(() => {
        // when the component is mounted, the alert is displayed for 3 seconds
        setTimeout(() => {
            setShow(false);
        }, 3000);
    }, [show]);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_azblda7', 'template_0ni70ar', e.target, 'user_eW5yZ8izC59xnly9aF67d')
            .then((result) => {
                console.log(result.text);
                setShow(true);

            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="gradient-image text-white" style={{ paddingTop: '120px' }}>
            <h1>За нас</h1>

            <main class="container-fluid">
                <div className="row">
                    <div className="col-sm">
                        Нашата мисия е да интегрираме Вашата
                        корпоративна идентичност и бизнес развитие
                        в софтуерно решение, като предоставим нашия
                        богат опит в изграждането на различни уеб
                        базирани решения -
                        разработката на фирмени сайтове, онлайн магазини,
                        складови програми и индивидуални бизнес
                        софтуери в различни сфери на дейност.
              </div>
                </div>
                <div className="row">
                    <div className="col-sm">

                        <b> Програмни езици</b>
                        <p>
                            JavaScript, HTML 5, CSS, JavaScript, jQuery, Ajax, XML
                        </p>
                        <b>CMS системи</b>
                        <p>
                            OpenCart, Wordpress, Shopify.
                        </p>
                        <b>База данни</b>
                        <p>
                            MySql, MariaDB, Firebase, MongoDB
                        </p>
                        <b>ERP системи, интеграции със складов софтуер, и др.</b>
                        <p>
                            MoneyWorks, WebBuild Solution WareHouse, Colibri ERP, WebBuild ERP, Facebook Pixel, Google ReMarketing и др.
                        </p>
                        <b>Инсталиране, конфигуриране и поддръжка на наети (VPS) или лични сървъри</b>
                        <p>
                            Операционни системи:
                            Debian, Ubuntu, Redhad, CentOS
                        </p>
                    </div>
                </div>

                <h3>Последни проекти</h3>

                <div className="container">
                    <div className="row">
                        <div className="col-sm text-center">
                            <Gallery />
                        </div>
                    </div>
                </div>

            </main >


        </div >
    )
}
export default AboutPage