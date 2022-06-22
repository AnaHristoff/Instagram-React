import Stories from './Stories';
import Posts from './Posts';
import Sidebar from './Sidebar';

export default function Feed() {
    return (
        <div className="feed">
            <div className="left">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    )
}