import React, { useEffect, useState } from "react";

function News() {
  // ... existing code

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest News</h1>
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
