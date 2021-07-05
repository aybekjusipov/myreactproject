import { Link } from 'react-router-dom';
import './styles/newsCard.css';

function NewsCard({ data }) {
  return (
    <div className="newsCard">
      <img
        src={`https://picsum.photos/id/${data.id+50}/400/400`}
        alt={data.title}
      />
      <div className="newsCard-body">
        <div className="info">
          <h3> {data.title} </h3>
          <p>{data.body}</p>
        </div>
        <Link to={`/${data.id}`}> Read more </Link>
      </div>
    </div>
  );
}

export default NewsCard;