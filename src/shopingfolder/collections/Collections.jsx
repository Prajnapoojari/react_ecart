const Collections=(props)=>{
    const{title,image1,image2,image3,image4,image5,image6,image7}=props.Fashion;

    return(
        <div className="collection">
            <h1>{title}</h1>
            <div className="gents">
            <img src={image1} alt="img1"/>
            <img src={image2} alt="img2"/>
            <img src={image3} alt="img3"/>
            <img src={image4} alt="img4"/>
            <img src={image5} alt="img5"/>
            <img src={image6} alt="img6"/>
            <img src={image7} alt="img7"/>
            </div>
            </div>




            )
        }
    export default Collections;