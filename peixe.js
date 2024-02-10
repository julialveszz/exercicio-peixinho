// Projeto individual de criação de movimentação de um peixe de acordo com a posição do cursor, utilizando tecnologias de JavaScript, HTML e CSS, além do Phaser.
// Desenvolvido por Júlia Alves de Jesus

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    // Define as funções de preload, create e update, que serão usadas posteriormente
    scene: {
        preload: preload,
        create: create,
        update: update
}
};

var peixinho; //Declara a variável peixinho
var game = new Phaser.Game(config); //Declara a variável game, pra armazenar as informações relacionadas a ele, fazendo referência também às configurações declaradas no início do código 

// Função de pré-carregamento da página (o que aparece logo no ínicio da abertura de página com os recursos base desejados)
function preload(){ 
   
    this.load.image('mar', 'assets/peixes/mar.png'); //Carrega a imagem de mar, vindo dos diretórios especificados
this.load.image('logo', 'assets/peixes/logo.png'); //Carrega a imagem de logo do Inteli
this.load.image('cruzeiro', 'assets/peixes/cruzeiro.png'); //Carrega a imagem do cruzeiro, elemento adicional escolhido
this.load.image('alga', 'assets/peixes/alga.png'); //Carrega a imagem de alga, outro elemento adicional escolhido pra completar o fundo 
this.load.image('peixinho', 'assets/peixes/peixinho.png'); //Carrega a imagem de peixinho

}

 function create(){ //Adiciona as imagens à cena e define os parâmetros de posição e tamanho de cada elemento
    
    this.add.image(400,300, 'mar'); 
    this.add.image(700,530, 'logo').setScale(0.5);
    this.add.image(200, 530, 'alga').setScale(0.5);
    this.add.image(165,195, 'cruzeiro').setScale(0.25);
    peixinho = this.add.image(400,300, 'peixinho');
    peixinho.setFlip(true, false); // Indica a posição horizontal ou vertical da imagem
 }

 function update(){ //Função de atualizações 

    // Atualiza a posição do peixinho pra acompanhar o cursor nas posições
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
    
    
 }