import * as script from "scriptjs";
import { useEffect, useMemo, useRef, useState } from "react";
import { TimelineEmbedOption, TimelineEmbedProps } from "~/components/types/TimelineEmbed";

const processType = "createTimeline";
export const TimelineEmbed = ({
  options,
  placeholder,
  onLoad,
  ...props
}: TimelineEmbedProps): JSX.Element => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const buildOptions = useMemo((): TimelineEmbedOption => {
    return Object.assign({}, options, {
      chrome: options?.chrome?.join(" "),
    });
  }, [options]);

  useEffect(() => {
    if (!isLoading) return;

    script.default("https://platform.twitter.com/widgets.js", "twitter-wjs", async () => {
      if (!window.twttr) {
        console.error("window.twttr is undefined. canceled process.");
        return;
      }

      const twitterApi = window.twttr.widgets[processType];
      if (!twitterApi) {
        console.error(`${processType} is not contain twitter widget api.`);
        return;
      }

      const element = await twitterApi(props, elementRef?.current, buildOptions);
      setIsLoading(false);
      onLoad && onLoad(element);
    });
  }, [buildOptions, isLoading, onLoad, options, props]);

  return (
    <>
      {isLoading && placeholder}
      <div ref={elementRef}></div>
    </>
  );
};
