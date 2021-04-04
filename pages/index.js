import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import dynamic from "next/dynamic";

import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Gallery = dynamic(
  () => {
    return import("../components/Splide");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Изработка на Уеб Сайт, Онлайн Магазин и СЕО Оптимизация, Реклама, Маркетинг</title>
        <meta name="description" content="Изработка на Уеб Сайт, Онлайн Магазин, СЕО Оптимизация и Реклама на достъпна цена. Дигитален маркетинг" />
        <meta name="keywords" content="Онлайн магазин, Уебсайт, Уеб дизайн, Изработка, Wordpress, Opencart, Реклама, евтин уебсайт, Google adwords, graphic design, web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>


        <header className="bg-image">
          <div className="container mt-5">
            <h1>React Web</h1>
            <h2>Web Дизайн  |  SEO Оптимизация  |  24/7 Поддръжка</h2>
            <Link href="/contacts"><a className="btn btn-success">Свържи се с нас</a></Link>
          </div>
        </header>

        <div className="wrapper">

          <div className="section-title text-center pb-5">
            <h3 className="pb-4">Изработка и дизайн на уебсайт</h3>
              Ние от ReactWeb Ви предлагаме качествено изработване на фирмен,
              личен уебсайт или онлайн магазин с индивидуален дизайн <br></br>
               и достъп до админ панел за управление на съдържанието (CMS).
            </div>

          <div className="row text-center">


            <div className="col-sm col-rev">
              <i><img className="rev-icons" alt="web design" src="static/web-design.png" /></i>
              <Link href="/services#website"><b type="button">Изработка на сайт и професионален уеб дизайн.</b></Link>
            </div>

            <div className="col-sm col-rev">
              <i><img className="rev-icons" alt="shopping bag" src="static/shopping-bag.png" /></i>
              <Link href="/services#store"><b type="button">Изработка на онлайн магазин с интегрирана платежна система.</b></Link>


            </div>
            <div className="col-sm col-rev">
              <i><img className="rev-icons" alt="Seo optimization" src="static/seo.png" /></i>
              <Link href="/services#seo"><b type="button">SEO (Search Engine Optimization) оптимизация за търсачки</b></Link>

            </div>
          </div>

          <div className="row text-center">
            <div className="col-sm col-rev">
              <i><img className="rev-icons" alt="mobile application" src="static/phone.png" /></i>
              <Link href="/services#mobile"><b type="button">Мобилно Приложение</b></Link>

            </div>
            <div className="col-sm col-rev">
              <i><img className="rev-icons" alt="advertising" src="static/ad.png" /></i>
              <Link href="/services#advertising"><b type="button">Интернет Реклама</b></Link>

            </div>
            <div className="col-sm col-rev">
              <i><img className="rev-icons" alt="monthly support" src="static/technical-support.png" /></i>
              <Link href="/services#support"><b type="button">Месечна Поддръжка</b></Link>

            </div>
          </div>
          <div className="mx-auto text-center">
            <button className="btn btn-default">
              <Link href="/services"><a>Виж повече</a></Link>
            </button>
          </div>
        </div>

        <section className="container-fluid section--primary">
          <div className="row">
            <div className="col-sm features">
              <i className="fa fa-hand-o-up"></i>
              <p>
                1. Избор на домейн и хостинг за Вашия сайт
              </p>
            </div>
            <div className="col-sm features">
              <i className="fa fa-window-restore"></i>
              <p>
                2. Техническо задание - Какъв тип ще е уебсайтът <br></br> (продуктов, информационен), съдържание, структура и дизайн
      </p>
            </div>
            <div className="col-sm features">
              <i className="fa fa-code"></i>
              <p>
                3. Изработка - Вашият уебсайт ще бъде готов в рамките на 14 дни
      </p>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="row">
            <div className="col-sm text-center">
              <div className="h4">Последни проекти</div>
              <Gallery />

            </div>
          </div>


        </section>


        <section className="section--primary--alt bg-image bg-image-2">
          <div className="container text--center">
            <h3>Защо да изберете нас?</h3>

            <div className="row">
              <div className="col-sm fl-left">
                <ul>
                  <li>Лек и оптимизиран сайт</li>
                  <li>Бърза изработка</li>
                  <li>SSL Сертификат</li>
                  <li>Пакет All in One</li>
                </ul>
              </div>
              <div className="col-sm fl-left" id='things'>
                <ul>
                  <li>Адаптивен дизайн</li>
                  <li>Демо версия</li>
                  <li>Абонаментна поддръжка</li>
                  <li>User Friendly Интерфейс</li>
                  {/* <li>Мултиезичност</li> */}
                  {/* <li>CMS</li> */}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="text--center">
          <div className="container">
            <h3>You know you like it.</h3>
            <a href="#" className="btn">Customize yours now!</a>
          </div>
        </section> */}




      </main >
    </div >
  )
}

