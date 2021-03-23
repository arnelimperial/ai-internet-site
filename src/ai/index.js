import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
const AI = () => (
    <>
        {/* <img
            src="https://lh3.googleusercontent.com/7cSaYOi8JGnSUFOf_tWTek1mPHx_c8psxqs5e8REsmn8CYoGTbr369aKdw_QcPgvdiFZuIhnjaevYyZy6DP6-efVHqVvBZ3bu45mC3QDovHiRePuYjNMN4bEWaYvjYyieSIsKVdBSA=w2400"
            alt="Arnel Imperial"
            className="solo"
        /> */}
        <StaticImage
      src="https://lh3.googleusercontent.com/7cSaYOi8JGnSUFOf_tWTek1mPHx_c8psxqs5e8REsmn8CYoGTbr369aKdw_QcPgvdiFZuIhnjaevYyZy6DP6-efVHqVvBZ3bu45mC3QDovHiRePuYjNMN4bEWaYvjYyieSIsKVdBSA=w2400"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hi! It's me, Arnel Imperial"
      className="solo"
    />
    </>
);

export default AI;
