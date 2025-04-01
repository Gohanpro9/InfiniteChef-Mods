addIngredient("banana",{ color:"#ffe135", // amarillo type:"fruit" // hereda propiedades de la fruta });

addIngredient("peeled_banana",{ color:"#fff4b0", // color de plátano pelado innerColor:"#ffe135", // amarillo type:"banana", shape:"fruit_long" // forma alargada });

addIngredient("banana_peel",{ color:"#ffcc00", // cáscara amarilla type:"waste", shape:"peel" // forma de cáscara });

addRecipe("banana+knife","peeled_banana+banana_peel"); // receta para pelar un plátano

addRecipe("banana+sugar","banana_caramelized"); // plátano caramelizado

addRecipe("peeled_banana+chocolate","chocolate_banana"); // plátano con chocolate

addTool("banana_smasher", { func: function(placed) { placed.shape = "mushed"; }, shape:"hammer", onClick: function(x,y) { console.log("Banana aplastada en", x, y); } });

                             
