import React from "react"
import Layout from "../components/Layout"
const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Whant to get in touch</h3>
            <p>
              I'm baby iPhone kickstarter pinterest fam tofu subway tile blue
              bottle tbh messenger bag adaptogen 90's sartorial small batch
              artisan hexagon. Authentic kombucha everyday carry four loko, food
              truck austin occupy. Kinfolk subway tile green juice pinterest
              everyday carry migas asymmetrical franzen art party slow-carb
              pour-over, paleo biodiesel. Vice salvia health goth microdosing
            </p>
            <p>
              Ramps helvetica 3 wolf moon, shabby chic cronut offal four dollar
              toast you probably haven't heard of them pour-over irony taiyaki.
              Lumbersexual seitan distillery, crucifix venmo drinking vinegar
              waistcoat. Adaptogen fashion axe distillery kickstarter etsy
              subway tile yuccie, tumblr lomo heirloom post-ironic forage chia
              chartreuse. Iceland unicorn everyday carry tumblr.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name"> Votre nom</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email"> Votre email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message"> Votre message </label>
                <textarea type="message" name="email" id="message"></textarea>
                <button type="submit" className="btn block">
                  {" "}
                  envoyer
                </button>
              </div>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
