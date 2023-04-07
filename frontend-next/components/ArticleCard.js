function ArticleCard(props){

    function getSlug(path){
        return "/article/"+path
    }

    function getImg(path){
        return "http://localhost:1337"+path
    }
    return(
        
        <div className="">
            <div className="bg-white mt-2 shadow rounded-lg	" style={{maxWidth: "288px", height: "449px", fontFamily: 'Noto Sans Thai, sans-serif'}}>
                <img className="rounded-t-lg" src={getImg(props.props.attributes.mainImg.data[0].attributes.url)} alt="Photo" width="100%" height="162px"></img>
                <div className="py-4 text-center font-black" style={{maxWidth: "100%", height: "50px"}}>
                    <p>{props.props.attributes.title}</p>
                </div>
                <div className="py-4 px-2 font-light" style={{maxWidth: "100%", height: "137px"}}>
                    <p>{props.props.attributes.intro}</p>
                </div>
                <div className="py-4 text-center" style={{maxWidth: "100%", height: "50px"}}>
                    <a href = {getSlug(props.props.attributes.slug)}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Show more</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ArticleCard;