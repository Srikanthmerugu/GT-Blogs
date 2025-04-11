import VideoCard from './VideoCard';
import ArticleCard from './ArticleCard';

const FeaturedContent = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Featured Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <VideoCard
          title="React Hooks Deep Dive"
          creator="Alex Chen"
          views="12K"
          duration="15:24"
          isPremium={false}
          onPlay={() => alert('Playing video')}
        />
        <VideoCard
          title="Docker Containers Explained"
          creator="Alex Chen"
          views="8K"
          duration="20:10"
          isPremium={true}
          onPlay={() => alert('Previewing video')}
        />
        <VideoCard
          title="GraphQL API Development"
          creator="Alex Chen"
          views="5K"
          duration="18:30"
          isPremium={false}
          onPlay={() => alert('Playing video')}
        />
      </div>
      <h2 className="text-2xl font-bold">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ArticleCard
          title="The Future of AI in Software Development"
          type="Premium"
          duration="18 min read"
          category="AI/ML"
          isPremium={true}
          onRead={() => alert('Previewing article')}
        />
        <ArticleCard
          title="Microservices Architecture Patterns"
          type="Free"
          duration="12 min read"
          category="Web Dev"
          isPremium={false}
          onRead={() => alert('Reading article')}
        />
        <ArticleCard
          title="Securing Cloud Infrastructure"
          type="Premium"
          duration="15 min read"
          category="Cloud"
          isPremium={true}
          onRead={() => alert('Previewing article')}
        />
      </div>
    </div>
  );
};

export default FeaturedContent;