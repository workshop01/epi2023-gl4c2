import { Header } from './components/Header'
import { Profil } from './components/Profil'
import './cv.css'
export const Cv = () => {
    const title_cv = "Foulen ben foulen"

    const description = "Diplômé d'un master 2 Entrepreneuriat et Innovation (Programme Grande  Ecole EDHEC), je me tourne en"
    const user = {
        name : "Foulen",
        email : "foulen@gmail.com",
        address : "Sahlou , 4004",
        social_media : {
            facebook_link : "http://facebook.com",
            twitter_link : "http://facebook.com",
            google_link : "http://facebook.com",
        }

    }
    return (
        <>
           {/* afficher le contenu du composant Header avec la propriété title= */}
            <Header title={title_cv} />

            <Profil user={user} description={description} />

            <section>
                <h2>Expériences professionnelles</h2>
                <div className="exp">
                    <div className="exp-logo">
                        <a href="/#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/pierre.png" alt="Logo de Pierre Giraud"/></a>
                    </div>
                    <div className="exp-info">
                        <h3>Créateur</h3>
                        <h4>Pierre Giraud</h4>
                        <h4>Avril 2014 - Aujourd'hui</h4>
                    </div>
                    <div className="exp-desc">
                        <p>Créateur des sites pierre-giraud.fr puis pierre-giraud.com
                            début 2015 sur lesquels je partage mes formations complète en
                            programmation, optimisation du référencement, etc.</p>
                    </div>
                </div>
                <div className="exp">
                    <div className="exp-logo">
                        <a href="/#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/legalplace.png" alt="Logo de LegalPlace"/></a>
                    </div>
                    <div className="exp-info">
                        <h3>Responsable SEO et contenu</h3>
                        <h4>LegalPlace</h4>
                        <h4>Novembre 2017 - Décembre 2018</h4>
                    </div>
                    <div className="exp-desc">
                        <p>Responsable SEO du site et plus globalement de la stratégie
                            de production de contenu : recherche de mots clefs, réécriture,
                            contrôle qualité du contenu publié, etc.</p>
                    </div>
                </div>
                <div className="exp">
                    <div className="exp-logo">
                        <a href="/#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/prestashop.png" alt="Logo de PrestaShop"/></a>
                    </div>
                    <div className="exp-info">
                        <h3>Stage marketing</h3>
                        <h4>PrestaShop</h4>
                        <h4>Mai 2013 - Novembre 2013</h4>
                    </div>
                    <div className="exp-desc">
                        <p>Contrôle de la qualité et de l'intégrité des modules proposés,
                            modernisation de la marketplace & passerelle avec la communauté.</p>
                    </div>
                </div>
            </section>

            <section>
                <h2>Formation</h2>
                <div className="exp">
                    <div className="exp-logo">
                        <a href="/#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/edhec.png" alt="Logo EDHEC"/></a>
                    </div>
                    <div className="exp-info">
                        <h3>EDHEC Programme Grande Ecole</h3>
                        <h4>2011 - 2015</h4>
                    </div>
                    <div className="exp-desc">
                        <p>blablabla</p>
                    </div>
                </div>
                <div className="exp">
                    <div className="exp-logo">
                        <a href="/#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/dd.png" alt="Logo Dumont"/></a>
                    </div>
                    <div className="exp-info">
                        <h3>Prépa ECS option Maths</h3>
                        <h4>2009 - 2011</h4>
                    </div>
                    <div className="exp-desc">
                        <p>blablabla</p>
                    </div>
                </div>
                <div className="exp">
                    <div className="exp-logo">
                        <a href="/#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/dd.png" alt=""/></a>
                    </div>
                    <div className="exp-info">
                        <h3>Bac S option Maths</h3>
                        <h4>2005 - 2009</h4>
                    </div>
                    <div className="exp-desc">
                        <p>blablabla</p>
                    </div>
                </div>
            </section>

            <section>
                <h2>Compétences</h2>
                <h3 className="h3gauche">Professionnelles</h3>
                <div className="comp">
                    <p>HTML / CSS</p>
                    <div className="conteneur-barre"><span className="barre c100"></span></div>
                </div>
                <div className="comp">
                    <p>PHP / MySQL</p>
                    <div className="conteneur-barre"><span className="barre c95"></span></div>
                </div>
                <div className="comp">
                    <p>JavaScript</p>
                    <div className="conteneur-barre"><span className="barre c90"></span></div>
                </div>
                <div className="comp">
                    <p>SEO</p>
                    <div className="conteneur-barre"><span className="barre c100"></span></div>
                </div>
                <h3 className="h3gauche">Personnelles</h3>
                <div className="comp2">
                    <p>Créativité</p>
                    <p>90%</p>
                    <div className="conteneur-barre2"><span className="barre c90"></span></div>
                </div>
                <div className="comp2">
                    <p>Adaptation</p>
                    <p>85%</p>
                    <div className="conteneur-barre2"><span className="barre c85"></span></div>
                </div>
                <div className="comp2">
                    <p>Sérieux</p>
                    <p>95%</p>
                    <div className="conteneur-barre2"><span className="barre c95"></span></div>
                </div>
                <div className="comp2">
                    <p>Pédagogie</p>
                    <p>95%</p>
                    <div className="conteneur-barre2"><span className="barre c95"></span></div>
                </div>
            </section>

            <section>
                <h2>Centres d'intérêt</h2>
                <figure className="interet">
                    <img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/trail.png" alt="Trail"/>
                        <figcaption>Trail</figcaption>
                </figure>
                <figure className="interet">
                    <img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/cuisine.jpg" alt="Cuisine"/>
                        <figcaption>Cuisine</figcaption>
                </figure>
                <figure className="interet">
                    <img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/gaming.jpg" alt="Gaming"/>
                        <figcaption>Jeux vidéos</figcaption>
                </figure>
                <figure className="interet">
                    <img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/livre.jpg" alt="Littérature"/>
                        <figcaption>Littérature</figcaption>
                </figure>
            </section>

            <footer>
                <p><a href="https://www.pierre-giraud.com">©Pierre Giraud</a> 2020</p>
                <p>Reproduction à des fins commerciales interdite.</p>
                <p>Merci de respecter le travail des auteurs en faisant un lien vers
                    le contenu original !</p>
            </footer>
        </>
    )
}