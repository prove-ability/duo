import { ComponentStory, ComponentMeta } from "@storybook/react";

import Carousel from ".";

export default {
	title: "Components/Carousel",
	component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => {
	// const items: Item[] = [
	// 	{
	// 		caption: "baemin1",
	// 		path: "http://img.woowahan.com/www/common/baemin.jpg",
	// 	},
	// 	{
	// 		caption: "baemin2",
	// 		path: "https://cdn.dailyimpact.co.kr/news/photo/201901/50618_9997_5649.jpg",
	// 	},
	// 	{
	// 		caption: "baemin3",
	// 		path: "https://miro.medium.com/max/992/1*DVM8hgRJalsAeayE3CEvAg.png",
	// 	},
	// 	{
	// 		caption: "baemin4",
	// 		path: "https://t1.daumcdn.net/cfile/tistory/99B879455EA790590D",
	// 	},
	// 	{
	// 		caption: "baemin5",
	// 		path: "https://t1.daumcdn.net/cfile/tistory/99E208435FB6322304",
	// 	},
	// 	{
	// 		caption: "baemin6",
	// 		path: "http://t1.daumcdn.net/brunch/service/user/4OZm/image/_3p_nMCKQt1KBQcvc7bFYr3jcYc",
	// 	},
	// ];
	return <Carousel {...args} />;
};

export const Default = Template.bind({});
