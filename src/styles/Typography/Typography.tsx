import styled from "styled-components";

interface TypographyProps {
	fontSize?: string;
	fontWeight?: string;
	color?: string | any;
	link?: boolean;
	as?: keyof JSX.IntrinsicElements;
}

export const Typography = styled.p<TypographyProps>`
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
	color: ${(props) => props.color};
	cursor: ${(props) => props.link && "pointer"};
	transition: 0.5s;

	&:hover {
		text-decoration: ${(props) => props.link && "underline"};
		text-decoration-color: ${(props) =>
			props.link &&
			`1px solid ${(props: any) => props.theme.colors.purple}`};
	}
`;
