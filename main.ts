$(function () {

    class CalculosBasicos {

        private cpf:any
        private status:string 
        
        constructor(cpf:any) {
            this.cpf = parseInt(cpf)
        }
        public getStatus(){
            return this.status
        }

        public statusCpf(){
            let cpf: number = this.cpf.toString().length
            if (cpf > 9){
                this.status = 'invalido'
            }else{
                this.status = 'valido'
            }
        }
    }
    

    $('#cpf , #nome').bind('input',function () {
        
        /* --- get values --- */
        let nome: string = $('#nome').val()
        let cpf: any = $('#cpf').val()

        /* --- metodo validacao --- */

        let validador = new CalculosBasicos(cpf)
        validador.statusCpf()
        let status = validador.getStatus()

        /* --- renderiza no html --- */
        $('#nomeUser').html(nome)
        $('#nCpf').html(cpf)
        $('#status').html(status)

        /* --- default css --- */
        $('span').css('color','red')
    })
   
})

