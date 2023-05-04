import React from "react";
import { Container } from "../../styles/Container/Container";
import "./styles.css";
import { Typography } from "../../styles/Typography/Typography";
import { Input } from "../../styles/Inputs/Input";
import { Button } from "../../styles/Inputs/Button";
import logo from "../../assets/logo.svg";
import { useMediaQuery } from "react-responsive";

const Login: React.FC = () => {
	// const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	return (
		<Container justify="space-between" width="100%">
			<Container
				dir="column"
				justify="center"
				className="left-container"
			>
				<Container
					dir="column"
					align="left"
					gap="20px"
					padding="1rem"
					className="form-container"
				>
					<div className="logo">
						<img
							style={{ position: "absolute", top: "5%" }}
							src={logo}
							alt=""
						/>
					</div>
					<Container
						dir="column"
						align="left"
						gap="10px"
						className="title-login"
					>
						<Typography
							color={(props: any) => props.theme.colors.gray}
							fontSize="2.25em"
							fontWeight="700"
							className="title-main"
						>
							Acesse a plataforma
						</Typography>
						<Typography
							color={(props: any) =>
								props.theme.colors.light_gray
							}
							fontSize="1em"
							fontWeight="300"
							className="title-main"
						>
							Faça login ou registre-se para começar a
							construir seus projetos ainda hoje.
						</Typography>
					</Container>
					<Typography
						as="label"
						fontWeight="600"
						className="label-email"
					>
						E-mail
					</Typography>
					<Input type="email" placeholder="Digite seu email" />
					<Container justify="space-between" width="100%">
						<Typography
							as="label"
							fontWeight="600"
							className="label-password"
						>
							Senha
						</Typography>
						<Typography
							fontWeight="bold"
							color={(props: any) => props.theme.colors.purple}
							className="forget-password"
							link={true}
						>
							Esqueceu a senha ?
						</Typography>
					</Container>
					<Input
						type="password"
						placeholder="Digite sua senha"
					/>
					<Button>Entrar</Button>
					<Container justify="left" gap="5px">
						<Typography
							color={(props: any) =>
								props.theme.colors.light_gray
							}
							fontWeight="400"
						>
							Ainda não tem uma conta ?
						</Typography>
						<Typography
							color={(props: any) => props.theme.colors.purple}
							fontWeight="bold"
							link={true}
						>
							Inscreva-se
						</Typography>
					</Container>
				</Container>
			</Container>
			<div className="background-image"></div>
		</Container>
	);
};

export default Login;
