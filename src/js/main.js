

const o_mdp={
    init(){
        this.input = document.querySelector('#password');
        document.documentElement.classList.add('js-enabled');
        this.button = document.querySelector('.showPass');
        this.button.addEventListener('click', ()=>{this.montre()});

    },
    montre() {
    
        if (this.input.type === "password" ) {
            this.input.type = "text";
        }
        else{
            /* input.type = "password"; */
            this.input.setAttribute('type', 'password');
        }
    }
}
o_mdp.init();