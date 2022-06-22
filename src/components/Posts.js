import Post from './Post';

export default function Posts(){
    const posts = [
        {imageUser: "../assets/img/meowed.svg", alt:"meowed", userName: "meowed", image: "../assets/img/gato-telefone.svg", imageUserLike: "../assets/img/respondeai.svg", userLikeName: "respondeai", numberLikes: "101.523"},
        {imageUser: "../assets/img/barked.svg", alt: "barked", userName: "barked", image: "../assets/img/dog.svg", imageUserLike: "../assets/img/adorable_animals.svg", userLikeName: "adorable_animals", numberLikes: "99.159"}
    ];

    return (
        <div className="posts">
            {posts.map((post) => (<Post imageUser={post.imageUser} alt={post.alt} userName={post.userName} image={post.image} imageUserLike={post.imageUserLike} userLikeName={post.userLikeName} numberLikes={post.numberLikes} />))}
        </div>
    )
}