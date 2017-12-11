"use strict";
$(function () {
    var CalculosBasicos = /** @class */ (function () {
        function CalculosBasicos(cpf, entrada) {
            this.cpf = parseInt(cpf);
            this.entrada = entrada;
        }
        CalculosBasicos.prototype.getStatus = function () {
            return this.status;
        };
        CalculosBasicos.prototype.getAprovadaRecusada = function () {
            return this.aprovadaRecusada;
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
        CalculosBasicos.prototype.entradaMinima = function () {
            var entrada = this.entrada;
            if (entrada > 5000) {
                this.aprovadaRecusada = 'Aprovada';
            }
            else {
                this.aprovadaRecusada = 'Recusada';
            }
        };
        return CalculosBasicos;
    }());
    $('input').bind('input', function () {
        /* --- get values --- */
        var nome = $('#nome').val();
        var cpf = $('#cpf').val();
        var entradafirst = $('#entrada').val();
        var entrada = parseInt(entradafirst);
        /* --- metodo validacao --- */
        var validador = new CalculosBasicos(cpf, entrada);
        validador.statusCpf();
        var status = validador.getStatus();
        validador.entradaMinima();
        /* --- renderiza no html --- */
        $('#nomeUser').html(nome);
        $('#nCpf').html(cpf);
        $('#status').html(status);
        $('#valor').html(entrada);
        $('#aprovadaRecusada').html(validador.getAprovadaRecusada());
        /* --- default css --- */
        $('span').css('color', 'red');
        /* --- teste --- */
    });
});
