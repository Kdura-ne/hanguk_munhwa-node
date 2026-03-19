import React from "react";
import "./quiz.css";

const Quiz = () => {
    return (
        <main>
            <div className="quiz-container">
                <form className="quiz-form">
                    <h2 className="quiz-title">Quiz: Cultura Coreana / 한국 문화 퀴즈</h2>
                    <p className="quiz-instructions">Escolha uma alternativa por pergunta.</p>

                    <ol className="questions-list">
                        <li className="question">
                            <fieldset>
                                <legend>1. Em que ano foi sediada as Olimpíadas de Seul?</legend>
                                <div className="options">
                                    <label><input type="radio" name="q1" value="a" /> a) 1984</label>
                                    <label><input type="radio" name="q1" value="b" /> b) 1992</label>
                                    <label><input type="radio" name="q1" value="c" /> c) 1988</label>
                                    <label><input type="radio" name="q1" value="d" /> d) 2002</label>
                                </div>
                            </fieldset>
                        </li>

                        <li className="question">
                            <fieldset>
                                <legend>2. Qual prato é tradicionalmente fermentado?</legend>
                                <div className="options">
                                    <label><input type="radio" name="q2" value="a" /> a) Bibimbap</label>
                                    <label><input type="radio" name="q2" value="b" /> b) Kimchi</label>
                                    <label><input type="radio" name="q2" value="c" /> c) Bulgogi</label>
                                    <label><input type="radio" name="q2" value="d" /> d) Tteokbokki</label>
                                </div>
                            </fieldset>
                        </li>

                        <li className="question">
                            <fieldset>
                                <legend>3. Qual a dança tradicional coreana que é conhecida pela sua performance com leques?</legend>
                                <div className="options">
                                    <label><input type="radio" name="q3" value="a" /> a) Buchaechum</label>
                                    <label><input type="radio" name="q3" value="b" /> b) Arirang</label>
                                    <label><input type="radio" name="q3" value="c" /> c) Hanbok</label>
                                    <label><input type="radio" name="q3" value="d" /> d) Gochugaru</label>
                                </div>
                            </fieldset>
                        </li>

                        <li className="question">
                            <fieldset>
                                <legend>4. Em quais situações os coreanos geralmente usam o hanbok na atualidade?</legend>
                                <div className="options">
                                    <label><input type="radio" name="q4" value="a" /> a) No trabalho, em escolas e em atividades físicas diárias.</label>
                                    <label><input type="radio" name="q4" value="b" /> b) Em feriados tradicionais como Chuseok e Seollal, casamentos e visitas a palácios históricos.</label>
                                    <label><input type="radio" name="q4" value="c" /> c) Apenas em funerais e durante a ocupação japonesa, como forma de resistência.</label>
                                    <label><input type="radio" name="q4" value="d" /> d) Em desfiles de moda internacionais e clipes de K-pop exclusivamente.</label>
                                </div>
                            </fieldset>
                        </li>

                        <li className="question">
                            <fieldset>
                                <legend>5. Em quais esportes a Coreia do Sul se destaca?</legend>
                                <div className="options">
                                    <label><input type="radio" name="q5" value="a" /> a) Natação e Taekwondo</label>
                                    <label><input type="radio" name="q5" value="b" /> b) Bocha e Curling</label>
                                    <label><input type="radio" name="q5" value="c" /> c) Beisebol e Basquete</label>
                                    <label><input type="radio" name="q5" value="d" /> d) Tiro com arco e Golfe</label>
                                </div>
                            </fieldset>
                        </li>

                        <li className="question">
                            <fieldset>
                                <legend>6. Qual festival é famoso na Coreia?</legend>
                                <div className="options">
                                    <label><input type="radio" name="q6" value="a" /> a) Seollal</label>
                                    <label><input type="radio" name="q6" value="b" /> b) Festival Qingming</label>
                                    <label><input type="radio" name="q6" value="c" /> c) Oktoberfest</label>
                                    <label><input type="radio" name="q6" value="d" /> d) Carnival</label>
                                </div>
                            </fieldset>
                        </li>

                        <li className="question">
                            <fieldset>
                                <legend>7. Qual dinastia é conhecida pelas cerâmicas celadon?</legend>
                                <div className="options">
                                    <label><input type="radio" name="q7" value="a" /> a) Joseon</label>
                                    <label><input type="radio" name="q7" value="b" /> b) Silla</label>
                                    <label><input type="radio" name="q7" value="c" /> c) Balhae</label>
                                    <label><input type="radio" name="q7" value="d" /> d) Goryeo</label>
                                </div>
                            </fieldset>
                        </li>

                        <li className="question">
                            <fieldset>
                                <legend>8. Qual o nome da pasta de pimenta coreana?</legend>
                                <div className="options">
                                    <label><input type="radio" name="q8" value="a" /> a) Gochujang</label>
                                    <label><input type="radio" name="q8" value="b" /> b) Doenjang</label>
                                    <label><input type="radio" name="q8" value="c" /> c) Sriracha</label>
                                    <label><input type="radio" name="q8" value="d" /> d) Gochugaru</label>
                                </div>
                            </fieldset>
                        </li>

                        <li className="question">
                            <fieldset>
                                <legend>9. Bulgogi é um prato típico da Coreia que consiste em:</legend>
                                <div className="options">
                                    <label><input type="radio" name="q9" value="a" /> a) Sopa de kimchi</label>
                                    <label><input type="radio" name="q9" value="b" /> b) Arroz frito</label>
                                    <label><input type="radio" name="q9" value="c" /> c) Carne marinada grelhada</label>
                                    <label><input type="radio" name="q9" value="d" /> d) Panqueca de frutos do mar</label>
                                </div>
                            </fieldset>
                        </li>

                        <li className="question">
                            <fieldset>
                                <legend>10. Em que dia foi fundada a República da Coreia?</legend>
                                <div className="options">
                                    <label><input type="radio" name="q10" value="a" /> a) 1 de agosto 1945</label>
                                    <label><input type="radio" name="q10" value="b" /> b) 15 de agosto 1948</label>
                                    <label><input type="radio" name="q10" value="c" /> c) 3 de maio 1956</label>
                                    <label><input type="radio" name="q10" value="d" /> d) 15 de julho 1942</label>
                                </div>
                            </fieldset>
                        </li>
                    </ol>

                    <div className="quiz-actions">
                        <button type="submit" className="btn-submit">Enviar respostas</button>
                        <button type="reset" className="btn-reset">Limpar</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Quiz;