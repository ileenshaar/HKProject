import React from "react";
import "./contactUs.css";
import logo from "../../logo.svg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useForm } from "react-hook-form";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="ContainerContactUsAndText">
        <div className="contactUsTextSection">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="contactUsText">
            <p>
              Feel free to contact us for frieght forwarding partnerships or
              quotes regarding your company's transports!
            </p>
          </div>
          <div className="icons">
            <a href="facebook">
              <FacebookRoundedIcon style={{ width: "2em", height: "2em" }} />
            </a>
            <a href="Instagram">
              <InstagramIcon style={{ width: "2em", height: "2em" }} />
            </a>
          </div>
        </div>

        <div className="contactUsForm">
          <h1>CONTACT US</h1>
          <div>
            <input
              id="name"
              type="text"
              placeholder="Company or name*"
              className="input"
              {...register("name", { required: "Name is required" })}
              onBlur={() => trigger("name")}
            />
            {errors.name && <p className="errorp">{errors.name.message}</p>}
          </div>
          <div>
            <input
              placeholder="Email Address*"
              className="input"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              onBlur={() => trigger("email")}
            />
            {errors.email && <p className="errorp">{errors.email.message}</p>}
          </div>
          <div>
            <select
              className="selectRequest"
              {...register("requestType", {
                required: "Request type is required",
              })}
              onBlur={() => trigger("requestType")}
            >
              <option value="">Request Type*</option>
              <option value="LCL/FCL">
                LCL/FCL - Access to Instant Rates Platform
              </option>
              <option value="General-Request">General Request</option>
            </select>
            {errors.requestType && (
              <p className="errorp">{errors.requestType.message}</p>
            )}
          </div>

          <div className="requestMessage" {...register("message")}>
            <textarea type="text" placeholder="Request/Message" />
          </div>
          <button className="submit" type="submit">
            SEND
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactUs;
