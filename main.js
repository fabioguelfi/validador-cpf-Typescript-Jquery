"use strict";
$(function () {
    var CalculosBasicos = /** @class */ (function () {
        function CalculosBasicos(cpf) {
            this.cpf = cpf;
        }
        CalculosBasicos.prototype.statusCpf = function () {
            if (this.cpf.length > 9 && this.cpf.length < 7) {
                this.cpf = 'invalido';
            }
            else {
                this.cpf = 'valido';
            }
        };
        return CalculosBasicos;
    }());
    $('#cpf , #nome').bind('input', function () {
        /* --- get values --- */
        var nome = $('#nome').val();
        var cpf = $('#cpf').val();
        /* --- metodo validacao --- */
        var validador = new CalculosBasicos(cpf);
        console.log(JSON.stringify(validador.statusCpf())
        /* --- renderiza no html --- */
        , 
        /* --- renderiza no html --- */
        $('#nCpf').html(cpf), $('#status').html(status));
    });
});
