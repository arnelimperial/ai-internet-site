import * as React from "react"
import { Link } from "gatsby"
import AI from "../ai/index"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <>
    <main>
      <article>
        <section>
          <h1># whomami</h1>
          <AI />
          <small className="mb-1">
            Link to{" "}
            <Link className="anchor" href="/resume">
              résumé
            </Link>{" "}
            or{" "}
            <Link className="anchor" href="/uses">
              {" "}
              uses
            </Link>{" "}
            page.
          </small>
          <p className="mt-1">
            Hi there! My name is Arnel Imperial, and I build internet sites,
            just like this one, for instance. I develop websites <span className="not_yet">not yet</span> for my
            basic needs but as a form of a hobby and personal interest. I learn
            many things so far (and I expect more challenges to come) and am
            really like this diversion while learning at the same time. I can do
            backend web development using Python/Django and Javascript/React on the frontend.
          </p>

          <p>
          I'm a Cook by profession and a Food Technologist in the past.
          </p>
          <p>
            Send me some messages to{" "}
            <Link class="anchor" href="/contact" rel="noopener noreferrer">
              contact link
            </Link>{" "}
            if you're interested in opening your door for me on your projects,
            for collaboration, want to say hi/hello, and want to make friends
            with me. Just feel free to contact me whenever you like to do it on
            your phase at your own free will.
          </p>
        </section>
        <section>
          <h3 class="h3">About this website</h3>
          <p>
            The purpose of why I developed this site is to document what I have
            learned and to put it in one place so that it's easier for me to
            retrieve information again.
          </p>
          <p>
            The topics that I usually post are not so unique online, but I am
            pleased if you have spared your valuable time to read some of them.
            The most important thing is that the contents of this site matter to
            me the most.
          </p>
          <p>
            The topics that I usually post are not so unique online, but I am
            pleased if you have spared your valuable time to read some of them.
            The most important thing is that the contents of this site matter to
            me the most. I keep this site minimal on graphics because I want to
            focus on the content, and I want it to look neat and simple. It's
            only composed of basic HTML markup and hyperlinked text by design.
            This web project is open-source and free to use whatever purpose it
            may serve.
          </p>

          <h5 class="h5">Made with:</h5>
          <ul>
            <li>
              Frontend &#8213; Preact{" "}
              <a
                href="https://github.com/preactjs/preact-cli/"
                class="anchor"
                target="_blank"
                rel="noopener noreferrer"
              >
                (Preact CLI)
              </a>
            </li>
            <li>
              Backend &#8213; Django{" "}
              <a
                href="https://cookiecutter-django.readthedocs.io/en/latest/"
                class="anchor"
                target="_blank"
                rel="noopener noreferrer"
              >
                (Cookiecutter Django)
              </a>
            </li>
          </ul>
          <h5 class="h5">Deployment</h5>
          <ul>
            <li>
              Static site deployed to Netlify and Heroku for the back-end.
            </li>
          </ul>
          <h5 class="h5">License</h5>
          <ul>
            <li>
              The content of this website is licensed under a{" "}
              <a
                class="anchor"
                href="https://creativecommons.org/licenses/by/4.0/?"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC-BY-4.0
              </a>
              .
            </li>
            <li>
              Codes is licensed under the{" "}
              <a
                class="anchor"
                href="https://zlib.net/zlib.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zlib License
              </a>{" "}
              license.{" "}
            </li>
          </ul>
        </section>
      </article>
    </main>
  </>
  </Layout>
)

export default AboutPage
