/*
    Ecrire une fonction "shoppingList",
    qui prend un paramètre un tableau de paniers;

    Un panier est un tableau de mots;

    La fonction retourne un objet contenant:
        - comme clef le nom du produit rencontré
        - comme valeur le nombre de fois qu'il à été rencontré

    Important -> l'ordre n'a aucune importance
*/

/*      Test 1
    Appel à la fonction "shoppingList",
    prenant en paramètre le tableau

    [
        ["orange", "orange", "kiwi", "ananas"],
        ["kiwi", "ananas", "banane", "prune"],
        ["orange", "orange", "orange", "orange"],
        ["orange", "orange", "kiwi", "kiwi"],
        ["prune", "banane", "pamplemousse", "ananas"]
    ]

    et nous attendons comme résultat

    {
        "orange": 8,
        "kiwi": 4,
        "ananas": 3,
        "prune": 2,
        "banane": 2,
        "pamplemousse": 1
    }

*/

shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]);

//  écrire votre code sous ce commentaire

var o = 0;
var k = 0;
var a = 0;
var p = 0;
var b = 0;
var pa = 0;

function shoppingList(tabpaniers) {
    
    var total = [];
    for (let i = 0; i < tabpaniers.length; i++) {
        var add = shopList(tabpaniers[i]);
    }
    total.push(add);
    return total;
}

function shopList(panier) {

    for (let i = 0; i < panier.length; i++) {
        if (panier[i] == "orange") {
            o++;
        } else if (panier[i] == "kiwi") {
            k++;
        } else if (panier[i] == "ananas") {
            a++;
        } else if (panier[i] == "prune") {
            p++;
        } else if (panier[i] == "banane") {
            b++;
        } else if (panier[i] == "pamplemousse") {
            pa++;
        }
    }
    return { "orange": o, "kiwi": k, "ananas": a, "prune": p, "banane": b, "pamplemousse": pa };
}

console.log(shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]));