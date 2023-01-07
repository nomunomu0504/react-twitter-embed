import { ReactNode, useEffect, useRef, useState } from "react";
import * as script from "scriptjs";

export type TweetEmbedProps = {
  tweetId: string;
  options?: { [key: string]: any };
  placeholder?: ReactNode | string;
  onLoad?: (element: any) => void;
};

const processType = "createTweet";
export const TweetEmbed = ({
  tweetId,
  options,
  placeholder,
  onLoad,
}: TweetEmbedProps): JSX.Element => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(true);

  useEffect(() => {
    setIsMounted(true);
    script.default("https://platform.twitter.com/widgets.js", "twitter-embed", async () => {
      if (!window.twttr) {
        console.error("window.twttr is undefined. canceled process.");
        return;
      }

      if (isMounted) {
        const twitterApi = window.twttr.widgets[processType];
        if (!twitterApi) {
          console.error(`${processType} is not contain twitter widget api.`);
          return;
        }

        const element = await twitterApi(tweetId, elementRef?.current, options);
        setIsLoading(false);
        onLoad && onLoad(element);
      }
    });
    return () => {
      setIsMounted(false);
    };
  }, [isMounted, onLoad, options, tweetId]);

  return (
    <>
      {isLoading && placeholder}
      <div ref={elementRef}></div>
    </>
  );
};
