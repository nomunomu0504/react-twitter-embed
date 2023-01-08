import { CommonOption } from "~/components/types/CommonOption";
import { TimelineEmbedOption } from "~/components/types/TimelineEmbed";

export type TimelineListDataSource =
  | {
      sourceType: "list";

      /**
       * Valid Twitter username
       */
      ownerScreenName: string;

      /**
       * The string identifier for a list
       */
      slug: string;

      /**
       * Additional options
       */
      options?: CommonOption & TimelineEmbedOption;
    }
  | {
      sourceType: "list";
      /**
       * Valid Twitter list ID
       */
      id: string | number;

      /**
       * Additional options
       */
      options?: CommonOption & TimelineEmbedOption;
    };
