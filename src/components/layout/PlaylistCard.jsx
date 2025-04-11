const PlaylistCard = ({ title, creator, updateDate, videoCount, onPlayAll, onEdit }) => {
    return (
      <div className="bg-tech-light-gray p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="space-x-2">
            <button
              onClick={onPlayAll}
              className="bg-tech-purple text-white px-3 py-1 rounded"
            >
              Play All
            </button>
            <button
              onClick={onEdit}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
            >
              Edit Playlist
            </button>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          {videoCount} videos • Created by {creator} • Last updated {updateDate}
        </p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">React Hooks Introduction</span>
            <span className="text-gray-600 text-sm">15:24 • Alex Chen • 12K views</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">useState Hook Deep Dive</span>
            <span className="text-gray-600 text-sm">22:10 • Alex Chen • 8.5K views</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">useEffect Explained</span>
            <span className="text-gray-600 text-sm">18:45 • Alex Chen • 7.2K views</span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-tech-light-gray p-2 rounded">
            <h3 className="text-sm font-semibold">Advanced TypeScript</h3>
            <p className="text-xs text-gray-600">8 videos • Last watched 3 days ago</p>
            <button className="mt-2 bg-tech-purple text-white px-2 py-1 rounded text-sm">Play</button>
          </div>
          <div className="bg-tech-light-gray p-2 rounded">
            <h3 className="text-sm font-semibold">CSS Grid Mastery</h3>
            <p className="text-xs text-gray-600">5 videos • Last watched 1 week ago</p>
            <button className="mt-2 bg-tech-purple text-white px-2 py-1 rounded text-sm">Play</button>
          </div>
          <div className="bg-tech-light-gray p-2 rounded">
            <h3 className="text-sm font-semibold">Node.js Fundamentals</h3>
            <p className="text-xs text-gray-600">10 videos • Last watched 2 weeks ago</p>
            <button className="mt-2 bg-tech-purple text-white px-2 py-1 rounded text-sm">Play</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default PlaylistCard;