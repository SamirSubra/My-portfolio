<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta charset="UTF-8">
    <meta name="description"
          content="Portfolio de Samir Subra, étudiant en informatique à l'IUT de Vélizy. Samir Subra présente son parcours, ses projets, et sa situation actuelle.">
    <meta name="Samir Subra" content="Portfolio Samir Subra">
    <meta name="robots" content="index,follow">

    <link rel="stylesheet" href="css/style.css">
    <title>Samir SUBRA - Developpeur web</title>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-gWZI8pZgeI+GBa/W4iky4W9+XOrpgDpIp5t+7tdt+rWd2Qf+tjK40/2QEMfC5ch5" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/c22d046747.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js"></script>
    <script src=’https://unpkg.com/scrollreveal></script>
</head>
<body>
<header>
    <div class="contenu">
        <div class="photo_nom">
            <p>Samir Subra</p>
        </div>

        <nav class="navbar">
            <a href="#accueil">Accueil</a>
            <a href="#moi">Moi</a>
            <a href="#mes_projets">Projets</a>
            <a href="#contact">Contact</a>
        </nav>
        <div class="burger">
            <span></span>
        </div>
    </div>
</header>
<main>
    <section id="accueil">
        <h1 class="hello-text">Hello !</h1>
        <p>Étudiant en troisième année de BUT Informatique, à l'IUT de Vélizy, Université de Versailles-St-Quentin, je
            suis spécialisé dans
            le développement web (front-end), mais je me débrouille
            pas mal dans d’autres domaines :)
        </p>
    </section>
    <section id="moi" >
        <div class="titre">
            <h1>À propos de moi </h1>
            <p>Parlons un peu plus de moi ! </p>
            <div class="trait"></div>
        </div>
        <div class="division_moi">
            <div class="gauche">
                <h2 class="reveal">Qui es-tu ?</h2>
                <p class="reveal">Après avoir obtenu son bac scientifique, Samir SUBRA s’est dirigé vers un BUT informatique. Il a manipulé... je pense que je devrais plutôt parler de moi-même à la première personne :). J’ai pu étudier divers langages informatiques lors de mon cursus,
                    et me perfectionner via divers projets de groupe.
                    Projets qui m’ont d’ailleurs poussé à travailler en groupe, et à être plus à l’aise dans le travail
                    d’équipe. Je suis un passionné d'informatique qui cherche à devenir meilleur chaque jour.
                </p>
                <h2 class="reveal"> Quelle est ta situation actuelle ?</h2>
                <p class="reveal">
                    Je suis actuellement à la recherche d'un stage de 4 à 5 mois, à partir du 11 mars 2024, en tant
                    que développeur web, afin de mettre mes
                    compétences en pratique
                    et de continuer à apprendre. Mon objectif est de travailler dans une entreprise innovante et
                    dynamique où je pourrais
                    contribuer au développement de projets intéressants et utiles.
                </p>

            </div>
            <div class="droite">
                <h2 class="reveal">Mes compétences</h2>
                <span class="content reveal"></span>
            </div>
        </div>
    </section>

    <section id="mes_projets">
        <div class="titre">
            <h1>Mes projets</h1>
            <p>Voici mon taff! </p>
            <p>(personnels et universitaires)</p>
            <div class="trait"></div>
        </div>


        <div class="liste_projets">
            <div class="projet reveal">
                <div class="left">
                    <p class="titre-projet"> Youli BLack </p>
                    <p class="description">
                        Youli Black représente l'entreprise, dirigée par une coiffeuse exceptionnellement talentueuse, ayant sollicité mes compétences en vue de la conception de son site internet. Ce site web lui offre la possibilité de présenter l'intégralité de ses services, ainsi que sa grille tarifaire, de manière élégante et efficace.</p>
                    <span class="technologies">
                        <li>PHP</li>
                    </span>
                </div>
                <div class="right hover">
                    <a href="http://youliblack.fr"><img src="img/youliblack.png" class="static-image" alt="image du projet de site e-commerce de vente et location de vehicule"></a>
                </div>
            </div>
            <div class="projet revert reveal">
                <div class="left ">
                    <p class="titre-projet"> Calculateur de Probabilité mathématique & Cryptographie RC4 </p>
                    <p class="description">
                        Projet scolaire, consistant à concevoir une application web composé d'un module permettant de calculer la probabilité d'une
                        loi normale,
                        et d'un module permettant de crypter/décrypter une phrase grâce à un algorithme RC4.</p>
                    <span class="technologies">
                        <li>PHP</li><li>Python</li><li>SQL</li>
                    </span>
                </div>
                <div class="right">
                    <a href="https://gitlab.com/sae_dev_appli/sae_dev_appli"><img src="img/simfast.png" alt="image du projet calculateur de probabilité et cryptographie rc4"></a>
                </div>
            </div>
            <div class="projet reveal">
                <div class="left">
                    <p class="titre-projet"> Snake </p>
                    <p class="description">
                        Le jeu SNAKE, dont la renommée n'est plus à faire, représente l'un des défis que j'ai entrepris afin de perfectionner mes compétences au moyen du framework REACT.
                    </p>
                    <span class="technologies">
                        <li>REACT</li>
                    </span>
                </div>
                <div class="right">
                    <a href="https://github.com/SamirSubra"><img src="img/snake.png" alt="image du projet morpion"></a>
                </div>
            </div>
    </section>

    <section id="contact">
        <div class="titre">
            <h1>Me contacter</h1>
            <p>Faissons connaissance ! </p>
            <div class="trait"></div>
        </div>
        <div class="contenue">
            <form action="contact.php" method="post">
                <div class="elements">
                    <div class="input">
                        <input type="text" name="nom" id="nom" required>
                        <label for="nom">Nom & Prénom</label>
                    </div>
                    <div class="input">
                        <input type="text" name="email" id="email" required>
                        <label for="email">Email</label>
                    </div>
                    <div class="input_message">
                        <textarea name="message" id="message" required></textarea>
                        <label for="message">Message</label>
                    </div>
                    <input type="submit" value="Envoyer" name="envoyer">
                </div>
            </form>
            <!--            --><?php
            if (isset($_SESSION['message'])) {
                echo "<p class='message_form'>" . $_SESSION['message'] . "</p>";
                $_SESSION['message'] = "";
            }
            ?>
        </div>
    </section>
</main>

<footer>
    <div class="contenu">
        <!--        <a href="#">Mentions légales</a>-->
        <span></span>
        <p>© Copyright 2023. Made by Samir Subra</p>
        <div class="social">
            <a href="https://www.linkedin.com/in/samir-subra-859331258/"><i class="fa-brands fa-linkedin fa-2x"></i></a>
            <a href="https://github.com/SamirSubra"><i class="fa-brands fa-github fa-2x"></i></a>
        </div>
    </div>
</footer>
<script src="js/script.js"></script>
</body>
</html>