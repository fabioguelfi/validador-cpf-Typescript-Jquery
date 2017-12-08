"use strict";
$(function () {
    var CalculosBasicos = /** @class */ (function () {
        function CalculosBasicos(cpf) {
            this.cpf = parseInt(cpf);
        }
        CalculosBasicos.prototype.getCpf = function () {
            return this.cpf;
        };
        CalculosBasicos.prototype.statusCpf = function () {
            var cpf = this.cpf;
            var tamanhoCpf = cpf.length;
            alert(tamanhoCpf);
            if (tamanhoCpf > 9) {
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
        var cpfNumber = validador.getCpf();
        //let status: void = validador.statusCpf()
        console.log(cpfNumber + " " + validador.statusCpf() + "  << CPF");
        /* --- renderiza no html --- */
        $('#nomeUser').html(nome);
        $('#nCpf').html(cpf);
        $('#status').html(status);
        /* --- default css --- */
        $('span').css('color', 'red');
    });
});
