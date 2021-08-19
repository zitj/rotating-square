const waterrmelon = document.getElementById('waterrmelon');




for(let i = 0; i <= 7; i++){
    
    let template = ''; 
    template = `
    <div class="container">
        <div class="seed"></div>
        <div class="seed"></div>
        <div class="seed"></div>
        <div class="seed"></div>
        <div class="seed"></div>
        <div class="seed"></div>
    </div>
    `;

    waterrmelon.innerHTML += template;
}