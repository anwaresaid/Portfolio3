import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {useForm} from 'react-hook-form';
const Contact = () => {
    const { register,handleSubmit,errors}=useForm();
    const [successMessage,setSuccessMessage]= useState(""); 

    const serviceId= "service_ID";
    const templateId= "Template_ID";
    const userId = "user_H1TkOaAruIgJhF6E7xQ5D";

    const onSubmit=(data,r ) =>{
        sendE(
            serviceId,
            templateId,
            {
                name:data.name,
                phone:data.phone,
                email:data.email,
                subject:data.subject,
                inquiry:data.inquiry
            },
            userId
        )
        r.target.reset();
        
    }

    const sendE=(serviceId, templateId, variables, userId)=>{

        emailjs.send(serviceId, templateId, variables, userId)
        .then(() => {
            setSuccessMessage("Email was sent successfully! I will contact you as soon as possible.");
        }).catch(err => console.error(`something went wrong ${err}`));
    }



    return (
        <div id="contact" className="contacts"> 
            <div className="text-center">

                <h1>contact me</h1>
                <p>Please fill out the form and describe your inqury  and I will contact you as soon as possible</p>
                <span className="success-message">
                            {successMessage}
                        </span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>

                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        

                        {/* name input */}

                        <div className="text-center">
                            
                        <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="name"
                        name="name"
                        ref={
                            register({
                                required:"Please enter the name",
                                maxLength:{
                                    value:20,
                                    message:"please enter a name with no more than 20 characters!",

                                }
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name&&errors.name.message}
                        </span>

                        {/* Phone input */}
                        <div className="text-cetner">
                        <input
                            id="phone"
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                            ref={
                                register({
                                    required:"Please enter the phone number",
                                })
                            }
                            />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone&&errors.phone.message}
                        </span>
                        {/* name input */}
                        <div className="text-center">
                            
                        <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="email"
                        name="email"
                        ref={
                            register({
                                required:"Please enter an email",
                                pattern:{
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email !",
                                }
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email&&errors.email.message}
                        </span>
                        
                        {/* Subject input */}
                        <div className="text-center">   
                        <input
                        id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        ref={
                            register({
                                required:"Please enter a Subject",
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                
                        {/* inquiry input */}
                        <div className="text-center">
                            
                        <textarea
                        id="inquiry"
                        type="text"
                        placeholder="please describe shortly your inquiry"
                        className="form-control"
                        name="inquiry"
                        ref={
                            register({
                                required:"Please describe your needs shortly ",
                            })
                        }
                        ></textarea>
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.inquiry&&errors.inquiry.message}
                        </span>
                        <button className="btn-main contact-btn" type="submit">Contact me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contact 