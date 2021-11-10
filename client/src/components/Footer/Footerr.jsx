import React from 'react'
import style from "./footer.module.css"
import img1 from "./homeimg.svg"
import img2 from "./groupimg.svg"
import img3 from "./VectorTab1.svg"
import img4 from "./Vector.svg"

function Footerr ()
{
    return (
        <div className={style.footerbody}>
            <div><img src={img1} alt="home"></img></div>
            <div><img src={img2} alt="community"></img></div>
            <div><img className={style.fix} src={img3} alt="caddy"></img></div>
        </div>
    )
}

export default Footerr
