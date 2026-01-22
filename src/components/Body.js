import { useEffect, useState } from "react";
import RestaCard from "./Card"

const Body = () =>{
const [reslist, setReslist] = useState([])
const [searchtext, setSearchtext] = useState("")
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.61572&lng=78.081314&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN");
        const jsonData = await data.json();
        console.log( "data...", jsonData);
        const resData = jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setReslist(resData || [])
    }
    const filterCards = reslist.filter((fil) =>
    
            fil.info?.name?.toLowerCase().includes(searchtext.toLowerCase())
        );
    
    return(
        <>
         <input type="text" className="search-bar" value={searchtext}  onChange={(e) =>setSearchtext(e.target.value)}/>
         <button onClick={()=>{console.log("searchtext" , searchtext)}}>serach</button>
        <div className="body-cointain">
           
        {
            filterCards.map((res) => (
                <RestaCard key={res?.info?.id} reslistdata={res} />
            ))
        }
        </div>

        </>
    )
}
export default Body;