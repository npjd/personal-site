import useSWR from "swr";

import fetcher from "../lib/fetcher";

export default function SpotifyPlaying() {
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <>
      
      <div className="mx-10 hidden lg:block px-2 pt-1 pb-px rounded-md duration-500 hover:bg-gray-700">
        <div className="inline-flex flex-col items-center sm:flex-row w-full max-w-full truncate">
          {data?.songUrl ? (
            <div className="flex flex-auto items-center">
              <img
                className="mx-2"
                style={{ height: "auto", width: "auto", maxWidth: "40px" }}
                src={data.albumImageUrl}
              />
              <a
                className="text-skyblue font-extrabold max-w-max truncate"
                href={data.songUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.title}
              </a>
            </div>
          ) : (
            <p className="text-gray-300 font-medium">Spotify</p>
          )}
          <span className="mx-2 text-gray-500  hidden sm:block">{" – "}</span>
          <p className="text-gray-400  max-w-max truncate">
            {data?.artist ?? "Offline"}
          </p>
        </div>
      </div>
    </>
  );
}
