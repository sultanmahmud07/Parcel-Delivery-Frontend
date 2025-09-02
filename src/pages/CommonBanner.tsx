const CommonBanner = ({ title }:{title: string}) => {
      return (
        <div className={`bg-gradient-to-r from-primary to-secondary  h-[350px] flex items-center justify-center`}>
          <div className="main-container">
            <h1 className="text-3xl md:text-5xl text-center capitalize pt-14 font-bold">{title || "Banner title here"}</h1>
          </div>
        </div>
      );
    };
    
    export default CommonBanner;
    