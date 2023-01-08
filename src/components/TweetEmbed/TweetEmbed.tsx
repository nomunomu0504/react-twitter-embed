import script from "scriptjs";
import { useEffect, useRef, useState } from "react";
import { TweetEmbedProps } from "../types/TweetEmbed/TweetEmbedProps";

const processType = "createTweet";
export const TweetEmbed = ({
  tweetId,
  options,
  placeholder,
  onLoad,
}: TweetEmbedProps): JSX.Element => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!isLoading) return;

    script("https://platform.twitter.com/widgets.js", "twitter-wjs", async () => {
      if (!window.twttr) {
        console.error("window.twttr is undefined. canceled process.");
        return;
      }

      const twitterApi = window.twttr.widgets[processType];
      if (!twitterApi) {
        console.error(`${processType} is not contain twitter widget api.`);
        return;
      }

      const element = await twitterApi(tweetId, elementRef?.current, options);
      setIsLoading(false);
      onLoad && onLoad(element);
    });
  }, [isLoading, onLoad, options, tweetId]);

  return (
    <>
      {isLoading && placeholder}
      <div ref={elementRef}></div>
    </>
  );
};
