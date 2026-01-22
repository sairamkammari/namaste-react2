const RestaCard = ({reslistdata}) =>{
    if(!reslistdata?.info) return null;
const {name, avgRating, cuisines, areaName, cloudinaryImageId} = reslistdata.info;
// console.log(reslistdata, "probs")
    return(
        <div className="card-container">
             {/* <img src= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/20/c38ef298-1296-45c8-bed7-7988c07e81c0_1098711.JPG"  alt="res img "/> */}
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="img.."/>
            <h3>{name}</h3>
            <h4>{avgRating}</h4>
            <h5>{cuisines?.join(",")}</h5>
            <h5>{areaName}</h5>

        
             
        </div>
    )
}
export default RestaCard;
