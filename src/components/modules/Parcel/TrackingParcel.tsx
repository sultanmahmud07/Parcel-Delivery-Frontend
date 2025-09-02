const ParcelTracking = () => {
  return (
    <div className="py-8 md:py-14">
      <div className="main-container">
        <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-bold">
              PARCEL TRACKING
            </h2>
            <p className="text-gray-500 mt-1">
              Track your parcel & see the current condition
            </p>
          </div>

        <div className="max-w-3xl mx-auto p-6 md:p-10 rounded-xl shadow-sm border">
          <h3 className="text-lg md:text-xl font-semibold  mb-2">
            TRACK YOUR PARCEL
          </h3>
          <p className="text-muted-foreground mb-6">
            Now you can track your parcel easily
          </p>

          {/* Input + Button */}
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your parcel TRK"
              className="flex-1 px-4 py-3 border bg-secondary rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-secoundary transition"
            >
              TRACK YOUR PARCEL
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ParcelTracking;
