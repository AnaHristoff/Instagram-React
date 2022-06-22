import Navbar from './components/Navbar';
import Feed from './components/Feed';

export default function App() {
    return (
        <div>
            <Navbar />
            <Feed />

            <div className="mobile-background">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    )
}