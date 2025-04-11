const TrendingTopics = () => {
    return (
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Trending Topics</h2>
        <div className="flex space-x-2 mt-4">
          <button className="bg-tech-purple text-white px-4 py-2 rounded">AI/ML</button>
          <button className="bg-tech-purple text-white px-4 py-2 rounded">Cloud Computing</button>
          <button className="bg-tech-purple text-white px-4 py-2 rounded">Web3</button>
          <button className="bg-tech-purple text-white px-4 py-2 rounded">DevOps</button>
          <button className="bg-tech-purple text-white px-4 py-2 rounded">Cybersecurity</button>
        </div>
      </div>
    );
  };
  
  export default TrendingTopics;