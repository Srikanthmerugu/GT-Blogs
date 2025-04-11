import Header from '../components/common/Header';
import FeaturedContent from '../components/layout/FeaturedContent';
import TrendingTopics from '../components/layout/TrendingTopics';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-6">
        <FeaturedContent />
        <TrendingTopics />
      </main>
    </div>
  );
};

export default Home;