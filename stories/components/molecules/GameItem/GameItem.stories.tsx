import { Meta } from "@storybook/react";
import GameItem, { GameItemProps } from "../../../../components/molecules/GameItems";

export default {
  title: "Components/Molecules/GameItem",
  component: GameItem,
} as Meta;

const Template = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Call of Duty: Modern Warfare",
  category: "Mobile",
  thumbnail: '/img/Thumbnail-1.png',
};
