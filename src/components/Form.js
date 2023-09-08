import React, {useState, useRef} from "react";
const Form = () => {
    const formRef = useRef(null)
    const scriptURL = ''
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [formClass, setFormClass] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(formRef.current),
        }).then(res => {
            setMessage('Registration Successful!')
            setFormClass('success-message')

            setTimeout(() => {
                setFormClass('')
                setMessage('')
                }, 5000);

            setLoading(false)
            formRef.current.reset()
        })
    }
    return ( 
        <section className="container-fluid form-area">
            <div className="container">
                <h2 className="form-title">Register to Attend</h2>
                <form name="submit-to-google-sheet" ref={ formRef } onSubmit={handleSubmit}>
                    <div className="contact-group">
                     <label>
                        First Name:
                        <input type="text" name="firstName" className="form-firstname" required />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" className="form-lastname" required />
                    </label>
                    </div>
                    <div className="contact-group">
                        <label>
                            Email:
                            <input type="email" name="email" className="form-email" required />
                        </label>
                        <label>
                            Mobile:
                            <input type="tel" name="phone" className="form-phone" required />
                        </label>
                    </div>
                    <input type="submit" value={loading ? "Please wait..." : "Register"} className="submit-button" />
                </form>
                <p className={ formClass }> { message } </p>
            </div>
        </section>
     );
}
 
export default Form;