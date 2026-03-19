import React from "react";
import "./log-cad.css"

const Cadastro = () => {
    return(
        <main>
            <div className="form-container" id="cadastro-cont">
                <h1 className="form-title">Cadastro / 회원가입</h1>
            
                <form className="signup-form" action="" method="">
                    <div className="form-group">
                        <label htmlFor="nome">Nome / 이름</label>
                        <input type="text" id="nome" name="nome" required placeholder="Digite seu nome"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">E-mail / 이메일</label>
                        <input type="email" id="email" name="email" required placeholder="seu@email.com"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="senha">Senha / 비밀번호</label>
                        <input type="password" id="senha" name="senha" required placeholder="Mínimo 6 caracteres"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmar-senha">Confirmar Senha / 비밀번호 확인</label>
                        <input type="password" id="confirmar-senha" name="confirmar-senha" required placeholder="Repita sua senha"/>
                    </div>

                    <button type="submit" className="btn-submit">Cadastrar / 가입하기</button>
                
                    <p className="form-footer">
                        Já tem uma conta? <a href="/login">Faça login / 로그인</a>
                    </p>
                </form>
            </div>
        </main>
    )
}

export default Cadastro;