import {useState} from 'react';
import Header from '../collections/Header';
import Banner from '../collections/Banner';                 //. (single dot) refers to the current directory.
import Collections from '../collections/Collections';
import Footer from '../collections/Footer';                 //.. (double dots) refers to the parent directory
import {Gents} from '../data';
import {Womens} from '../data';
import {Kids} from '../data';
import {Home} from '../data';


const MainPage=()=>{
    const [gentsFashion,setGentsFashion]=useState(Gents);
    const [womensFashion,setWomensFashion]=useState(Womens);
    const [kidsFashion, setKidsFashion]=useState(Kids);
    const [homeDecoration, setHomeDecoration]=useState(Home);
    return(
        <div>
            <Header/>
            <Banner/>
            <Collections Fashion={gentsFashion} />
            <Collections Fashion={womensFashion} />
            <Collections Fashion={kidsFashion} />
            <Collections Fashion={homeDecoration} />
            <Footer/>
            </div>
            )
        }
    export default MainPage;