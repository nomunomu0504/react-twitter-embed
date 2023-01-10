import { Story, ComponentMeta } from "@storybook/react";
import { TimelineEmbed } from "../TimelineEmbed";
import { TimelineEmbedProps } from "../types/TimelineEmbed";

export default {
  title: "Timeline Embed Components",
  component: TimelineEmbed,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof TimelineEmbed>;

const Template: Story<TimelineEmbedProps> = (args) => (
  <div className="preview-container">
    <div className="content-container">
      <TimelineEmbed {...args} />
    </div>
  </div>
);

export const TimelineFromScreenName = Template.bind({});
TimelineFromScreenName.args = {
  sourceType: "profile",
  screenName: "nomunomu0504",
  options: {
    width: 400,
  },
};

export const TimelineFromUserId = Template.bind({});
TimelineFromUserId.args = {
  sourceType: "profile",
  userId: "740893939977195520",
  options: {
    width: 400,
  },
};
