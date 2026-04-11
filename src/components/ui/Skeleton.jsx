const SkeletonCard = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center w-full">
        {/* Image skeleton */}
        <div className="w-full aspect-square overflow-hidden rounded-sm mb-2 bg-light-grey animate-pulse" />
        
        {/* Title skeleton */}
        <div className="h-6 bg-light-grey rounded w-3/4 mb-2 animate-pulse self-start" />
        
        {/* Subtitle skeleton */}
        <div className="h-4 bg-light-grey rounded w-1/2 animate-pulse self-start" />
      </div>
    </div>
  );
};

export default SkeletonCard;
