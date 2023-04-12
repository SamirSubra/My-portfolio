<?php
session_start();
require_once(__DIR__ . '/vendor/autoload.php');

use \Mailjet\Resources;

define('API_USER', 'ec042b0a52bf9c6f540da21b752e3f55');
define('API_LOGIN', '50c0e4ee01a926580fb50a6b3675632e');
$mj = new \Mailjet\Client(API_USER, API_LOGIN, true, ['version' => 'v3.1']);


if (!empty($_POST['nom']) && !empty($_POST['email']) && !empty($_POST['message'])) {
    $mon_email = "samir.subra26@gmail.com";
    $sujet = "Nouveau message du site web";
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $body = [
            'Messages' => [
                [
                    'From' => [
                        'Email' => "$email",
                        'Name' => "$nom"
                    ],
                    'To' => [
                        [
                            'Email' => "$mon_email",
                            'Name' => "Samir SUBRA"
                        ]
                    ],
                    'Subject' => "$sujet",
                    'TextPart' => "$message ",
                ]
            ]
        ];

        $response = $mj->post(Resources::$Email, ['body' => $body]);
        $response->success();
        $_SESSION['message'] = "Votre message a bien été envoyé";
        header("Location:index.php");

    }else{
        $_SESSION['message'] = "Votre email n'est pas valide";
        header("Location:index.php");
    }
}else{
    header("Location:index.php");
    die();
}