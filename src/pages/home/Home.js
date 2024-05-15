import "../home/Home.css";
import useFetch from "../../hooks/useFetch";
import receipe from "../../../data/db.json";

const Home =()=>{
    const{data,isPending,error} = useFetch("http://localhost:3000/recipes")

    console.log(receipe)
    return(
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading....</p>}
            {data && data.map((receipe)=>{
               return( <h2 key={receipe.id}>{receipe.title}</h2>);
            })}

        </div>
    )
}

export default Home;