import NewsCard from "./newsCard";
import './styles/newsList.css';

function NewsList({ data = [] }) {
  const partOfData = data.slice(0, 19);

  return (
    <div className="newsList">
      {partOfData.map((news, indx) => (
        <NewsCard
            data={news}
            key={`news-${indx}`}
        />
      ))}
    </div>
  );
}

export default NewsList;