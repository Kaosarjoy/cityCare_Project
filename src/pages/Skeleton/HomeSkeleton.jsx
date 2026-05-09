// HomeSkeleton.jsx
const HomeSkeleton = () => {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Banner Skeleton */}
      <div className="h-[500px] w-full rounded-3xl bg-base-300"></div>

      {/* How It Works */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-48 rounded-2xl bg-base-300"></div>
        <div className="h-48 rounded-2xl bg-base-300"></div>
        <div className="h-48 rounded-2xl bg-base-300"></div>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-64 rounded-2xl bg-base-300"></div>
        <div className="h-64 rounded-2xl bg-base-300"></div>
        <div className="h-64 rounded-2xl bg-base-300"></div>
      </div>

      {/* Brands */}
      <div className="h-32 rounded-2xl bg-base-300"></div>

      {/* Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-72 rounded-3xl bg-base-300"></div>
        <div className="h-72 rounded-3xl bg-base-300"></div>
        <div className="h-72 rounded-3xl bg-base-300"></div>
      </div>

      {/* FAQ */}
      <div className="space-y-4">
        <div className="h-20 rounded-2xl bg-base-300"></div>
        <div className="h-20 rounded-2xl bg-base-300"></div>
        <div className="h-20 rounded-2xl bg-base-300"></div>
        <div className="h-20 rounded-2xl bg-base-300"></div>
      </div>
    </div>
  );
};

export default HomeSkeleton;