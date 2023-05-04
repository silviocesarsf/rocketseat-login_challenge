import styled from "styled-components";
import { lighten } from "polished";

interface ButtonProps {
	backgroundColor?: string;
	width?: string;
}

export const Button = styled.button<ButtonProps>`
	background-color: ${(props) =>
		props.backgroundColor
			? props.backgroundColor
			: props.theme.colors.purple};
	color: white;
	height: 56px;
	width: ${(props) => (props.width ? props.width : "100%")};
	font-size: 1em;
	font-weight: 700;
	border: none;
	border-radius: 4px;
	transition: 0.5s;

	&:active,
	&:hover {
		background-color: ${(props) =>
			lighten(0.1, props.theme.colors.purple)};
	}
`;
