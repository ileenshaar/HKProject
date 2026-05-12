import React, { useEffect } from "react";
import "./contactUs.css";
import logo from "../../images/hkLogo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useForm } from "react-hook-form";
import { useLanguage } from "../LanguageContext/LanguageContext";

function ContactUs() {
  const { lang, t } = useLanguage();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  useEffect(() => {
    document.querySelectorAll(".contactUsTextP").forEach((el) => {
      el.style.direction = lang === "ar" ? "rtl" : "ltr";
    });
  }, [lang]);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="aboutUs">
      <div className="ContainerContactUsAndText">
        <div className="contactUsTextSection">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="contactUsText">
            <p className="contactUsTextP">{t.contactUs}</p>
          </div>
          <div className="icons">
            <a
              href="https://www.facebook.com/share/16gMfL8hWT/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookRoundedIcon style={{ width: "2em", height: "2em" }} />
            </a>
            <a
              href="https://www.instagram.com/hamdi_kargo?igsh=cGZrdGhxMHl2b3hr"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon style={{ width: "2em", height: "2em" }} />
            </a>
          </div>
          <div className="phonenumber">Call Us: +90 552 157 76 82</div>
          <div className="phonenumber">Mobile: +90 534 551 18 80</div>
          <div className="phonenumber">WHatsApp: +90 552 157 76 82</div>
          <div className="phonenumber">LandLine Phone: +90 212 225 24 20</div>
        </div>

        <div className="contactUsForm">
          <h1>{lang === "en" ? "Contact Us" : "تواصل معنا"}</h1>
          <div>
            <input
              id="name"
              type="text"
              placeholder={lang === "en" ? "Name / Company*" : "الشركة أو الأسم*"}
              className="input"
              {...register("name", { required: "Name is required" })}
              onBlur={() => trigger("name")}
            />
            {errors.name && <p className="errorp">{errors.name.message}</p>}
          </div>
          <div>
            <input
              placeholder={lang === "en" ? "Email*" : "البريد الالكتروني*"}
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
              {...register("requestType", { required: "Request type is required" })}
              onBlur={() => trigger("requestType")}
            >
              <option value="">
                {lang === "en" ? "Request Type*" : "طبيعة الطلب*"}
              </option>
              <option value="LCL/FCL">
                {lang === "en" ? "LCL / FCL" : "الشحن الجزئي / الشحن الكامل"}
              </option>
              <option value="General-Request">
                {lang === "en" ? "general Request" : "طلب عام"}
              </option>
            </select>
            {errors.requestType && (
              <p className="errorp">{errors.requestType.message}</p>
            )}
          </div>
          <div className="requestMessage">
            <textarea
              placeholder={lang === "en" ? "Request / massege" : "طلب / رسالة"}
              {...register("message", { required: "Message is required" })}
              name="message"
            />
            {errors.message && (
              <p className="errorp">{errors.message.message}</p>
            )}
          </div>
          <button className="submit" type="submit">
            {lang === "en" ? "Send" : "إرسال"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactUs;
