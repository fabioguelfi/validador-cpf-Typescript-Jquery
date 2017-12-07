$(function () {

    class CalculosBasicos {

        private cpf:any
        
        constructor(cpf:any) {
            this.cpf = cpf
        }

        public statusCpf(){
            if (this.cpf.length > 9 && this.cpf.length < 7){
                this.cpf = 'invalido'
            }else{
                this.cpf = 'valido'
            }
        }
    }

    $('#cpf , #nome').bind('input',function () {
        
        /* --- get values --- */
        let nome: string = $('#nome').val()
        let cpf: number = $('#cpf').val()

        /* --- metodo validacao --- */

        let validador = new CalculosBasicos(cpf)

        console.log(JSON.stringify(validador.statusCpf())

        /* --- renderiza no html --- */
        $('#nCpf').html(cpf)
        $('#status').html(status)

    })
   
})

