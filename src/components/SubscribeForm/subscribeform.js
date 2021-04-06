import addToMailchimp from "gatsby-plugin-mailchimp"
import React, { useState } from "react"
import * as styles from "./subscribeform.module.css"

function SubscribeForm (props){
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)   


  function errorHandling(data) {
    // your error handling
  }
  
  const handleSubmit = () => {
    addToMailchimp(email).then((data) => {

      if (data.result === "error") {
        errorHandling(data)
      } else {
        /*trackCustomEvent({
          category: "Newsletter",
          action: "Click",
          label: `Newsletter Click`,
        })*/
        setSubmitted(true)
      }
    })
  }

  return (
    <div className={styles.subscribeBox}>
    <h3 className={styles.title}> {props.title}</h3>
      {submitted ? (
        <div className={styles.success}>
          
            <h2>
              Successfully subscribed!
            </h2>
            <p>
            Thank your for your interest in my content.
            </p>
          
        </div>
      ) : (
        <>
            <div>
              <h4 className={styles.description}>Get Notified About Next Update</h4>
            </div>
          <form className={styles.subscribeForm}>
            <input
              type="email"
              name="email"
              id="mail"
              label="email-input"
              placeholder="Your e-mail address"
              onChange={(e) => setEmail(e.target.value)}
            />
          
          
            <button
              type="button"
              aria-label="Subscribe"
              onClick={() => handleSubmit()}
            >
              Subscribe
            </button>
          </form>
        </>
      )}
    </div>
  )
}

export default SubscribeForm;
