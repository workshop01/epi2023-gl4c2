import { Experience } from './components/Experience'
import { Formation } from './components/Formation'
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
    const experiences = [
        {
            titre : 'Créateur',
            date_debut : 'Juin 2014',
        }
    ]
    return (
        <>
           {/* afficher le contenu du composant Header avec la propriété title= */}
            <Header title={title_cv} />

            <Profil user={user} description={description} />

            <Experience></Experience>

            <Formation></Formation>

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