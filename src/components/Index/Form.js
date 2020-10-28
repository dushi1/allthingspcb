import React from 'react'
import "../All.css"

const Form = () => {
    return (
        <div class="container form">
            <div class="row">
                <div class="col-md-12 col-md-offset-12">
                    <div class="well well-sm">
                        <form class="form-horizontal" action="" method="post" >
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <legend class="text-center">Contact us</legend>

                                <div class="form-group">
                                    <label class="col-md-12 control-label" for="name">Name</label>
                                    <div class="col-md-12">
                                        <input id="name" name="name" type="text" placeholder="Your name" class="form-control" required />
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label class="col-md-12 control-label" for="mobile">Mobile number</label>
                                    <div class="col-md-12">
                                        <input id="email" name="email" type="text" placeholder="Mobile number" class="form-control" required />
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label class="col-md-12 control-label" for="message">Your message</label>
                                    <div class="col-md-12">
                                        <textarea class="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="2" required></textarea>
                                    </div>
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
        </div>
    )
}
export default Form