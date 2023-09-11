import { RoundCheckbox } from "../components/ui/Checkbox/RoundCheckbox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RoundCheckbox> = {
  title: "RoundCheckbox",
  component: RoundCheckbox,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { checked: false },
};

// export default {
//   title: "RoundCheckbox",
//   component: RoundCheckbox,
// };

// export const Checked = () => <RoundCheckbox checked />;

// export const Unchecked = () => <RoundCheckbox checked={false} />;
