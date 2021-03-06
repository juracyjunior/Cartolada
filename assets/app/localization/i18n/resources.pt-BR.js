(function() {
    "use strict";

    angular.module("app").
        config(["$translateProvider", resources]);

    var translations = 
    {
        carregando: "Carregando...",
        alertas: {
            erro              : "Erro",
            sucesso           : "Sucesso",
            aviso             : "Aviso",
            informacao        : "Informação",
            naoautorizado     : "Usuário não autorizado",
            requisicaoInvalida: "Requisição inválida",
            erroServidor      : "Erro no Servidor",
            naoEncontrado     : "Informação não encontrada"
        },
        paginas:{
            home: "Home",
            destaquesrodada: "Destaques rodada",
            destaquesmercado: "Mais escalados",
            proximaspartidas: "Partidas",
            atletas: "Mercado",
            scouts: "Scouts"
        },
        moeda: {
            simbolo: "R$",
            separadorDecimal: ",",
            separadorGrupo: "."
        }
    };

    function resources($translateProvider)
    {
        $translateProvider.translations("pt-BR", translations);
    }
})();