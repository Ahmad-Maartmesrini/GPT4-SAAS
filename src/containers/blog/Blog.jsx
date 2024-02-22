import "./blog.css";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="blog section__padding" id="blog">
      <h1 className="blog__heading gradient__text">
        A lot is happening, We are blogging about it.
      </h1>
      <div className="blog__container">
        <div className="blog__container--groupA">
          <Article
            imgURL={blog01}
            title="Let's Div Deep In The AI World"
            date="Feb 22, 2024"
          />
        </div>
        <div className="blog__container--groupB">
          <Article
            imgURL={blog02}
            title="Are We Becoming Robots?"
            date="Feb 20, 2024"
          />
          <Article
            imgURL={blog03}
            title="What do You Know About BlockChain?"
            date="Feb 14, 2024"
          />
          <Article
            imgURL={blog04}
            title="How Does AI Learn From Your Data"
            date="Feb 09, 2024"
          />
          <Article
            imgURL={blog05}
            title="Avoid Losing Your Data With AI"
            date="Feb 01, 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
