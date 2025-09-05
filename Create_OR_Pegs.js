function Create_OR_Pegs() {

    var selected_nodes = selection.selectedNodes()

    MessageLog.trace(selected_nodes) // Affiche la liste des nodes

    scene.beginUndoRedoAccum("Create_OR_Pegs") // lance la pile de Ctrl+Z

    // debut boucle de traitement de la selection
    for (i = 0; i < selected_nodes.length; i++) {
        // pour faire reference a la selection + facilement
        var currentNode = selected_nodes[i]

        // recup QUE les pegs
        if (node.type(selected_nodes[i]) == "PEG") {
            // dupplique le peg + renomme
            add_peg_with_prefix(currentNode)


            // copie-colle le pivot du peg original vers le nouveau peg

            node.getPivot(selected_nodes[i], frame.current)


            // de-Link re-link le nouveau peg sous le peg original
            node.unlink(selected_nodes[i], 0)
        }
        scene.endUndoRedoAccum()
    }
}
function add_peg_with_prefix(_Peg) {
    var currentNode = _Peg
    MessageLog.trace(currentNode)
    var parentgroup = "Top"
    var new_name = node.getName(currentNode)
    // objet nouveau nom avec le prefix
    new_name = "OR-" + new_name.slice(0, new_name.length)
    // objet placement du peg add avec le new_name
    var xpos = node.coordX(currentNode) - 5
    var ypos = node.coordY(currentNode) - 30
    var zpos = node.coordZ(currentNode)

    new_peg = node.add(parentgroup, new_name, "PEG", xpos, ypos, zpos)
}

function copy_PegPivot_coord(_Peg){
    var currentNode = _Peg
    var new_Pivot


}