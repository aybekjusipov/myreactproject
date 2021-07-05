import PostCard from './PostCard';

function PostList({ data = [] }) {
    const news = data.slice(0, 19);
    return (
        <div className="postList">
            <div className="container">
                <div className="postList-content">
                    {
                        news.map((post, indx) =>
                            <PostCard data={post} key={`key-${indx}__${data.id}`} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default PostList;