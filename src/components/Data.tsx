// Définition d'un tableau constant nommé Data contenant des objets de recettes
const Data = [
    {
        // Objet représentant une recette de pizza au chou-fleur
        name: "Pizza au chou-fleur", // Nom de la recette
        cuisine: "Italienne", // Type de cuisine
        photo: "https://recette-cuisine-du-monde.fr/wp-content/uploads/2020/12/pizza_chou_fleur-290x300.jpg", // URL de la photo
        ingredients: ["Pâte à pizza", "Chou-fleur", "Sauce tomate", "Mozzarella", "Oignons", "Câpres"], // Liste des ingrédients
        preparation: "Étalez la pâte à pizza sur une plaque à pizza. Ajoute le chou-fleur, la sauce tomate, la mozzarella, les oignons et les câpres. Enroule la pizza et fait cuire à 200 degrés pendant 10 minutes." // Instructions de préparation
    },
    {
        // Objet représentant une recette de galette de haricots rouges
        name: "Galette de Haricots Rouge", // Nom de la recette
        cuisine: "Mexicaine", // Type de cuisine
        photo: "https://recette-cuisine-du-monde.fr/assets/images/recette-galette-haricot-rouge.jpg", // URL de la photo
        ingredients: ["Haricots rouges", "Oignons", "Crème fraîche", "Mozzarella", "Sauce tomate", "Sel", "Poivre"], // Liste des ingrédients
        preparation: "Épluchez les haricots rouges et les coupez en petits morceaux. Faites-les cuire à l'eau bouillante pendant 10 minutes. Égouttez-les et réservez. Dans une poêle, faites revenir les oignons émincés avec de l'huile d'olive. Ajoutez les haricots rouges, la crème fraîche, la mozzarella, la sauce tomate, le sel et le poivre. Mélangez bien et faites cuire à feu doux pendant 10 minutes." // Instructions de préparation
    },
    {
        // Objet représentant une recette de maki maison
        name: "Maki Maison", // Nom de la recette
        cuisine: "Japonaise", // Type de cuisine
        photo: "https://recette-cuisine-du-monde.fr/assets/images/recette-maki.jpg", // URL de la photo
        ingredients: ["Sushi Rice", "Nori", "Crab Meat", "Avocado", "Seaweed", "Soy Sauce"], // Liste des ingrédients
        preparation: "Dans un bol, mélangez le riz sushi avec la sauce soja. Ajoutez les ingrédients de votre choix (crabe, avocat, câpres, etc.). Faites cuire le sushi dans un moule à maki pendant 10 minutes." // Instructions de préparation
    },
    {
        // Objet représentant une recette de machas à la parmesana
        name: "Machas à la Parmesana", // Nom de la recette
        cuisine: "Chilienne", // Type de cuisine
        photo: "https://recette-cuisine-du-monde.fr/assets/images/recette_machas_parmesana.jpg", // URL de la photo
        ingredients: ["Machas", "Parmesan", "Sauce tomate", "Oignons", "Câpres", "Sel", "Poivre"], // Liste des ingrédients
        preparation: "Dans une poêle, faites revenir les machas avec de l'huile d'olive. Ajoutez les oignons émincés, la sauce tomate, le parmesan, les câpres, le sel et le poivre. Faites cuire à feu doux pendant 10 minutes." // Instructions de préparation
    }
];


export default Data; // Exporte le tableau Data pour qu'il puisse être utilisé dans d'autres fichiers