function PostCard({data}) {
    return (
        <div className="postcard">
            <img src="" alt="" />
            <div className="postCard-body">
                <h1> {data.title} </h1>
                <p>
                    {data.body}
                </p>
            </div>
        </div>
    )
}

export default PostCard;