import Sugestions from "./Sugestions";

export default function Sidebar(){
    return (
        <div className="sidebar">
                    <div className="user">
                        <img src="../assets/img/catanacomics.svg" alt=""/>
                        <div className="text">
                            <strong>catanacomics</strong>
                            Catana
                        </div>
                    </div>

                    <Sugestions />

                    <div className="links">
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                    </div>

                    <div className="copyright">
                        © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
    )
}