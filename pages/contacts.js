import React, { useState, useEffect } from "react"
import emailjs from 'emailjs-com';
const Contacts = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        document.title = 'Контакти - WebDesign, Онлайн Магазин, Реклама, Маркетинг- ReactWeb.INFO'
    }, [])

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
        <div className="gradient-image text-white" style={{ paddingTop: '120px', minHeight: '100vh' }}>
            <h1>Връзка с нас</h1>

            <main class="container-fluid">
                <div className="row">
                    <div className="col-sm pb-3 pt-4">
                        <p>Мобилен номер: <b>0885124690</b></p>
                        <p>Email: <a style={{ color: 'white' }} href="mailto:admin@reactweb.info">admin@reactweb.info</a></p>
                    </div>
                </div>

                <div className="container">
                    <h2>Направи запитване</h2>
                    <div className="row">
                        <div className="col-sm text-center">

                            <form id="contact" className="form-group" onSubmit={sendEmail}>
                                {show && <div className="success-message">Вашето запитване е изпратено успешно!</div>}
                                <label>Име</label>
                                <input required className="form-control" type="text" name="user_name" />
                                <label>Email</label>
                                <input required className="form-control" type="email" name="user_email" />
                                <label>Телефонен номер</label>
                                <input required className="form-control" type="number" name="contact_number" />
                                <label>Съобщение</label>
                                <textarea required placeholder="Направете вашето запитване" className="form-control" name="message" />
                                <input className="btn btn-primary" type="submit" value="Изпрати" />
                            </form>
                        </div>
                    </div>
                    <style jsx>{`
                     .success-message{
                        background: rgb(49, 196, 108);
                        border-radius: 5px;
                        padding:15px;
                        transition: 0.5s;
                      }
                    `}</style>
                </div>



            </main >


        </div >
    )
}
export default Contacts;