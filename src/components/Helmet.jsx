import React from "react"
import {Helmet} from "react-helmet"

const seo = () => (
  <Helmet>
    <title>Tom Mitchelmore - Student Developer</title>
    <meta name="title" content="Tom Mitchelmore - Student Developer" />
    <meta name="description" content="Hey! I'm Tom and I'm an undergraduate student of Computer Science at the University of Southampton in the UK. Currently, alongside my studies, I work for a small game server hosting company as a systems administrator and am actively learning React, Java and Python."/>
    <link rel="canonical" href="https://tommitchelmore.me" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#37308b" />
    <meta name="msapplication-TileColor" content="#37308b" />
    <meta name="theme-color" content="#37308b" />

    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://tommitchelmore.me/"/>
    <meta property="og:title" content="Tom Mitchelmore - Student Developer"/>
    <meta property="og:description" content="Hey! I'm Tom and I'm an undergraduate student of Computer Science at the University of Southampton in the UK. Currently, alongside my studies, I work for a small game server hosting company as a systems administrator and am actively learning React, Java and Python."/>
    <meta property="og:image" content="/thumbnail.png"/>

    <meta property="twitter:card" content="summary_large_image"/>
    <meta property="twitter:url" content="https://tommitchelmore.me/"/>
    <meta property="twitter:title" content="Tom Mitchelmore - Student Developer"/>
    <meta property="twitter:description" content="Hey! I'm Tom and I'm an undergraduate student of Computer Science at the University of Southampton in the UK. Currently, alongside my studies, I work for a small game server hosting company as a systems administrator and am actively learning React, Java and Python."/>
    <meta property="twitter:image" content="/thumbnail.png"/>
    <html lang="en" />
  </Helmet>
)

export default seo
