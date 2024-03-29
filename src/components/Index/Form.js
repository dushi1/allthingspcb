import React, { useState } from 'react'
import "../All.css"
import axios from "axios"

const Form = () => {
    const [toggle, setToggle] = useState(true)
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [textArea, setTextArea] = useState("")
    const [type, setType] = useState('none')
    const [location, setLocation] = useState('')

    return (
        toggle ?
            <div class="container form">
                <div class="row">
                    <div class="col-md-12 col-md-offset-12">
                        <div class="well well-sm">
                            <form class="form-horizontal" method="post" onSubmit={(event) => {
                                event.preventDefault();
                                axios.post('https://mailserver-lake.vercel.app', {
                                    "name": name,
                                    "mobile": mobile,
                                    "text": textArea,
                                    "type": type,
                                    "location": location
                                }, {
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Accept': 'application/json'
                                    }
                                }).then(resp => {
                                    setToggle(false)
                                    setName('')
                                    setMobile('')
                                    setTextArea('')
                                    setType('')
                                }).catch(er => {
                                    console.log(er);
                                    setToggle(true)
                                    // alert(er)
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
                                            <input id="email" name="mobile" type="text" placeholder="Mobile number" class="form-control" required value={mobile} onChange={(event) => setMobile(event.target.value)} maxLength={25} />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-md-12 control-label" for="location">Location (optional)</label>
                                        <div class="col-md-12">
                                            <input id="location" name="location" type="text" placeholder="Location" class="form-control" value={location} onChange={(event) => setLocation(event.target.value)} maxLength={25} />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-md-12 control-label" for="message">Your message (optional)</label>
                                        <div class="col-md-12">
                                            <textarea class="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="2" value={textArea} onChange={(event) => setTextArea(event.target.value)}></textarea>
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
                                            <button type="submit" class="btn btn-primary btn-md">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> :
            <div className="form" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontSize: "20px" }}>Submitted</div>
            </div>
    )
}
export default Form