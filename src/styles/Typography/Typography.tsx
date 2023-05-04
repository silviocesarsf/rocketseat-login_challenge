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
	cursor: ${(props) => (props.link ? "pointer" : "")};
`;
