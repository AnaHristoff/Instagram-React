export default function Sugestion({ image, user, follow }) {
    return (
        <div className="sugestion">
            <div className="user">
                <img src={image} alt="" />
                <div className="text">
                    <div className="name">{user}</div>
                    <div className="reason">{follow}</div>
                </div>
            </div>

            <div className="follow">Follow</div>
        </div>
    )
}