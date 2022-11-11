import React from "react";
import { StyledRegisterVideo } from "./styles";

export default function RegisterVideo() {
    const [formVisivel, setFormVisivel] = React.useState(false);
    // x Falta o botão para adicionar
    // x Modal
    // x Precisamos controlar o state
    // -> Formulário em si
    return (
        <StyledRegisterVideo>
                <button className="add-video" onClick={() => setFormVisivel(true)}>
                    +
                </button>
                {/* Ternário*/}
                {/* Operadores de curto-circuito*/}
                {formVisivel
                    ? (
                        <form>
                            <div>
                                <button className="close-modal" onClick={() => setFormVisivel(false)}>
                                    x
                                </button>
                                <input placeholder="Titulo do vídeo" />
                                <input placeholder="URL" />
                                <button type="submit">
                                    Cadastrar
                                </button>
                            </div>
                        </form>
                    )
                    : false}
        </StyledRegisterVideo>
    )
}