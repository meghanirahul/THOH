import React from "react";
import '../style/section/filter.css'



function Filter(){

    const handleCheckboxChange = (event) => {
        let label = document.querySelector(`label[for="${event.target.id}"]`)
        if(event.target.checked){
            label.style.border = '1px solid #000000'
        }
        else{
            label.style.border = '1px solid #FFFFFF'
        }
      };
    return(
        <>
        <div className="product-filters">
            <h4 className="h4">FILTERS</h4>
            <div className="filter-variants filter-color">
                <p className="p-heading">Size</p>
                <ul className="size_options option-gap">
                    <li className="sizes">
                        <input type="checkbox" name="size" id="filterfacet1" value="xs" onChange={handleCheckboxChange}></input>
                        <label for="filterfacet1" className="size_value">XS</label>
                    </li>
                    <li className="sizes">
                        <input type="checkbox" name="size" id="filterfacet2" value="s" onChange={handleCheckboxChange}></input>
                        <label for="filterfacet2" className="size_value">S</label>
                    </li>
                    <li className="sizes">
                        <input type="checkbox" name="size" id="filterfacet3" value="m" onChange={handleCheckboxChange}></input>
                        <label for="filterfacet3" className="size_value">M</label>
                    </li>
                    <li className="sizes">
                        <input type="checkbox" name="size" id="filterfacet4" value="l" onChange={handleCheckboxChange}></input>
                        <label for="filterfacet4" className="size_value">L</label>
                    </li>
                    <li className="sizes">
                        <input type="checkbox" name="size" id="filterfacet5" value="xl" onChange={handleCheckboxChange}></input>
                        <label for="filterfacet5" className="size_value">XL</label>
                    </li>
                    <li className="sizes">
                        <input type="checkbox" name="size" id="filterfacet6" value="xxl" onChange={handleCheckboxChange}></input>
                        <label for="filterfacet6" className="size_value">XX</label>
                    </li>
                    <li className="sizes">
                        <input type="checkbox" name="size" id="filterfacet7" value="xxx" onChange={handleCheckboxChange}></input>
                        <label for="filterfacet7" className="size_value">XXX</label>
                    </li>
                    <li className="sizes">
                        <input type="checkbox" name="size" id="filterfacet8" value="4x" onChange={handleCheckboxChange}></input>
                        <label for="filterfacet8" className="size_value">4X</label>
                    </li>
                </ul>
            </div>
            <div className="filter-variants filter-color">
                <p className="p-heading">Brands</p>
                <ul className="brand_options option-gap">
                    <li className="brand">
                        <input type="checkbox" name="size" id="filterfacet_brand1" value="H&M" onChange={handleCheckboxChange}></input>
                        <label for="filterfacet_brand1" className="brand_value">H&M</label>
                    </li>
                    <li className="brand">
                        <input type="checkbox" name="size" id="filterfacet_brand2" value="ZARA" onChange={handleCheckboxChange}></input>
                        <label for="filterfacet_brand2" className="brand_value">ZARA</label>
                    </li>
                    <li className="brand">
                        <input type="checkbox" name="size" id="filterfacet_brand3" value="GAP" onChange={handleCheckboxChange}></input>
                        <label for="filterfacet_brand3" className="brand_value">GAP</label>
                    </li>
                    <li className="brand">
                        <input type="checkbox" name="size" id="filterfacet_brand4" value="DKNY" onChange={handleCheckboxChange}></input>
                        <label for="filterfacet_brand4" className="brand_value">DKNY</label>
                    </li>
                    <li className="brand">
                        <input type="checkbox" name="size" id="filterfacet_brand5" value="adidas" onChange={handleCheckboxChange}></input>
                        <label for="filterfacet_brand5" className="brand_value">adidas</label>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Filter;