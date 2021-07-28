/**
 * Confirmar a exclusão de um contato
 *
 * @author Janicélio PEreira Dutra
 * @param idcon
 */

function confirmar(idcon) {
	let resposta = confirm("Confirma a exclusão deste contato?")
	if (resposta === true) {
		window.location.href = "delete?idcon=" + idcon
	}
}