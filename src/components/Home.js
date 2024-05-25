import { React, useState, useEffect } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Cards from './Cards';
import Corollaeffect from './Corollaeffect';

export default function Home() {
    return (
        <div className=''>
            <Corollaeffect width="w-screen" />
            <Cards />
        </div>
    );
}
