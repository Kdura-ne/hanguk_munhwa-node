import React from "react";
import "./log-cad.css";

const Login = () => {
    return(
        <main>
            <div className="form-container">
                <h1 className="form-title">Login / 로그인</h1>

                <form className="signup-form" action="" method="POST">
                    <div className="form-group">
                        <label htmlFor="email">E-mail / 이메일</label>
                        <input type="email" id="email" name="email" required placeholder="seu@email.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="senha">Senha / 비밀번호</label>
                        <input type="password" id="senha" name="senha" required placeholder="Mínimo 6 caracteres" />
                    </div>

                    <button type="submit" className="btn-submit">Login / 로그인</button>

                    <p className="form-footer">
                        Não possui uma conta? <a href="/cad">Cadastrar-se / 회원가입</a>
                    </p>
                </form>
            </div>
        </main>
    )
}

export default Login;