import styled from "styled-components";

interface ContainerProps {
	height?: string;
	width?: string;
	backgroundColor?: string;
	align?: string;
	justify?: string;
	gap?: string;
	flexDirection?: string;
	padding?: string;
	as?: keyof JSX.IntrinsicElements;
}

export const Container = styled.div<ContainerProps>`
	height: ${(props) => props.height};
	width: ${(props) => props.width};
	background-color: ${(props) => props.backgroundColor};
	display: flex;
	align-items: ${(props) => (props.align ? props.align : "center")};
	justify-content: ${(props) =>
		props.justify ? props.justify : "center"};
	gap: ${(props) => props.gap};
	flex-direction: ${(props) => props.dir};
	padding: ${(props) => props.padding};
`;
