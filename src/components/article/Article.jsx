import "./article.css";

const Article = ({ title, imgURL, date }) => {
  return (
    <div className="article__container">
      <div className="article__container--img">
        <img src={imgURL} alt="blog_image" />
      </div>
      <div className="article__container--info">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
