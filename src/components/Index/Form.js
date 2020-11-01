import React, { useState } from 'react'
import "../All.css"
import axios from "axios"

const Form = () => {
    const [toggle, setToggle] = useState(true)
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [textArea, setTextArea] = useState("")
    const [type, setType] = useState('')

    return (
        toggle ?
            <div class="container form">
                <div class="row">
                    <div class="col-md-12 col-md-offset-12">
                        <div class="well well-sm">
                            <form class="form-horizontal" method="post" onSubmit={async (event) => {
                                event.preventDefault();
                                await axios.post('http://13.126.87.81:5000/data', {
                                    "name": name,
                                    "mobile": mobile,
                                    "text": textArea,
                                    "type": type
                                }, {
                                    headers: {
                                        'Content-Type': 'application/json',
                                    }
                                }).then(resp => {

                                    console.log(resp);
                                    setToggle(false)
                                    alert('pass')


                                }).catch(er => {

                                    console.log(er);
                                    setToggle(true)
                                    alert('fail')

                                })



                            }}
                            >
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <legend class="text-center">Request a callback</legend>

                                    <div class="form-group">
                                        <label class="col-md-12 control-label" for="name">Name</label>
                                        <div class="col-md-12">
                                            <input id="name" name="name" type="text" placeholder="Your name" class="form-control" required value={name} onChange={(event) => setName(event.target.value)} />
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <label class="col-md-12 control-label" for="mobile">Mobile number</label>
                                        <div class="col-md-12">
                                            <input id="email" name="email" type="text" placeholder="Mobile number" class="form-control" required value={mobile} onChange={(event) => setMobile(event.target.value)} minLength={10} maxLength={10} />
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <label class="col-md-12 control-label" for="message">Your message</label>
                                        <div class="col-md-12">
                                            <textarea class="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="2" required value={textArea} onChange={(event) => setTextArea(event.target.value)}></textarea>
                                        </div>
                                    </div>

                                    <div className="checkbox">
                                        <label class="container1" onClick={() => {
                                            setType('Prototype')
                                        }
                                        }>Prototype
                                        <input type="radio" name="radio" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="container1" onClick={() => {
                                            setType('Production')
                                        }}>Production
                                        <input type="radio" name="radio" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>


                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> :
            <div className="form" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div>Submited</div>
            </div>
    )
}
export default Form