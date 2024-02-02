import type { Meta, StoryObj } from "@storybook/react";
import { Article } from "../components/Article";

const meta = {
  title: "Bento Buzz/Article",
  component: Article,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story: any) => (
      <div style={{ width: "100%", maxWidth: "500px", margin: "auto" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    link: "https://www.independent.co.uk/tech/elon-musk-neuralink-brain-computer-interface-b2486983.html",
    score: 7,
    title: "Neuralink implants computer in human brain for thought interaction",
    content:
      "Elon Musk&#39;s Neuralink has successfully implanted a computer in a human&#39;s brain, allowing interaction with a computer using thoughts. The first human trial was announced by Musk on X, with promising initial results. Neuralink, formed in 2016, aims to create a brain-computer interface. The company has been secretive about its work but has revealed successful tests, including a monkey playing Pong using the system.",
    pubDate: "2024-01-30T16:00:10.000Z",
    source: "independent",
  },
};

export const NoSource: Story = {
  args: {
    link: "https://www.independent.co.uk/tech/elon-musk-neuralink-brain-computer-interface-b2486983.html",
    score: 7,
    pubDate: "2024-01-30T16:00:10.000Z",
    title: "Neuralink implants computer in human brain for thought interaction",
    content:
      "Elon Musk&#39;s Neuralink has successfully implanted a computer in a human&#39;s brain, allowing interaction with a computer using thoughts. The first human trial was announced by Musk on X, with promising initial results. Neuralink, formed in 2016, aims to create a brain-computer interface. The company has been secretive about its work but has revealed successful tests, including a monkey playing Pong using the system.",
  },
};
