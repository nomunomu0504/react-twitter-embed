import script from "scriptjs";
import { useEffect, useRef, useState } from "react";
import { TwitterFollowButtonProps } from "~/components/types/Button";

const processType = "createFollowButton";
export const TwitterFollowButton = ({
  screenName,
  options,
  placeholder,
  onLoad,
}: TwitterFollowButtonProps): JSX.Element => {
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

      const element = await twitterApi(screenName, elementRef?.current, options);
      setIsLoading(false);
      onLoad && onLoad(element);
    });
  }, [isLoading, onLoad, options, screenName]);

  return (
    <>
      {isLoading && placeholder}
      <div ref={elementRef}></div>
    </>
  );
};
