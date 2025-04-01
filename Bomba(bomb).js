-- Infinite Chef Mod: Bomba

addIngredient("bomba",{ color:"#666666", // Gris oscuro type:"explosive", // Tipo especial shape:"round" // Forma redonda });

addIngredient("bomba_activada",{ color:"#ff0000", // Rojo (indicando peligro) innerColor:"#666666", // Gris oscuro type:"bomba", shape:"round" });

addIngredient("escombros",{ color:"#3b3b3b", // Gris oscuro type:"waste", // Desecho después de la explosión shape:"irregular" });

addRecipe("bomba+fire","bomba_activada"); // Activar bomba con fuego addRecipe("bomba_activada+time","escombros"); // Explosión después de un tiempo

addTool("detonador", { func: function(placed) { if (placed.type === "bomba") { placed.type = "bomba_activada"; console.log("¡La bomba ha sido activada!"); } }, shape:"button", onClick: function(x,y) { console.log("Detonador presionado en", x, y); } });
