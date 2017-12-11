$(function () {

    class CalculosBasicos {

        private cpf:any
        private status:string 
        private entrada: number
        private aprovadaRecusada: string
        
        constructor(cpf:any, entrada:number) {
            this.cpf = parseInt(cpf)
            this.entrada = entrada
        }

        public getStatus(){
            return this.status
        }

        public getAprovadaRecusada(){
            return this.aprovadaRecusada
        }

        public statusCpf(){
            let cpf: number = this.cpf.toString().length
            if (cpf > 9){
                this.status = 'invalido'
            }else{
                this.status = 'valido'
            }
        }
        public entradaMinima(){
            let entrada: number = this.entrada
            if(entrada > 5000){
                this.aprovadaRecusada = 'Aprovada'
            }else{
                this.aprovadaRecusada = 'Recusada'
            }
        }

    }
    

    $('input').bind('input',function () {
        
        /* --- get values --- */
        let nome: string = $('#nome').val()
        let cpf: any = $('#cpf').val()
        let entradafirst: string = $('#entrada').val()
        let entrada : number = parseInt(entradafirst)

        /* --- metodo validacao --- */
        let validador = new CalculosBasicos(cpf,entrada)
        validador.statusCpf()
        let status = validador.getStatus()
        validador.entradaMinima()

        /* --- renderiza no html --- */
        $('#nomeUser').html(nome)
        $('#nCpf').html(cpf)
        $('#status').html(status)
        $('#valor').html(entrada)
        $('#aprovadaRecusada').html(validador.getAprovadaRecusada())

        /* --- default css --- */
        $('span').css('color','white')

        /* --- atualizar pagina --- */
        $('#recarregar').click(function() {
            location.reload();
        });
        
        /* --- teste --- */
    })
   
})

