const CategoryCard = ({ title, description, icon, contentCount, onExplore }) => {
    return (
      <div className="bg-tech-light-gray p-4 rounded-lg flex items-center space-x-4">
        <div className="text-tech-purple">{icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <button
          onClick={onExplore}
          className="bg-tech-purple text-white px-3 py-1 rounded"
        >
          Explore
        </button>
      </div>
    );
  };
  
  const CategoryList = () => {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CategoryCard
            title="AI/ML"
            description="Artificial intelligence and machine learning innovations"
            icon="🤖"
            contentCount="428 articles + 56 videos"
            onExplore={() => alert('Exploring AI/ML')}
          />
          <CategoryCard
            title="Web Dev"
            description="Frontend and backend technologies"
            icon="🌐"
            contentCount="385 articles + 72 videos"
            onExplore={() => alert('Exploring Web Dev')}
          />
          <CategoryCard
            title="Cloud"
            description="Cloud computing platforms and services"
            icon="☁️"
            contentCount="312 articles + 48 videos"
            onExplore={() => alert('Exploring Cloud')}
          />
          <CategoryCard
            title="Cybersecurity"
            description="Security threats, tools, and best practices"
            icon="🔒"
            contentCount="276 articles + 39 videos"
            onExplore={() => alert('Exploring Cybersecurity')}
          />
          <CategoryCard
            title="Mobile"
            description="Mobile app development and platforms"
            icon="📱"
            contentCount="254 articles + 63 videos"
            onExplore={() => alert('Exploring Mobile')}
          />
          <CategoryCard
            title="Data Science"
            description="Big data analytics and visualization"
            icon="📊"
            contentCount="218 articles + 42 videos"
            onExplore={() => alert('Exploring Data Science')}
          />
        </div>
        <button className="bg-tech-light-gray text-tech-purple px-4 py-2 rounded">
          Load More Categories
        </button>
      </div>
    );
  };
  
  export default CategoryList;