import React, { useState, useEffect } from "react"
import dynamic from "next/dynamic";
import Head from "next/head";

const AboutPage = () => {

    // useEffect(() => {
    //     document.title = 'За нас - Уеб Дизайн, СЕО Оптимизация, Онлайн Магазин, Реклама'
    // }, [])

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

    return (
        <div className="gradient-image text-white" style={{ paddingTop: '120px' }}>
            <Head>
                <title>За нас - Уеб Дизайн, СЕО Оптимизация, Онлайн Магазин, Реклама, Дигитални Услуги</title>
                <meta name="description" content="Изграждане на Уебсайт, Онлайн Магазин, СЕО Оптимизация и Реклама на достъпна цена. Дигитален маркетинг, Изградете сайт за вашата фирма" />
                <meta name="keywords" content="Онлайн магазин, Уебсайт, Уеб дизайн, Изработка, Wordpress, Opencart, Реклама, евтин уебсайт, Google adwords, graphic design, web developer, фирмен уебсайт" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
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
                            HTML5, CSS, JavaScript(jQuery), PHP, XML
                        </p>
                        <b>Frameworks</b>
                        <p>
                            Bootstrap, ReactJS, NextJS, Laravel
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