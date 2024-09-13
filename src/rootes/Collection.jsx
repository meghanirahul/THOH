import React from "react"
import '../style/section/collection-main.css'
import '../component/Herocollection.jsx'
import Herocollection from '../component/Herocollection.jsx'
import Filter from '../component/Filter.jsx'
import Collectiongrid from '../component/Collectiongrid.jsx'

export default function Collection() {
    return (
        <>
            <div className="collection_main">
                <div className="page-width">
                    <h4 className="h4 p-heading page-name"><span>Men </span> \ Bestseller</h4>
                    <div className="herosection">
                        <Herocollection />
                    </div>
                    <div className="collectiongrid_filter">
                        <div className="filter">
                            <Filter />
                        </div>
                        <div className="collectiongrid">
                            <Collectiongrid />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}