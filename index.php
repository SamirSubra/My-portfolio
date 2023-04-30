    <?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta charset="UTF-8">
    <meta name="description" content="Portfolio de Samir Subra, étudiant en informatique à l'IUT de Vélizy. Samir Subra présente son parcours, ses projets, et sa situation actuelle.">
    <meta name="Samir Subra" content="Portfolio Samir Subra">
    <meta name="robots" content="index,follow">

    <link rel="stylesheet" href="css/style.css">
    <title>Samir SUBRA - Developpeur web</title>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-gWZI8pZgeI+GBa/W4iky4W9+XOrpgDpIp5t+7tdt+rWd2Qf+tjK40/2QEMfC5ch5" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/c22d046747.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js"></script>
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
    <section id="accueil" class="hidden">
        <h1>Hello !</h1>
        <p>Etudiant en deuxième année de BUT Informatique, à l'IUT de Vélizy, Université de Versailles-St-Quentin, je
            suis spécialisé dans
            le développement web (front-end), mais je me débrouille
            pas mal dans d’autres domaines :)
        </p>
    </section>
    <section id="moi" class="hidden">
        <div class="titre">
            <h1>A propos de moi </h1>
            <p>Parlons un peu plus de moi ! </p>
            <div class="trait"></div>
        </div>
        <div class="division_moi">
            <div class="gauche">
                <h2>Qui es tu ?</h2>
                <p>Après avoir obtenu son bac scientifique, Samir Subra s’est dirigé vers un BUT informatique. Il a
                    manipulé... je pense que je devrais plutôt parler de moi
                    même à la première personne :). J’ai pu étudier divers langages informatiques lors de mon cursus,
                    et me perfectionner via divers projets de groupe.
                    Projets qui m’ont d’ailleurs poussé à travailler en groupe, et à être plus à l’aise dans le travail
                    d’équipe. Je suis un passionné d'informatique qui cherche à devenir meilleur chaque jour.
                </p>
                <h2>Quelle est ta situation actuelle ?</h2>
                <p>
                    Je suis actuellement à la recherche d'un stage, de 8 à 10 semaines, en tant
                    que développeur, afin de mettre mes
                    compétences en pratique
                    et de continuer à apprendre. Mon objectif est de travailler dans une entreprise innovante et
                    dynamique où je pourrais
                    contribuer au développement de projets intéressants et utiles.
                </p>
                <p style="color: #D8905C;">
                    N'hésitez pas à me contacter si vous avez besoin de plus d'informations ou de précisions.
                </p>
            </div>
            <div class="droite">
                <h2>Mes compétences</h2>
                <span class="content"></span>
            </div>
        </div>
    </section>

    <section id="mes_projets" class="hidden">
        <div class="titre">
            <h1>Mes projets</h1>
            <p>Voici mon taff! </p>
            <p>(personnels et universitaires)</p>
            <div class="trait"></div>
        </div>


        <div class="liste_projets">
            <input type="radio" name="radio-btn" id="radio1" checked>
            <input type="radio" name="radio-btn" id="radio2">
            <input type="radio" name="radio-btn" id="radio3" >
            <input type="radio" name="radio-btn" id="radio4">
            <input type="radio" name="radio-btn" id="radio5">

            <div class="projet first">
                <a href="#"> Calculateur de Probabilité mathématique & Cryptographie RC4 </a>
                <img src="img/simfast.png" alt="image du projet calculateur de probabilité et cryptographie rc4"
                     class="site">
                <p class="description"> Application web compsé d'un module permettant de calculer la probabilité d'une
                    loi normale,
                    et d'un module permettant de crypter/décrypter une phrase grâce un algorithme RC4. Codé en <b> Php,
                        Python</b>
                    et<b> Mysql</b>.</p>
            </div>
            <div class="projet">
                <a href="#"> Morpion</a>
                <img src="img/morpion.png" alt="image du projet morpion" class="site">
                <p class="description"> Reproduction du morpion en <b> Php </b>et <b>JavaScript</b></p>
            </div>
            <div class="projet">
                <a href="#"> E-commerce vente et location de véhicule</a>
                <img src="img/als.png" alt="image du projet de site e-commerce de vente et location de vehicule"
                     class="site">
                <p class="description">Création d'un site de location/vente de voiture et de produits pour véhicules.
                    Produit avec <b>Wordpress</b></p>
            </div>
            <div class="projet">
                <a href="#"> Pacman</a>
                <img src="img/pacman.png" alt="image du projet pacman" class="application">
                <p class="description"> Reproduction du célébre jeu pacman en <b>langage c</b></p>
            </div>
            <div class="projet petit">
                <a href="#"> Algorithme d’itinéraire entre villes</a>
                <img src="img/pokemon.png" alt="image du projet algorithme d'itinéraire entre villes de France"
                     class="application">
                <p class="description"> Application permettant de fournir un iténeraire efficace entre plusieurs villes
                    de France. Codé en <b>JavaFX </b>. </p>
            </div>
        </div>
        <div class="navigation-manuel">
            <label for="radio1" class="manuel-btn"></label>
            <label for="radio2" class="manuel-btn"></label>
            <label for="radio3" class="manuel-btn r3"></label>
            <label for="radio4" class="manuel-btn r4"></label>
            <label for="radio5" class="manuel-btn r5"></label>
        </div>
    </section>

    <section id="contact" class="hidden">
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
                    <input type="submit" value="envoyer" name="envoyer">
                </div>
            </form>
<!--            --><?php
                if (isset($_SESSION['message'])){
                   echo  "<p class='message_form'>" .$_SESSION['message'] . "</p>";
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