// app/login/page.js

"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image"; // Importa o componente Image

// Importa a imagem local
import capitu from "./capitu.jpg";

// Este componente representa a página de login
function LoginPage() {
  // Use state para gerenciar o email, senha e estado da UI
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Função para lidar com o envio do formulário de login.
   * @param {Event} e O evento de envio do formulário.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o recarregamento padrão da página
    setError(""); // Limpa mensagens de erro anteriores
    setIsSubmitting(true); // Ativa o estado de carregamento

    try {
      // Simulação de uma chamada de API para login.
      // Em um projeto real, aqui você faria uma chamada fetch() para o seu backend.
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Lógica de validação simulada.
      if (email === "teste@teste.com" && password === "senha123") {
        alert("Login realizado com sucesso!");
        // Em um projeto real, você redirecionaria o usuário para uma página de dashboard, por exemplo.
      } else {
        setError("Email ou senha incorretos.");
      }
    } catch (err) {
      // Captura e exibe erros da chamada de API (se houver).
      setError("Ocorreu um erro. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false); // Desativa o estado de carregamento, permitindo novo envio
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {/* Adiciona a imagem acima do título com a classe 'profileImage' */}
        <Image
          src={capitu}
          alt="Foto do usuário"
          className={styles.profileImage}
          width={100} // Adiciona a largura da imagem
          height={100} // Adiciona a altura da imagem
        />
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          {/* Exibe a mensagem de erro se a variável 'error' tiver conteúdo */}
          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Este é o botão de login, com a classe CSS aplicada corretamente */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.loginButton}
          >
            {isSubmitting ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
