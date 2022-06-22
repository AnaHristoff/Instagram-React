export default function Story({ image, alt, user }){
    return (
        <div className="story">
            <div className="image">
                <img src={image} alt={alt}/>
            </div>
            <div className="user">
                {user}
            </div>
        </div>
    )
}