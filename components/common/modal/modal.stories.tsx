import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from ".";

export default {
	/* ๐ The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Modal",
	component: Modal,
	args: {
		title: "์ ๋ชฉ ์๋๋ค",
	},
} as ComponentMeta<typeof Modal>;

//๐ We create a โtemplateโ of how args map to rendering
const Template: ComponentStory<typeof Modal> = (args) => (
	<Modal {...args}>MODAL ์๋๋ค</Modal>
);

export const FullModal = Template.bind({});
FullModal.args = {
	show: true,
	onClose: () => console.log("๋ซ๊ธฐ"),
	size: "full",
};
// FullModal.play = async ({ canvasElement }) => {};

export const MiniModal = Template.bind({});
MiniModal.args = {
	...FullModal.args,
	size: "mini",
};
