import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsDashboard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          apiKey: 'ae1ea415487e4f90875b357cef4c22a3',
        },
      })
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-12">
          <h3 className="mb-4">Latest News</h3>
        </div>
        {news.map((article) => (
          <div className="col-lg-4 col-md-6" key={article.title}>
            <div className="card mb-4">
              <img className="card-img-top" src={article.urlToImage} alt={article.title} />
              <div className="card-body">
                <h4 className="card-title">{article.title}</h4>
                <p className="card-text">{article.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsDashboard;
