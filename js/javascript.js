class alerta {
    constructor() {
        this.alerta = document.querySelector('.alerta');
        this.alertaTexto = document.querySelector('.alerta p');
    }

    showAlert(text) {
        this.alertaTexto.textContent = text;
        this.alerta.classList.add('show');
        setTimeout(() => {
            this.hideAlert();
        }, 3000);
    }

    hideAlert() {
        this.alerta.classList.remove('show');
    }
    
}