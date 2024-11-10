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

      // Sort posts by date, most recent first
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      setNewsPosts(posts);
    };

    importNewsPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Aktuality</h1>
      <div className="space-y-8">
        {newsPosts.map((post, index) => (
          <div key={index} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="mt-4">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
