import React, { useState } from 'react';
const Contact = () => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        feedback: "",
    })

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }




    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.name}.my mobile number is ${data.phone}.my email is ${data.email}.my feedback is ${data.feedback}`
        )
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div m-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">FullName</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" name="name" value={data.name} onChange={inputEvent} aria-describedby="emailHelp" placeholder="enter your name" />

                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleInputEmail1" name="phone" value={data.phone} onChange={inputEvent} aria-describedby="emailHelp" placeholder="enter Your mobile number" />
                                <div id="emailHelp" class="form-text">We'll never share your Phone number with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={data.email} onChange={inputEvent} aria-describedby="emailHelp" placeholder="enter your email" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Feedback</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="feedback" value={data.feedback} onChange={inputEvent}></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary btn-sm " type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;