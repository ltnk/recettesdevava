import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "r1",
      category: "sugar",
      title: "Fondant au chocolat",
      imageUrl: "../../assets/recipes-photos/cake-chocolate.jpg",
      ingredients: [
        "50 gr de farine",
        "100 gr de beurre (60 gr ou 75 gr peut suffire selon votre goût)",
        "100 gr de sucre en poudre (60 gr ou 75 gr peut suffire selon votre goût)",
        "3 oeufs",
        "200 gr de chocolat noir à dessert",
      ],
      utensils: ["Four", "Saladier", "Cuillère", "Casserole"],
      steps: [
        "1 - Faire fondre le chocolat et le beurre à feu doux dans une casserolle.",
        "2 - Dans un saladier, ajouter le sucre, les oeufs, la farine et le mélange chocolat/beurre et bien mélanger.",
        "3 - Beurrer et fariner le moule et ajouter la préparation.",
        "4 - Enfourner dans un four préchauffé à 200 degrés pendant 15 à 20 minutes.",
      ],
    },
    {
      id: "r2",
      category: "sugar",
      title: "Pancakes de Kiki",
      imageUrl: "../../assets/recipes-photos/pancakes-fluffy.jpg",
      ingredients: [
        "300 gr de farine",
        "50 gr de beurre",
        "2 oeufs",
        "35 cl de lait",
        "2 sachets de levure",
        "50 gr de sucre",
      ],
      utensils: ["Poêle", "Grand bol", "Fouet ou fourchette"],
      steps: [
        "1 - Dans un grand bol tout mélanger.",
        "2 - Cuire les pancakes dans une poêle chauffée.",
      ],
    },
    {
      id: "r3",
      category: "salt",
      title: "Boeuf aux légumes",
      imageUrl: "../../assets/recipes-photos/boeuf-legumes.jpg",
      ingredients: [
        "Boeuf",
        "Une poignée de Haricots plats",
        "1 oignon",
        "Coriandre",
        "1 courgette",
        "Une poignée de chou",
        "Sauce soja sucrée",
        "Sel",
        "Poivre",
        "Sauce soja",
        "Huile",
      ],
      utensils: ["Poêle", "Grand bol", "Spatule"],
      steps: [
        "1 - Faire mariner le boeuf coupé en tranche dans de la sauce soja sucrée pendant 1h.",
        "2 - Faire revenir l'oignon finement coupé dans de l'huile.",
        "3 - Ajouter sel et poivre (selon votre gout), avec un filet de sauce soja.",
        "4 - Ajouter la coriandre finement coupé.",
        "5 - Ajouter le boeuf et remuer jusqu'à la cuisson désirée.",
      ],
    },
    {
      id: "r4",
      category: "vegetarian",
      title: "Sauce Béchamel",
      imageUrl: "../../assets/recipes-photos/bechamel.jpg",
      ingredients: [
        "25 cl de lait",
        "20 gr de beurre",
        "2 cuillères à soupe de farine",
        "Sel et Poivre",
      ],
      utensils: ["Casserole", "Fourchette ou fouet", "Micro-onde"],
      steps: [
        "1 - Dans un grand bol mettre le beurre et le faire fondre au micro-onde.",
        "2 - Ajouter la farine dans le beurre en remuant.",
        "3 - Porter le lait à ébulition et le laisser bouillir 30 secondes.",
        "4 - Verser le lait dans le mélange farine-beurre, bien mélanger et assaisonner selon votre goût.",
        "5 - Chauffer le tout au micro-onde durant une minute et lissez le mélange en remuant bien.",
      ],
    },
    {
      id: "r5",
      category: "vegan",
      title: "Crumble aux pommes",
      imageUrl: "../../assets/recipes-photos/crumble-pommes.jpg",
      ingredients: [
        "4 grosses pommes",
        "1 cuillère à café de cannelle en poudre",
        "200 gr de farine",
        "125 gr de sucre en poudre",
        "100 gr de margarine (mou)",
      ],
      utensils: ["Four", "Grand bol", "Couteau", "Poêle", "Moule à gâteau"],
      steps: [
        "1 - Eplucher les pommes en otant les pépins, les couper en petits morceaux.",
        "2 - Faire revenir les morceaux de pommes dans une poêle avec un peu de margarine.",
        "3 - Ajouter la cannelle",
        "4 - Lorsque les pommes sont tendres, les disposer dans le moule à gâteau.",
        "5 - Pour la pâte : Mélanger la farine, le sucre et la margarine avec les doigts. Lorsque la consistence devient sableuse, émietter la pâte sur les pommes.",
        "6 - Mettre au four préchauffé à 200 degrés pendant 25 minutes.",
        "7 - Servir tiède.",
      ],
    },

    {
      id: "r6",
      category: "vegetarian",
      title: "Gâteau au yaourt de Maga",
      imageUrl: "../../assets/recipes-photos/cake-yaourt.jpg",
      ingredients: [
        "1 pot de yaourt nature",
        "1 pot d'huile neutre",
        "2 pots de sucre",
        "3 pots de farine",
        "3 oeufs",
        "1 sachet de sucre vanillé",
        "1 sachet de levure",
      ],
      utensils: ["Four", "Grand bol", "Fourchette ou fouet", "Moule à gâteau"],
      steps: [
        "1 - Tout mélanger dans un récipient.",
        "2 - Mettre dans le moule et enfourner dans un four préchauffé à 180 degrés pendant 30 minutes.",
      ],
    },

    {
      id: "r7",
      category: "vegetarian",
      title: "Gâteau au yaourt de Maga au nutella",
      imageUrl: "../../assets/recipes-photos/cake-yaourt-nutella.jpg",
      ingredients: [
        "1 pot de yaourt nature",
        "1 pot d'huile neutre",
        "2 pots de sucre",
        "3 pots de farine",
        "3 oeufs",
        "1 sachet de sucre vanillé",
        "1 sachet de levure",
        "Nutella",
      ],
      utensils: [
        "Four",
        "Grand bol",
        "Fourchette ou fouet",
        "Moule à gâteau",
        "Couteau",
      ],
      steps: [
        "1 - Tout mélanger dans un récipient.",
        "2 - Mettre dans le moule et enfourner dans un four préchauffé à 180 degrés pendant 30 minutes.",
        "3 - Attendre que le gâteau tiedisse, le couper en deux et tartiner de nutella.",
      ],
    },

    {
      id: "r8",
      category: "vegetarian",
      title: "Cake Feta Olive",
      imageUrl: "../../assets/recipes-photos/cake-feta-olive.jpg",
      ingredients: [
        "100 gr de farine",
        "25 cl de lait tiède",
        "3 oeufs",
        "100 gr de feta",
        "100 gr de tomates séchées",
        "50 gr d'olives noires dénoyautées",
        "Basilique frais",
        "5 cuillères à soupe d'huile de tomates séchées",
      ],
      utensils: ["Saladier", "Cuillère ou fourchette", "Four", "Moule"],
      steps: [
        "1 - Dans un grand saladier, mélanger la farine, le lait, les oeufs et l'huile.",
        "2 - Ajouter délicatement la feta, les tomates, le basilic coupés et les olives.",
        "3 - Enfourner dans un four préchauffé à 180 degrés pendant 30 à 35 minutes.",
      ],
    },

    {
      id: "r9",
      category: "vegetarian",
      title: "Crêpes",
      imageUrl: "../../assets/recipes-photos/crepes.jpg",
      ingredients: [
        "500 gr de farine fluide",
        "4 oeufs",
        "1 sachet de sucre vanillé",
        "1 pincée de sel",
        "1 litre de lait",
        "2 cuillères à soupe de Rhum",
        "Huile ou beurre pour la cuisson",
      ],
      utensils: ["Saladier", "Fourchette ou fouet", "Poêle"],
      steps: [
        "1 - Tout mélanger et laisser reposer au réfrigérateur pendant 1h.",
        "2 - Cuire les crêpes dans une poêle très chaude (c'est tout le secret d'une cuisson réussie)",
        "3 - Retourner les crêpes lorsque la partie visible semble 'sèche'.",
      ],
    },
    {
      id: "r10",
      category: "salt",
      title: "Crevettes au caramel pour Simon",
      imageUrl: "../../assets/recipes-photos/crevettes.jpg",
      ingredients: [
        "2 grosses poignées de Crevettes",
        "1 cuillère à café de sel",
        "4 cuillères à café de sucre",
        "Une demie cuillère à café de glutamate (optionnel)",
        "Un filet de sauce de poisson",
        "Huile pour la cuisson",
        "Eau",
      ],
      utensils: ["Poêle", "Cuillère à café", "Spatule"],
      steps: [
        "1 - Verser un filet d'huile dans la poêle et faire chauffer.",
        "2 - Ajouter le sel, le sucre, le glutamate, la sauce de poisson et un filet d'eau.",
        "3 - Lorsque la sauce ressemble à une sauce, ajouter les crevettes et finir la cuisson.",
      ],
    },
    {
      id: "r11",
      category: "vegetarian",
      title: "Gratin dauphinois (pour 4 personnes)",
      imageUrl: "../../assets/recipes-photos/gratin.jpg",
      ingredients: [
        "750 gr de pomme de terre à gratin (sinon pomme de terre précuite)",
        "25 cl de lait",
        "25 cl de crème fraiche",
        "1 gousse d'ail",
        "Sel",
        "Poivre",
        "40 gr de beurre",
        "Une pincée de muscade moulue",
        "Emmental (optionnel)",
      ],
      utensils: ["Four", "Moule", "Saladier"],
      steps: [
        "1 - Mélanger le lait, la crème fraiche, le sel et le poivre, la muscade moulue et l'ail finement haché dans un récipient.",
        "2 - Couper les pommes de terres en tranches.",
        "3 - Mélanger délicatement la préparation aux pommes de terre.",
        "4 - Mettre dans un moule et saupoudrer d'emmental (si vous aimez l'emmental)",
        "5 - Enfourner dans un four préchauffé à 180 degrés pendant 35 minutes.",
      ],
    },
    {
      id: "r12",
      category: "vegetarian",
      title: "Cookies",
      imageUrl: "../../assets/recipes-photos/cookie.jpg",
      ingredients: [
        "150 gr de sucre roux",
        "50 gr de beurre mou",
        "4 cuillères à soupe de beurre de cacahuète",
        "1 oeuf",
        "1 cuillère à café de vanille liquide",
        "155 gr de farine",
        "1 cuillère à café de levure",
        "100 gr de chocolat grossièrement concassé",
      ],
      utensils: ["Saladier", "Four", "Mixeur (optionnel)", "Papier cuisson"],
      steps: [
        "1 - Mixer ou mélanger le sucre, le beurre et le beurre de cacahuète jusqu'à obtention d'une pâte crémeuse et homogène.",
        "2 - Ajouter l'oeuf et la vanille liquide et mixer/mélanger à nouveau.",
        "3 - Ajouter la farine, la levure, le chocolat et bien mélanger.",
        "4 - Former des boules avec les mains et les positionner de manière espacées sur une plaque de cuisson.",
        "5 - Préchauffer le four à 160 degré.",
        "6 - Enfourner et laisser cuire pendant 10 à 12 minutes.",
      ],
    },
    {
      id: "r13",
      category: "sugar",
      title: "Gâteau au yaourt de Vang",
      imageUrl: "../../assets/recipes-photos/cake-yaourt-vang.jpg",
      ingredients: [
        "1 yaourt nature",
        "2 pots de farine",
        "2 pots de sucre blanc",
        "Un demi pot d'huile",
        "3 oeufs",
        "Un demi sachet de levure chimique",
        "1 sachet de sucre vanillée",
      ],
      utensils: ["Four", "Moule à gâteau", "Saladier", "Fourchette ou fouet"],
      steps: [
        "1 - Mélanger le tout et mettre dans un moule.",
        "2 - Préchauffer le four à 200 degrés.",
        "3 - Enfourner et laisser cuire pendant 30 minutes.",
      ],
    },
    {
      id: "r14",
      category: "sugar",
      title: "Gâteau végétalien de Laura",
      imageUrl: "../../assets/recipes-photos/gateau-laura.jpg",
      ingredients: [
        "200 gr de farine",
        "150 gr de sucre",
        "2 oeufs",
        "1 sachet de sucre vanillé",
        "Un demi sachet de levure chimique",
        "2 gourdes ou 2 pots de compote de fruits (environ 200 gr)",
        "10 cl d'huile de colza",
      ],
      utensils: ["Saladier", "Fourchette ou fouet", "Four", "Moule à gâteau"],
      steps: [
        "1 - Mélanger tous les ingrédients jusqu'à obtention d'une pête lisse et sans grumeaux.",
        "2 - Enfourner dans un four préchauffé à 150 degrés pendant 25 minutes.",
      ],
    },
    {
      id: "r15",
      category: "sugar",
      title: "Gâteau pommes bananes sans matières grasses",
      imageUrl: "../../assets/recipes-photos/cake-pomme-banane.jpg",
      ingredients: [
        "200 gr de farine",
        "1 sachet de levure chimique",
        "100 gr de sucre",
        "2 oeufs",
        "8 cuillères à soupe de lait écrémé",
        "4 cuillères à soupe de compote de pomme",
        "4 pommes",
        "2 bananes",
      ],
      utensils: ["Saladier", "Fourchette ou fouet", "Four", "Moule à gâteau"],
      steps: [
        "1 - Ecraser les bananes en purée et le mélanger à la compote de pomme, au lait et aux oeufs.",
        "2 - Ajouter la farine, le sucre et la levure.",
        "3 - Eplucher et couper les pommes en petits morceaux et les ajouter délicatement à la préparation.",
        "4 - Mettre le tout dans un moule.",
        "5 - Enfourner dans un four préchauffé à 150 degrés pendant 50 minutes.",
      ],
    },
    {
      id: "r16",
      category: "sugar",
      title: "Gauffres",
      imageUrl: "../../assets/recipes-photos/waffles.jpg",
      ingredients: [
        "500 gr de farine",
        "250 gr de sucre",
        "4 oeufs",
        "100 gr de beurre fondu",
        "2 pincées de sel",
        "40 cl de lait",
        "Bière ou eau",
      ],
      utensils: ["Saladier", "Gauffier", "Cuillère"],
      steps: [
        "1 - Mélanger la farine, le sucre, les oeufs, le beurre, le sel et le lait.",
        "2 - Ajouter la bière ou l'eau petit à petit jusqu'à obtention d'une pâte pas trop épaisse et pas trop liquide (c'est à l'oeil en fait).",
        "3 - Faire chauffer le gauffrier et déposer une grosse cuillère à soupe de pâte sur les plaques et faire cuire.",
      ],
    },
    {
      id: "r17",
      category: "sugar",
      title: "Génoise de Soso",
      imageUrl: "../../assets/recipes-photos/gateau-laura.jpg",
      ingredients: [
        "80 grammes de sucre en poudre",
        "4 oeufs",
        "120 gr de farine",
        "Une demi cuillère à café de levure",
      ],
      utensils: ["Saladier", "Four", "Papier cuisson", "Batteur", "Spatule"],
      steps: [
        "1 - Battre le sucre et les oeufs pendant 10 minutes.",
        "2 - Ajouter la farine et la levure 'en pluie' et l'intégrer au mélange sucre/oeufs avec une spatule",
        "3 - Disposer le mélange sur du papoer cuisson",
        "2 - Enfourner dans un four préchauffé (à chaleur tournante) à 180 degrés pendant 11 minutes.",
      ],
    },
    {
      id: "r18",
      category: "Sugar",
      title: "Montecaos de Chloé",
      imageUrl: "../../assets/recipes-photos/montecaos.jpg",
      ingredients: [
        "250 gr de farine",
        "150 gr de sucre",
        "14 cl d'huile",
        "Canelle en poudre",
      ],
      utensils: ["Saladier", "Fourchette", "Four"],
      steps: [
        "1 - Dans un saladier, mélanger : la farine, le sucre et l'huile.",
        "2 - Former des boules avec les mains.",
        "3 - Les disposer sur une feuille de cuisson.",
        "4 - Saupoudrer de canelle.",
        "5 - Enfourner dans un four préchauffé à 180 degrés pendant 20 minutes.",
      ],
    },
    {
      id: "r19",
      category: "sugar",
      title: "Mug au chocolat",
      imageUrl: "../../assets/recipes-photos/mug-cake.jpg",
      ingredients: [
        "6 carreaux de chocolat",
        "25 gr de beurre",
        "25 de sucre",
        "1 oeuf",
        "20 gr de farine",
      ],
      utensils: ["Mug", "Micro-onde", "Fourchette"],
      steps: [
        "1 - Mettre de beurre et le chocolat dans un mug et le faire fondre au micro-onde.",
        "2 - Ajouter tous les autres ingrédients et bien mélanger.",
        "3 - Faire cuire 40 secondes au micro-onde à 850 watts.",
      ],
    },
    {
      id: "r20",
      category: "sugar",
      title: "Tarte au citron meringuée",
      imageUrl: "../../assets/recipes-photos/tarte-citron.jpg",
      ingredients: [
        "POUR LA PÂTE :",
        "250 gr de farine",
        "125 gr de beurre",
        "70 gr de sucre",
        "2 jaunes d'oeufs",
        "5 cl d'eau",
        "1 pincée de sel",
        "POUR LA CREME AU CITRON : ",
        "3 citrons de taille moyenne",
        "150 gr de sucre",
        "3 oeufs",
        "1 cuillère à soupe de maizena (ou fécule de maïs)",
        "POUR LA MERINGUE : ",
        "2 blancs d'oeufs",
        "Une pincée de sel",
        "100 gr de sucre en poudre",
        "Une demi cuillère à café de levure chimique",
      ],
      utensils: ["Four", "Saladier", "Batteur", "Casserole", "Spatule"],
      steps: [
        "PREPARATION DE LA PÂTE : ",
        "1 - Blanchir les jaunes d'oeufs et le sucre au fouet et détendre le mélange avec l'eau.",
        "2 - Ajouter la farine et le beurre coupé en petit morceau et mélanger avec les mains pour obtenir une pâte sableuse. (Attention, il faut faire vite pour que le mélange ne ramolisse pas trop.",
        "3 - Verser la préparation oeufs/sucre/eau sur la pâte.",
        "4 - Mélanger rapidement.",
        "5 - Former une boule.",
        "6 - Verser dans un moule et au doigt mettre la pâte sur toute la surface du moule.",
        "7 - Faire cuire pendant 20 à 25 minutes dans un four préchauffé à 180 degrés (ou thermostat 7).",
        "8 - Retirer du four, et baisser la température du four à 130 degrés.",
        "PREPARATION DE LA CREME AU CITRON : ",
        "1 - Presser les citrons et ajouter le jus ainsi que les zestes dans une casserole.",
        "2 - Ajouter le sucre, la maizena, remuer et laisser chauffer à feu doux.",
        "3 - Battre les oeufs dans un récipient à part.",
        "4 - Incorporer les oeufs dans la casserole avec le mélange jus de citron.",
        "5 - Augmenter le feu à 'fort' et continuer de remuer avec un fouet.",
        "6 - Lorsque le mélange commence à s'épaissir, éteindre le feu et verser le mélange sur la pâte.",
        "PREPARATION DE LA MERINGUE",
        "1 - Monter les blancs en neige avec une pincée de sel.",
        "2 - Lorsque les blancs sont fermes ajouter le sucre et la levure.",
        "3 - Verser la meringue sur la crème de citron",
        "4 - Enfourner à 130 degrès pendant 15 minutes.",
      ],
    },

    {
      id: "r21",
      category: "vegan",
      title: "Sauce salade de Sabryna",
      imageUrl: "../../assets/recipes-photos/sauce.jpg",
      ingredients: [
        "Vinaigre balsamique",
        "Moutarde à l'ancienne",
        "Huile d'olive",
        "Sucre en poudre",
        "Kubor (ou bouillon de légumes ou jus de cuisson)",
      ],
      utensils: ["Bol", "Cuillère"],
      steps: [
        "1 - Mélanger tous les ingrédients à l'oeil jusqu'à obtention d'une sauce.",
        "2 - La quatité des ingrédients varie en fonction des goûts de chacun.",
      ],
    },

    {
      id: "r22",
      category: "vegan",
      title: "Sauce salade de Maman",
      imageUrl: "../../assets/recipes-photos/sauce.jpg",
      ingredients: [
        "10 cl de vinaigre de vin",
        "10 cl d'huile de colza",
        "10 cl de sauce soja",
        "10 cl de sucre en poudre",
      ],
      utensils: ["Bol", "Cuillère"],
      steps: ["1 - Mélanger tous les ingrédients."],
    },

    {
      id: "r23",
      category: "salt",
      title: "Seiche aux poivrons et à l'ail",
      imageUrl: "../../assets/recipes-photos/seiche.jpg",
      ingredients: [
        "2 seiches",
        "2 poivrons rouges",
        "1 tête d'ail",
        "Huile d'olive",
        "Sel",
        "Poivre",
        "Piment d'espelette",
      ],
      utensils: ["Poêle", "Spatule"],
      steps: [
        "1 - Mélanger les seiches découpées en lamelles, avec une cuillère à soupe d'huile et une cuillère à café de piment d'espelette à froid.",
        "2 - Dans une poêle, faire revenir les poivrons et l'ail dans un peu d'huile.",
        "3 - Ajouter les seiches.",
        "4 - Saler et poivrer selon votre goût.",
      ],
    },

    {
      id: "r24",
      category: "vegan",
      title: "Raviolis vapeur de Maman",
      imageUrl: "../../assets/recipes-photos/dumplings.jpg",
      ingredients: [
        "1 paquet de feuille à raviole",
        "400 gr de chair à saucisse",
        "10 crevettes",
        "2 oignons",
        "1 oeuf (optionnel)",
        "Sel",
        "Poivre",
        "Sauce soja",
      ],
      utensils: ["Casserolle à vapeur", "Hachoir ou couteau", "Saladier"],
      steps: [
        "1 - Hacher l'oignon et les crevettes (si pas de hachoir, les couper en petits morceaux).",
        "2 - Mélanger la préparation avec la chair à saucisse.",
        "3 - Ajouter l'oeuf avec du sel et poivre",
        "4 - Bien mélanger.",
        "5 - Garnir les ravioles, les refermer en tournant.",
        "6 - Faire cuire 10 minutes.",
        "7 - Servir avec de la sauce soja.",
      ],
    },

    {
      id: "r25",
      category: "vegan",
      title: "Pain Burger",
      imageUrl: "../../assets/recipes-photos/burger.jpg",
      ingredients: [
        "400 gr de farine",
        "150 gr de lait tiède",
        "9 gr de levure boulangère",
        "40 gr de sucre",
        "50 gr de beurre",
        "2 oeufs",
        "Un peu d'eau",
        "10 gr de sel",
      ],
      utensils: [
        "Robot cuisine ou batteur qui fait pétrisseur",
        "Papier cuisson",
        "Four",
      ],
      steps: [
        "1 - Mélanger la levure au lait tiède et laisser reposer 10 minutes.",
        "2 - Mélanger dans un saladier la farine avec le sel et le sucre. Puis ajouter progressivement le mélange lait/levure.",
        "3 - Ajouter les oeufs et le beurre à température ambiante.",
        "4 - Faire pétrir avec un robot pendant 10 minutes (ou à la main si vous avez la foi).",
        "5 - Laisser la pâte reposer 1h dans un endroit chaud (ou 25 degrès au four).",
        "6 - Dégazer et façonner la pâte en boule. Les placer sur une plaque.",
        "7 - Recouvrir et laisser reposer 45 minutes dans un endroit chaud (ou 25 degrès au four).",
        "8 - Préchauffer le four à 190 degrès et enfourner pendant 15 minutes.",
      ],
    },

    {
      id: "r26",
      category: "vegan",
      title: "Crêpes riche en oeufs (très moelleuses)",
      imageUrl: "../../assets/recipes-photos/crepes.jpg",
      ingredients: [
        "250 gr de farine",
        "60 gr de sucre",
        "6 oeufs",
        "8 cl d'huile de colza",
        "80 gr de beurre",
        "75 cl de lait",
        "1 cuillère à soupe de rhum",
      ],
      utensils: ["Poêle", "Fouet ou fourchette", "Saladier"],
      steps: [
        "1 - Tamiser la farine et le mélanger au sucre.",
        "2 - Battre les oeufs et les incorporer au mélange farine/sucre.",
        "3 - Incorporer l'huile, le beurre fondu, le lait et le rhum.",
        "4 - Laisser reposer la pâte 1h pour qu'elles soient plus moelleuses.",
      ],
    },

    {
      id: "r27",
      category: "vegan",
      title: "Gâteaux au chocolat (petits)",
      imageUrl: "../../assets/recipes-photos/choco-cake.jpg",
      ingredients: [
        "200 gr de tablette de chocolat spécial dessert",
        "100 gr de beurre",
        "150 gr de sucre glace",
        "200 gr de farine fluide",
        "Un demi sachet de levure chimique",
        "3 oeufs",
        "30 gr de cacao en poudre",
        "1 sachet de sucre vanillé",
      ],
      utensils: ["Four", "Papier cuisson", "Saladier", "Fouet ou fourchette"],
      steps: [
        "1 - Faire fondre le chocolat et le beurre à feu doux dans une casserolle. Puis enlever du feu.",
        "2 - Ajouter en mélangeant les oeufs, le sucre glace, le sucre vanillé, le cacao, la levure et la farine.",
        "3 - Laisser reposer la pâte 1h au réfrigérateur.",
        "4 - Préchauffer le four à 180 degrés.",
        "5 - Former des boules avec les mains et les rouler dans du sucre glace. Les disposer sur du papier cuisson.",
        "6 - Enfourner et laisser cuire 8 à 10 minutes à 180 degrés.",
      ],
    },

    {
      id: "r28",
      category: "vegan",
      title: "Bouillon de poulet de Maman",
      imageUrl: "../../assets/recipes-photos/bouillon-maman.jpg",
      ingredients: [
        "1 poulet",
        "1 oignon",
        "3 cuillères à café de sel",
        "10 cuillères à café de sucre",
        "1 cuillère à café de glutamate (optionnel)",
        "Un filet d'huile d'olive",
        "1L d'au",
      ],
      utensils: ["Grande casserolle", "Spatule", "Couteau"],
      steps: [
        "1 - Emincer l'oignon.",
        "2 - Dans une casserole, faire revenir l'oignon dans l'huile.",
        "3 - Ajouter 3 cuillères à café de sel, 6 cuillères à café de sucre, le glutamate et le poulet coupé en morceau.",
        "4 - Bien mélanger et ajouter 1L d'eau.",
        "5 - Couvrir et laisser cuire à feu moyen pendant 15 à 20 minutes.",
        "6 - Ajouter 4 cuillères à café de sucre et laisser cuire encore 10 minutes à feu doux.",
      ],
    },

    {
      id: "r29",
      category: "vegan",
      title: "Nems de Papa et Maman",
      imageUrl: "../../assets/recipes-photos/nem.jpg",
      ingredients: [
        "2 paquets de galettes de riz",
        "7 oignons jaunes",
        "1 kilo de chair à saucisse",
        "20 crevettes tigrées",
        "4 carottes",
        "500 gr de pâtes vermicelle",
        "5 oeufs",
        "1 petit sachet de champignons noirs déshydratés",
        "Sel",
        "Poivre",
        "Glutamate (optionnel)",
        "1L d'huile (pour la cuisson)",
      ],
      utensils: [
        "Grand saladier",
        "Spatule",
        "Poêle de la taille des galettes de riz",
        "Friteuse ou grande casserole",
        "Hachoir ou couteau",
        "Torchon propre",
      ],
      steps: [
        "1 - Hacher les oignons, crevettes, carottes et champignons. (Si pas de hachoir : les couper en très petits morceaux).",
        "2 - Mélanger avec la chair à saucisse, les oeufs, les pêtes vermicelles cuites.",
        "3 - Assaisonner.",
        "4 - Faire chauffer de l'eau une grande poêle.",
        "5 - Tremper une galette de riz.",
        "6 - La disposer sur le torchon.",
        "7 - Garnir la galette avec notre préparation.",
        "8 - Rouler le nem selon la technique ancestrales (hahaha).",
        "9 - Faire chauffer 1L d'huile dans une casserole et déposer les nems à l'intérieur pour les cuire.",
        "10 - Les nems sont cuits lorsqu'ils sont bien dorés.",
      ],
    },

    /*     {
      id: "r30",
      category: "vegan",
      title: "",
      imageUrl: "../../assets/recipes-photos/pancakes-fluffy.jpg",
      ingredients: ["", "", "", "", ""],
      utensils: ["", "", "", "", ""],
      steps: ["1 - ", "2 - ", "3 - ", "4 - ", "5 - ", "6 - ", "7 - "],
    }, */
  ];

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    };
  }

  /*   deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  } */

  getSpecificRecipes(recipesCategory: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.category === recipesCategory;
    });
    return [...this.recipes];
  }
}
