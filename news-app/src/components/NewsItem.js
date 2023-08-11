import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description ,imageUrl , newsUrl } = this.props;
    return (
      <div className="my-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl}  target="_blank" className="btn btn-sm btn-primary">
             Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
