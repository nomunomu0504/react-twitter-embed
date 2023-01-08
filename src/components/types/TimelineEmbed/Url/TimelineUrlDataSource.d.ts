import { CommonOption } from "~/components/types/CommonOption";
import { TimelineEmbedOption } from "~/components/types/TimelineEmbed";

export type TimelineUrlDataSource = {
  sourceType: "url";

  /**
   * Absolute URL of a Twitter profile or list
   */
  url: string;

  /**
   * Additional options
   */
  options?: CommonOption & TimelineEmbedOption;
};
