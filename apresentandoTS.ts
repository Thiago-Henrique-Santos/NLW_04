

// UUID => Universally Unique Indetifier

/* 
    //Sem tipagem, iamos enviando o ID como inteiro, o que ia dar errado, pois estamos trabalhando com UUID, que recebe em forma de string

    function enviarEmail(para, id, assunto, texto) {
        // Biblioteca d eenvio de e-mail

        console.log (para, id, assunto, texto);
    }

    class EnviarEmailParaUsuario {
        
        send() {
            enviarEmail("thilego418@gmail.com", 1, "Iniciando", "Estamos iniciando a NLW.");
        }
    }
*/

interface DadosDeEnvioEmail {
    para: string;
    id: string;
    assunto: string;
    texto: string
}

function enviarEmail({para, id, assunto, texto}: DadosDeEnvioEmail) {
    console.log (para, id, assunto, texto);
}

class EnviarEmailParaUsuario {
    send() {
        enviarEmail({
            para: "thilego418@gmail.com",
            id: "1", 
            assunto: "Iniciando", 
            texto: "Estamos iniciando a NLW."});
    }
}