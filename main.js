"use strict";
$(function () {
    var CalculosBasicos = /** @class */ (function () {
        function CalculosBasicos(cpf) {
            this.cpf = parseInt(cpf);
        }
        CalculosBasicos.prototype.getStatus = function () {
            return this.status;
        };
        CalculosBasicos.prototype.statusCpf = function () {
            var cpf = this.cpf.toString().length;
            if (cpf > 9) {
                this.status = 'invalido';
            }
            else {
                this.status = 'valido';
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
        validador.statusCpf();
        var status = validador.getStatus();
        /* --- renderiza no html --- */
        $('#nomeUser').html(nome);
        $('#nCpf').html(cpf);
        $('#status').html(status);
        /* --- default css --- */
        $('span').css('color', 'red');
    });
});
