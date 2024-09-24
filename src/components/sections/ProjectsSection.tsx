import "../../styles/components/ProjectsSection.scss";
import Reveal from "../utils/Reveal.tsx";
import youliBlackImage from '../../assets/images/youliblack.png';
import vahineImage from '../../assets/images/vahine.png';


const ProjectsSection = () => {
    return (
        <section id="projects">
            <Reveal as={"div"} className={"title"}>
                <h2>Mes projets</h2>
                <p>Voici une partie de mon taff! </p>
                <p className="description">Ces projets, entièrement développés de A à Z, intègrent le CMS WordPress,
                    offrant
                    ainsi à leurs propriétaires la possibilité de modifier facilement certains aspects du site
                    (images,
                    textes, etc.) sans nécessiter l'intervention d'un développeur.</p>
                <div className="line"></div>
            </Reveal>
            <div className="projects-list">
                <Reveal as={"div"} className={"project"}>
                    <div className="left">
                        <p className="title"> Youli BLack </p>
                        <p className="description">
                            Youli Black représente l'entreprise, dirigée par une coiffeuse exceptionnellement
                            talentueuse,
                            ayant sollicité mes compétences en vue de la conception de son site internet. Ce site
                            web lui
                            offre la possibilité de présenter l'intégralité de ses services, ainsi que sa grille
                            tarifaire,
                            de manière élégante et efficace.
                        </p>
                        <span className="technologies">
                        <li>PHP</li><li>SASS</li><li>WordPress</li>
                    </span>
                    </div>
                    <div className="right">
                        <a href="https://youliblack.fr" target="_blank">
                            <img src={youliBlackImage}
                                 className="static-image"
                                 alt="image du projet Youliblack"/>
                        </a>
                    </div>
                </Reveal>
                <Reveal as={"div"} className={"project"}>
                    <div className="left ">
                        <p className="title"> Vahine Location </p>
                        <p className="description">
                            Vahine Location est l'entreprise, dirigée par un indépendant spécialisé dans tout ce que
                            touche
                            l'automobile (permis, carte grise,
                            location / vente de véhicules etc...). Ce site lui permet de mettre en avant ces
                            services, mais
                            aussi d'attirer les prospects
                            dans ses locaux.</p>
                        <span className="technologies">
                        <li>PHP</li><li>SASS</li><li>WordPress</li>
                    </span>
                    </div>
                    <div className="right">
                        <a href="https://preprod-vahine.arbuspace.com/" target="_blank"><img src={vahineImage}
                                                                                             alt="image du projet Vahine Location"/></a>
                    </div>
                </Reveal>
                <Reveal as={"p"}>La majorité des projets que j'ai réalisés ont été développés lors de mon
                    dernier stage. Je
                    serai ravi de vous fournir plus de détails à ce sujet lors d'un entretien.</Reveal>
            </div>
        </section>
    );
};

export default ProjectsSection;