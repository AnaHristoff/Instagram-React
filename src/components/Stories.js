import Story from './Story';

const stories = [
    {
        image: "../assets/img/9gag.svg", 
        user: "9gag", 
        alt: "9gag"
    },
    {
        image: "../assets/img/meowed.svg", 
        user: "meowed", 
        alt: "meowed"
    },
    {
        image: "../assets/img/barked.svg", 
        user: "barked", 
        alt: "barked"
    },
    {
        image: "../assets/img/nathanwpylestrangeplanet.svg", 
        user: "nathanwpylestrangeplanet", 
        alt: "nathanwpylestrangeplanet"
    },
    {
        image: "../assets/img/wawawicomics.svg", 
        user: "wawawicomics", 
        alt: "wawawicomics"
    },
    {
        image: "../assets/img/respondeai.svg", 
        user: "respondeai", 
        alt: "respondeai"
    },
    {
        image: "../assets/img/filomoderna.svg", 
        user: "filomoderna", 
        alt: "filomoderna"
    },
    {
        image: "../assets/img/memeriagourmet.svg", 
        user: "memeriagourmet", 
        alt: "memeriagourmet"
    }
];
export default function Stories(){

    return (
        <div className="stories">
            {stories.map((story) => (<Story image={story.image} user={story.user} alt={story.alt} />))}
            <div className="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}