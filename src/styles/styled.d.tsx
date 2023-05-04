import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			purple: string;
			very_light_gray: String;
			light_gray: string;
			gray: string;
            background_color: string,
		};
	}
}
