import { css } from '@linaria/core'
// import { ress } from './ress'
// ${ress}

export const globals = css`
  :global() {
    // Reset
    * {
      box-sizing: border-box;
    }
    a,
    abbr,
    acronym,
    address,
    applet,
    article,
    aside,
    audio,
    b,
    big,
    blockquote,
    body,
    canvas,
    caption,
    center,
    cite,
    code,
    dd,
    del,
    details,
    dfn,
    div,
    dl,
    dt,
    em,
    embed,
    fieldset,
    figcaption,
    figure,
    footer,
    form,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    header,
    hgroup,
    html,
    i,
    iframe,
    img,
    ins,
    kbd,
    label,
    legend,
    li,
    mark,
    menu,
    nav,
    object,
    ol,
    output,
    p,
    pre,
    q,
    ruby,
    s,
    samp,
    section,
    small,
    span,
    strike,
    strong,
    sub,
    summary,
    sup,
    table,
    tbody,
    td,
    tfoot,
    th,
    thead,
    time,
    tr,
    tt,
    u,
    ul,
    var,
    video {
      padding: 0;
      border: 0;
      margin: 0;
      font: inherit;
      font-size: 100%;
      vertical-align: baseline;
    }
    ol,
    ul {
      list-style: none;
    }
    // END: Reset

    html {
      font-size: 62.5%;
    }

    body {
      background-color: #393939;
      color: #f4f4f4;
      font-family: Montserrat, sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      /* line-height: 1.28572; */
      letter-spacing: 0.16px;
      line-height: 1;
      text-align: center;
    }

    h1 {
      font-size: 2.625rem;
      font-weight: 300;
      line-height: 1.199;
      letter-spacing: 0;
    }

    h2 {
      font-size: 2rem;
      line-height: 1.25;
    }

    h3 {
      font-size: 1.75rem;
      line-height: 1.28572;
    }

    h2,
    h3 {
      font-weight: 400;
      letter-spacing: 0;
    }

    a,
    p {
      font-family: Montserrat, sans-serif;
      font-size: 1.6rem;
    }

    p {
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 0;
    }

    a {
      color: #78a9ff;
    }

    ul {
      list-style-position: inside;
    }

    p {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    section {
      padding: 5rem 0;
    }

    .section-title {
      margin: 0px;
      margin-bottom: 4.5rem;
      font-size: 4rem;
      font-weight: bold;
      text-transform: uppercase;
    }

    /* Grid layout */
    .container,
    .container-fluid,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    }

    @media (min-width: 576px) {
      .container,
      .container-sm {
        max-width: 540px;
      }
    }

    @media (min-width: 768px) {
      .container,
      .container-md,
      .container-sm {
        max-width: 720px;
      }
    }

    @media (min-width: 992px) {
      .container,
      .container-lg,
      .container-md,
      .container-sm {
        max-width: 960px;
      }
    }

    @media (min-width: 1200px) {
      .container,
      .container-lg,
      .container-md,
      .container-sm,
      .container-xl {
        max-width: 1140px;
      }
    }

    .col,
    .col-1,
    .col-2,
    .col-3,
    .col-4,
    .col-5,
    .col-6,
    .col-7,
    .col-8,
    .col-9,
    .col-10,
    .col-11,
    .col-12,
    .col-auto,
    .col-lg,
    .col-lg-1,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-auto,
    .col-md,
    .col-md-1,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-auto,
    .col-sm,
    .col-sm-1,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-auto,
    .col-xl,
    .col-xl-1,
    .col-xl-2,
    .col-xl-3,
    .col-xl-4,
    .col-xl-5,
    .col-xl-6,
    .col-xl-7,
    .col-xl-8,
    .col-xl-9,
    .col-xl-10,
    .col-xl-11,
    .col-xl-12,
    .col-xl-auto {
      position: relative;
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
    }

    @media (min-width: 576px) {
      .col-sm-12 {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }

    @media (min-width: 768px) {
      .col-md-6 {
        flex: 0 0 50%;
        max-width: 50%;
      }
    }

    @media (min-width: 992px) {
      .col-lg-4 {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
      }

      .col-lg-8 {
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
      }
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
    }
    /* END: Grid layout */

    .App {
      line-height: 24px;
      margin-bottom: 300px;
    }

    .App-logo {
      height: 10vmin;
      pointer-events: none;
    }

    @media (prefers-reduced-motion: no-preference) {
      // .App-logo {
      //   animation: App-logo-spin infinite 20s linear;
      // }
    }

    // .App-header {
    //   background-color: #282c34;
    //   min-height: 10vh;
    //   display: flex;
    //   flex-direction: row;
    //   align-items: left;
    //   justify-content: left;
    //   font-size: calc(10px + 2vmin);
    //   color: white;
    // }

    .App-link {
      color: #61dafb;
    }

    // @keyframes App-logo-spin {
    //   from {
    //     transform: rotate(0deg);
    //   }
    //   to {
    //     transform: rotate(360deg);
    //   }
    // }

    .App-content {
      // margin: 20px auto 40px;
      // width: 90%;
    }

    .App-section {
      margin: 200px auto 40px;
    }

    .Hero-section {
      min-height: 100vh;
      height: 100vh;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border-bottom: 0px;
      font-weight: 400;
      padding: 0rem 5.6rem;
      margin-bottom: 0;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
    }

    .Hero-section .hero-title {
      background-image: url('../assets/profile-pic-light.jpg');
      background-position: 0;
      background-repeat: no-repeat;
      background-size: 280px;
      font-size: 5.6rem;
      font-weight: 700;
      line-height: 1.199;
      margin-bottom: 3.2rem;
      padding-top: 320px;
      text-align: left;
    }

    @media (max-width: 576px) {
      .Hero-section {
        padding: 0rem 2rem;
      }

      .Hero-section .hero-title {
        background-size: 240px;
        font-size: 3rem;
      }
    }

    @media (max-width: 520px), (min-width: 770px) and (max-width: 1000px) {
      .Hero-section .hero-title-name {
        display: inline-block;
      }
    }

    .text-color-main {
      background-image: linear-gradient(135deg, #0043ce, #a6c8ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-cta {
      display: flex;
      & a {
        font-size: 2.4rem;
      }
    }

    /* Call to Action Button */
    .cta-btn {
      display: inline-block;
      margin-right: 1.6rem;
      position: relative;
      padding: 0.8rem 1.6rem;
      font-weight: 700;
      line-height: 1;
      z-index: 1;
      transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;

      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 0px;
        height: 100%;
        left: 0;
        bottom: 0;
        z-index: -1;
        transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
      }
    }

    /* Hero Style */
    .cta-btn--hero {
      background-image: linear-gradient(135deg, #4589ff 0%, #a6c8ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      border-width: 2px;
      border-style: solid;
      border-image: linear-gradient(135deg, #4589ff 0%, #a6c8ff 100%);
      border-image-slice: 1;
      cursor: pointer;
      &::after {
        background-image: linear-gradient(135deg, #4589ff 0%, #a6c8ff 100%);
      }
      &:hover {
        -webkit-text-fill-color: #ffffff;
        text-decoration: none;
        &::after {
          width: 100%;
        }
      }
    }

    /* Know More Section */
    #about {
      background-color: #02aab0;
      background-image: linear-gradient(135deg, #001141, #4589ff);
      color: #fff;
      height: 100%;
      border-top: 0;
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
      clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
      padding-bottom: 10%;
    }

    @media (max-width: 75em) {
      #about {
        height: 100%;
        -webkit-clip-path: none;
        clip-path: none;
      }
    }

    #about h2 {
      margin: 0 0 4.5rem;
    }

    #about .about-wrapper__info {
      display: flex;
      height: 100%;
      justify-content: center;
      flex-direction: column;
    }

    #about .about-wrapper__info-text {
      text-align: left;
    }

    @media (max-width: 576px) {
      #about {
        padding: 0rem 2rem;
      }

      .about-wrapper__image img {
        width: 100%;
      }
    }
    /* END: Know More Section */
    /* Projects Section */
    #projects {
      margin-top: -15rem;
      padding-top: 15rem;

      .project-wrapper {
        margin-bottom: 15rem;

        .row {
          margin-bottom: 8rem;
        }

        &__text {
          text-align: left;

          &-title {
            font-weight: bold;
            margin-bottom: 1.8rem;
            font-size: 2.5rem;
          }

          & p > a {
            color: #4589ff;
          }
        }

        &__image {
          width: 90%;
          margin: 0 auto;

          & .thumbnail {
            border: none;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            transition: all 0.2s ease-out;
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
            transition: 0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.5s box-shadow,
              0.5s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
            & img {
              max-width: 660px;
            }
          }
        }
      }
    }

    @media (max-width: 1200px) {
      .project-wrapper__text a + a {
        margin-top: 12px;
      }
    }

    @media (max-width: 990px) {
      #projects {
        padding-right: 2rem;
        padding-left: 2rem;
      }

      #projects .project-wrapper .row {
        margin-bottom: 4rem;
      }

      .project-wrapper__image img {
        margin-top: 24px;
        width: 100%;
      }
    }
    /* END: Projects Section */
  }
`
