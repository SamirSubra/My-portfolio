import "../../styles/components/MeSection.scss";
import SkillsSphere from "../utils/SkillsSphere.tsx";
import Reveal from "../utils/Reveal.tsx";

const MeSection = () => {
    return (
        <section id="me">
                <Reveal as={"div"} className={"title"}>
                    <h2>À propos de moi </h2>
                    <p>Parlons un peu plus de moi ! </p>
                    <div className="trait"></div>
                </Reveal>

                <div className="split">
                    <div className="left">
                        <Reveal as={"h3"}>Qui es-tu ?</Reveal>
                        <Reveal as={"p"}>Après avoir obtenu son bac scientifique, Samir SUBRA s’est dirigé vers un
                            BUT
                            informatique. Il a manipulé... je pense que je devrais plutôt parler de moi-même à la
                            première
                            personne :). J’ai pu étudier divers langages informatiques lors de mon cursus,
                            et me perfectionner via divers projets de groupe.
                            J'ai eu l'opportunité d'effectuer plusieurs stages très enrichissants en tant que
                            développeur
                            full-stack, où j'ai pu mettre en pratique mes connaissances et acquérir une expérience
                            précieuse
                            dans le développement web.
                            Je suis un passionné d'informatique qui cherche à devenir meilleur chaque jour.
                        </Reveal>

                        <Reveal as={"h3"}>Quelle est ta situation actuelle ?</Reveal>
                        <Reveal as={"p"}>Je suis actuellement à la recherche d'un job, en tant
                            que développeur web, afin de mettre mes
                            compétences en pratique
                            et de continuer à apprendre. Mon objectif est de travailler dans une entreprise innovante et
                            dynamique où je pourrais
                            contribuer au développement de projets intéressants et utiles.
                        </Reveal>
                    </div>
                    <div className="right">
                        <Reveal as={"h3"}>Mes compétences</Reveal>
                        <Reveal as={"div"}>
                            <SkillsSphere/>
                        </Reveal>
                    </div>
                </div>
            </section>
    );
};

export default MeSection;