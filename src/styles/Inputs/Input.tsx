import styled from "styled-components";

interface InputProps {
	border?: string;
}

export const Input = styled.input<InputProps>`
	height: 53px;
	width: 100%;
	border: ${(props) =>
		props.border ? props.border : "1px solid #E2E8F0"};
	padding: 16px 12px;
	font-size: 14px;
	border-radius: 4px;
	transition: 0.5s;

	&::placeholder {
		color: ${(props: any) => props.theme.colors.very_light_gray};
		font-weight: 400;
	}

	&:hover,
	&:focus {
		border: ${(props: any) =>
			`1px solid ${props.theme.colors.purple}`};
	}
`;
