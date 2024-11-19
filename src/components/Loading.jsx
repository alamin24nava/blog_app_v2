const Loading = () => {
    return (
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center loading-bg">
            <span className="loading loading-infinity text-white loading-xs"></span>
            <span className="loading loading-infinity text-white loading-sm"></span>
            <span className="loading loading-infinity text-white loading-md"></span>
            <span className="loading loading-infinity text-white loading-lg"></span>
        </div>
    );
};

export default Loading;