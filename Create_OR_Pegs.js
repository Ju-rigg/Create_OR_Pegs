function Create_OR_Pegs() {
    
    var selected_nodes = selection.selectedNodes()

    MessageLog.trace(selected_nodes) // Affiche la liste des nodes

    scene.beginUndoRedoAccum("Create_OR_Pegs") // lance la pile de Ctrl+Z

    // debut boucle de traitement de la selection
    for (i = 0; i < selected_nodes.length; i++) {

        // recup QUE les pegs
        if (node.type(selected_nodes[i]) == "PEG") {
            // dupplique le peg + renomme
            
            var new_name = node.getName(selected_nodes[i])
            // objet nouveau nom avec le prefix
            new_name = "OR-" + new_name.slice(0, new_name.length)
            // objet peg supplementaire avec le new_name
            new_peg = node.add(new_name,)


            // copie-colle le pivot du peg original vers le nouveau peg
            node.getPivot( selected_nodes[i],frame.current) 
	

            // de-Link re-link le nouveau peg sous le peg original
            node.unlink(selected_nodes[i], 0)
        }
        scene.endUndoRedoAccum()
    }
}