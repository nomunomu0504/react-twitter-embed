import { CommonOption } from "~/components/types/CommonOption";
import { TimelineEmbedOption } from "~/components/types/TimelineEmbed";

export type TimelineProfileDataSource =
  | {
      sourceType: "profile";

      /**
       * Valid Twitter username
       */
      screenName: string;

      /**
       * Additional options
       */
      options?: CommonOption & TimelineEmbedOption;
    }
  | {
      sourceType: "profile";

      /**
       * Valid Twitter user ID
       */
      userId: stirng;

      /**
       * Additional options
       */
      options?: CommonOption & TimelineEmbedOption;
    };
