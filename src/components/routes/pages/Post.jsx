import { useParams,useSearchParams } from "react-router-dom";
const Post = () =>{
     let{category,id} = useParams()
     let[searchParms,setSearchParams] = useSearchParams();
     console.log(searchParms);
     console.log(searchParms.get('price'));
     console.log(searchParms.get('sort'));
    return (
        <>
        <h1> Post Page -  {category }</h1>
        <h1> Post Page -  {id}</h1>
        </>
    )
}

export default Post;