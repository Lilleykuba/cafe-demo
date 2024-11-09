import React, { useEffect, useState } from "react";

function News() {
  const [newsPosts, setNewsPosts] = useState([]);

  useEffect(() => {
    const importNewsPosts = async () => {
      const newsModules = import.meta.glob("/src/content/news/*.json");
      const posts = [];

      for (const path in newsModules) {
        const module = await newsModules[path]();
        posts.push(module.default);
      }

      // Sort posts by date
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      setNewsPosts(posts);
    };

    importNewsPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Latest News</h1>
      {newsPosts.map((post, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="text-gray-600">
            {new Date(post.date).toLocaleDateString()}
          </p>
          <p className="mt-4">{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default News;
