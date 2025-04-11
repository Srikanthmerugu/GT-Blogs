const VideoCard = ({ title, creator, views, duration, isPremium, onPlay }) => {
    return (
      <div className="bg-tech-light-gray p-4 rounded-lg flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-gray-600 text-sm">{duration} • {creator} • {views} views</p>
        </div>
        <div className="space-x-2">
          <button
            onClick={onPlay}
            className={`px-3 py-1 rounded ${isPremium ? 'bg-gray-400' : 'bg-tech-purple'} text-white`}
            disabled={isPremium}
          >
            {isPremium ? 'Preview' : 'Play'}
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded">Save</button>
        </div>
      </div>
    );
  };
  
  export default VideoCard;