$(function () {

    class CalculosBasicos {

        private cpf:any
        
        constructor(cpf:any) {
            this.cpf = parseInt(cpf)
        }
        public getCpf(){
            return this.cpf
        }

        public statusCpf(){
            let cpf = this.cpf
            let tamanhoCpf: number = cpf.length
            alert(tamanhoCpf)
            if (tamanhoCpf > 9){
                this.cpf = 'invalido'
            }else{
                this.cpf = 'valido'
            }
        }
    }
    

    $('#cpf , #nome').bind('input',function () {
        
        /* --- get values --- */
        let nome: string = $('#nome').val()
        let cpf: any = $('#cpf').val()

        /* --- metodo validacao --- */

        let validador = new CalculosBasicos(cpf)
        let cpfNumber: number = validador.getCpf()
        //let status: void = validador.statusCpf()
        console.log(`${cpfNumber} ${validador.statusCpf()}  << CPF`)


        /* --- renderiza no html --- */
        $('#nomeUser').html(nome)
        $('#nCpf').html(cpf)
        $('#status').html(status)

        /* --- default css --- */
        $('span').css('color','red')
    })
   
})

