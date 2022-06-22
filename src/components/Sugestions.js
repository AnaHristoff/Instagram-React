import Sugestion from "./Sugestion";

const sugestions = [
    {
        image: "../assets/img/bad.vibes.memes.svg",
        user: "bad.vibes.memes",
        follow: "Follows you"
    },
    {
        image: "../assets/img/chibirdart.svg",
        user: "chibirdart",
        follow: "Follows you"
    },
    {
        image: "../assets/img/razoesparaacreditar.svg",
        user: "razoesparaacreditar",
        follow: "New on Instagram"
    },
    {
        image: "../assets/img/adorable_animals.svg",
        user: "adorable_animals",
        follow: "Follows you"
    },
    {
        image: "../assets/img/smallcutecats.svg",
        user: "smallcutecats",
        follow: "Follows you"
    }
]
export default function Sugestions() {
    return (
        <div className="sugestions">
            <div className="title">
                Sugestions for you
                <div>See all</div>
            </div>
            {sugestions.map(sugestion => (<Sugestion image={sugestion.image} user={sugestion.user} follow={sugestion.follow} />))}
        </div>
    )
}