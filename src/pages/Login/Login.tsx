import React from "react";
import { Container } from "../../styles/Container/Container";
import "./styles.css";
import { Typography } from "../../styles/Typography/Typography";
import { Input } from "../../styles/Inputs/Input";
import { Button } from "../../styles/Inputs/Button";
import logo from "../../assets/logo.svg";
import { useForm } from "react-hook-form";

const Login: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserData>();

	interface UserData {
		email: string;
		password: string;
	}

	const createUser = (data: UserData) => {
		console.log(data);
	};
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
					as={"form"}
					onSubmit={handleSubmit(createUser)}
				>
					<div className="logo">
						<img
							style={{ position: "absolute", top: "5%" }}
							src={logo}
							alt="Logo da Vertigo"
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
					<Input
						type="email"
						placeholder="Digite seu email"
						style={{
							border: errors.email && "1px solid red",
						}}
						{...register("email", {
							required: true,
							pattern:
								/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
						})}
					/>
					{errors.email && (
						<span style={{ color: "red" }}>
							Digite um email valido
						</span>
					)}
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
						style={{
							border: errors.password && "1px solid red",
						}}
						{...register("password", {
							required: true,
							minLength: 4,
						})}
					/>
					{errors.password && (
						<span style={{ color: "red" }}>
							Digite uma senha valida
						</span>
					)}

					<Button type="submit">Entrar</Button>
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
