export default function Post({ imageUser, alt, userName, image, imageUserLike, userLikeName, numberLikes}){
    return (
        <div className="post">
              <div className="top">
                <div className="user">
                  <img src={imageUser} alt={alt}/>
                  {userName}
                </div>
                <div className="actions">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div className="content">
                <img src={image} alt={alt}/>
              </div>

              <div className="background">
                <div className="actions">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div className="likes">
                  <img src={imageUserLike} alt={alt}/>
                  <div className="text">
                    Liked by <strong>{userLikeName}</strong> and <strong>more {numberLikes} people</strong>
                  </div>
                </div>
              </div>
            </div>
    )
}