import React from "react";
import '../style/section/imagewithtext.css'
import imagewith from '../asset/imagewith.png'
import thumb1 from '../asset/thumb1.png'
import thumb2 from '../asset/thumb2.png'
import hearts from '../asset/hearts.png'

export default function Imagewithtext(){
    return(
        <>
        <div className="imagewithtext-main">
            <div className="page-width">
                <div className="image-with-text">
                    <div className="imagewith">
                        <div className="imagewith-contain">
                            <img src={imagewith} alt="imagewithmassage" loading="lazy"></img>
                        </div>
                    </div>
                    <div className="textwith">
                        <img className="pngthumb" src={hearts} alt="pngthumb"></img>
                        <div className="textwith-heading">
                            <h3 className="h2">Bite sized stories celebrating self-expression</h3>
                        </div>
                        <div className="textwith-description">
                            <p>Make a statement but keep it subtle. When shopping for long formal dresses, black gowns are ultra classy, and come in infinite designs, with a huge range of features. From shining satins to sheer mesh, with dramatic leg splits and plunging necklines, you’re certain to find a black long gown that suits your occasion.</p>
                        </div>
                        <div className="textwith-button">
                            <div className="button">
                                <a href="#name" className="p-heading button-contain">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className="thumbwith">
                        <div className="thumbnailwith1">
                        <img src={thumb1} alt="imagewithmassage5065" loading="lazy"></img>
                        </div>
                        <div className="thumbnailwith2">
                        <img src={thumb2} alt="imagewithmassage9656" loading="lazy"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}