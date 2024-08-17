const BoxClassTiktok = () => {
  return (
    <div id="BoxClassTiktok">
      <a
        href="https://www.tiktok.com/@algoritma2022"
        className="flex flex-col gap-4"
        target="_blank"
      >
        <div className="flex justify-between relative ">
          <img src="/icons/Instagram.svg" alt="" className="w-auto h-10" />
          <img src="/icons/next.png" alt="" className="h-4 w-4" />
        </div>
        <h1 className="text-white text-lg font-semibold pr-3 mt-3">
          Class Tiktok
        </h1>
        <div className="text-white flex py-2 opacity-60 text-xs">View More</div>
      </a>
    </div>
  );
};

export default BoxClassTiktok;
