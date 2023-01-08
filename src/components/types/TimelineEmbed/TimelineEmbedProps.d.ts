import { TimelineListDataSource } from "./List";
import { TimelineProfileDataSource } from "./Profile";
import { TimelineUrlDataSource } from "./Url";

export type TimelineEmbedProps = (
  | TimelineProfileDataSource
  | TimelineListDataSource
  | TimelineUrlDataSource
) & {
  /**
   * Placeholder while tweet is loading
   */
  placeholder?: ReactNode | string;

  /**
   * Function to execute after load, return html element
   */
  onLoad?: (element: HTMLDivElement) => void;
};
