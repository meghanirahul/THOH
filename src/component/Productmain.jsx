import React from "react";
import CounterandCart from './CounterandCart.jsx'
import Mediagallery from '../component/Mediagallery.jsx'
import { ReactComponent as Picon1 } from '../asset/p_icon1.svg'
import { ReactComponent as Picon2 } from '../asset/p_icon2.svg'
import { ReactComponent as Picon3 } from '../asset/p_icon3.svg'



export default function Productmain(prop) {
    const Swiper = prop.swiper;
    const SwiperSlide = prop.swiperslide;
    const Pagination = prop.pagination;
    const Navigation = prop.navigation;
    const Scrollbar = prop.scrollbar;
    const Grid = prop.grid;
    const product = prop.product;
    
    ////        discription html show
    // if(product !== undefined){
    //     let htmldoc = new DOMParser().parseFromString(product.richtext[0],'text/html');
    //     console.log(htmldoc)
    //     document.getElementById('discpdyn').innerHTML = htmldoc.querySelector('body').innerHTML;
    // }
    
    const selectVarColor = (e) => {
        let colorOptions = document.querySelectorAll('.color_val1');
        colorOptions.forEach((val)=>{
            val.classList.remove('active_variant_color');
        });
        e.target.classList.add('active_variant_color');
    }
    const selectVarSize  = (e) => {
        let sizeOptions = document.querySelectorAll('.size_val1');
        sizeOptions.forEach((val)=>{
            val.classList.remove('active_variant');
        });
        e.target.classList.add('active_variant');
    }
    const accord = (e) => {
        let accorddetail = e.target.nextSibling;
        console.log(e.target)
        if(accorddetail !== null){
            if (accorddetail.style.height === '0px') {
                accorddetail.style.height = "100%";
            }
            else {
                accorddetail.style.height = '0px';
            }
        }
    }
    const removeover = () => { document.body.classList.remove('overlay_h'); document.getElementById('media_closer').classList.remove('media_block'); }
    const opendrawer = () => { document.body.classList.add('overlay_h'); document.getElementById('media_closer').classList.add('media_block'); }
    const cartData = (data) => {
        prop.dataCart(data);
    }
    return (
        <>
            <div id='media_closer' className="media_opener" onClick={removeover}>
                <button className="close-modeler" onClick={removeover}>
                    <svg aria-hidden="true" focusable="false" fill="none" width="14" className="icon icon-close" viewBox="0 0 16 16">
                        <path d="m1 1 14 14M1 15 15 1" stroke="currentColor" strokeWidth="1.5"></path>
                    </svg>
                </button>
                {(product === undefined)?('loading...'):(product.media.map((val,ind)=>{
                    return<img src={require(`../upload/${val}`)} alt="productpageimg" width="100%" height="auto" loading="lazy" key={ind}></img>
                }))}
                
            </div>

            <div className="page-width" >
                <div className="product_main">
                    <div className="product_gallery">
                        <Mediagallery
                            swiper={Swiper}
                            swiperslide={SwiperSlide}
                            navigation={Navigation}
                            pagination={Pagination}
                            scrollbar={Scrollbar}
                            grid={Grid}
                            open={opendrawer}
                            media={(product === undefined)?('loading...'):(product.media)} />
                    </div>
                    <div className="product_fullinfo">
                        <div className="info_title border-2">
                            <h3 className="h3 p_title">{(product === undefined)?('loading...'):(product.productName[0])}</h3>
                        </div>
                        <div className="info_price">
                            <h3 className="h3 p_discount"><span></span></h3>
                            <h3 className="h3 p_price"><span>$ </span>{(product === undefined)?('loading...'):(product.price[0])}</h3>
                            <p className="light-text tax_info">Tax included 4 interest-free payments.</p>
                        </div>
                        <div className="p_description">
                            <p className="p-heading">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                        </div>
                        <div className="variants">
                            <div className="color_options">
                                <p className="variant-name">Colour - <span>Green</span></p>
                                <ul className="colors-list">
                                    {(product === undefined)?('loading...'):(product.options[0][2].map((val,ind)=>{
                                        return<>
                                            <li className={`color_val1 ${(ind === 0)?('active_variant_color'):('')}`} style={{background:val}} onClick={selectVarColor}>
                                                <span style={{display:'none'}}>{product.options[0][1][ind]}</span>
                                            </li>
                                        </>
                                    }))}
                                </ul>
                            </div>
                            <div className="size_options">
                                <p className="variant-name">Size - <span>Small</span></p>
                                <ul className="size-list">
                                {(product === undefined)?('loading...'):(product.options[1][1].map((val,ind)=>{
                                    return<>
                                        <li className={`size_val1 ${(ind === 0)?('active_variant'):('')}`} onClick={selectVarSize}>{val}</li>
                                    </>
                                }))}
                                </ul>
                            </div>
                        </div>
                        <div className="add_to_counter">
                                <CounterandCart product={(product === undefined)?('loading...'):(product)} getCartdata={cartData}/>
                        </div>
                        <div className="details_accordion">
                            <div className="accord_title openaccord" onClick={accord}>
                                <h4 className="p-heading">Description</h4>
                                <div className="accord_detail" style={{ height: '0px' }}>
                                    <p className="p-heading" id="discpdyn">
                                        nda vitae cum fuga quidem porro consectetur ipsum perspiciatis quis, hic totam illo optio aliquam temporibus sequi possimus suscipit, maxime repellendus illum. Oque corrupti id recusandae perferendis ratione unde nulla possimus cum inventore sequi labore, mollitia fugiat. Sapiente delectus, accusamus sunt quisquam voluptatum rem aliquam vero. Corrupti praesentium nisi quae, nemo maxime blanditiis commodi voluptatum distinctio unde tenetur repudiandae quo facere asperiores architecto cum illo corporis perferendis voluptatum! Maxime vitae inventore suscipit assumenda.                       
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="details_accordion">
                            <div className="accord_title" onClick={accord}>
                                <h4 className="p-heading">Additional Information</h4>
                                <div className="accord_detail" style={{ height: '0px' }}>
                                    <p className="p-heading">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quas recusandae illum nostrum nulla, consequuntur cum voluptatem officiis quos adipisci labore officia et sunt, earum inventore minima ratione non dolorum. Possimus dolores deserunt quidem illum odit soluta earum asperiores necessitatibus, repellat numquam? Earum magnam, voluptatibus veritatis autem facere exercitationem velit voluptate accusamus alias nam laudantium amet, quidem, totam consequuntur nisi ipsum animi quae. Perspiciatis alias quia earum consectetur beatae cumque qui debitis tenetur molestias doloremque id quam, aliquid maiores ducimus totam! Et dignissimos animi omnis ipsam nobis assumenda deserunt ipsa dolorem, repellat nesciunt sapiente. Similique maiores quis quos aut. Ducimus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="details_accordion">
                            <div className="accord_title" onClick={accord}>
                                <h4 className="p-heading">Reviews</h4>
                                <div className="accord_detail" style={{ height: '0px' }}>
                                    <p className="p-heading">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quas recusandae illum nostrum nulla, consequuntur cum voluptatem officiis quos adipisci labore officia et sunt, earum inventore minima ratione non dolorum. Possimus dolores deserunt quidem illum odit soluta earum asperiores necessitatibus, repellat numquam? Earum magnam, voluptatibus
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p_icon-text">
                            <div className="p_box">
                                <div className="p_icon">
                                    <Picon1 />
                                </div>
                                <div className="p_text">
                                    <p className="light-text">Excepteur sint oca ecat cupinon</p>
                                </div>
                            </div>
                            <div className="p_box">
                                <div className="p_icon">
                                    <Picon2 />
                                </div>
                                <div className="p_text">
                                    <p className="light-text">Voluptate velit esse quam nihil</p>
                                </div>
                            </div>
                            <div className="p_box">
                                <div className="p_icon">
                                    <Picon3 />
                                </div>
                                <div className="p_text">
                                    <p className="light-text">Neque porro quis quam est</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}