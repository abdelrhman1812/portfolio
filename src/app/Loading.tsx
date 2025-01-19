const Loading = () => {
  return (
    <div className="flex  items-center justify-center w-full min-h-[200px]">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-foreground">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
