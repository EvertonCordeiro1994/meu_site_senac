const btnCoupe = document.querySelector("#btn-coupe");
const btnCabriolet = document.querySelector("#btn-cabriolet");
const carroHome = document.querySelector("#carro-home");
const carroFormulario = document.querySelector("#carro-formulario");
const texto02 = document.querySelector("#texto02");

btnCoupe.addEventListener('click', function () {
    carroHome.classList.add('animate__animated', 'animate__bounceInLeft');
    


    btnCabriolet.classList.remove('btn-ativado-cabriolet');
    btnCoupe.classList.add('btn-ativado-coupe');
    
    
    carroHome.src = "https://images-porsche.imgix.net/-/media/646ED7CDD4DF4060A4823F3A9DB8DA22_97CB2E119D8749C19004EC939CD09E96_CZ25W01IX0010911-carrera-side?w=1400&q=85&crop=faces%2Centropy%2Cedges&auto=format";


    carroFormulario.src = "https://images-porsche.imgix.net/-/media/5D0BB7E042BD4C9DBEF84B5E70482520_73AA748306934B0C9CE20E32231DFCE2_CZ25W01IX0011911-carrera-front?w=750&q=85&auto=format";
    texto02.style.color = "#4464A7";
    
    
});

btnCabriolet.addEventListener('click', function () {
    carroHome.classList.add('animate__animated', 'animate__bounceInLeft');
   
    
    btnCoupe.classList.remove('btn-ativado-coupe');
    btnCabriolet.classList.add('btn-ativado-cabriolet');

    carroHome.src = "https://images-porsche.imgix.net/-/media/29200583E46C486581905B15B7F99E2A_C9D24F865FEE489D848D0D5D1A3FB656_CZ25W02IX0010-911-carrera-cabrio-side?w=1400&q=85&crop=faces%2Centropy%2Cedges&auto=format";

    carroFormulario.src = "https://images-porsche.imgix.net/-/media/1ABD86B4B77941558291EE3E6648F8E7_4CFA72348A06487D92B09DB0800B048C_CZ25W02IX0011-911-carrera-cabrio-front?w=750&q=85&auto=format";


    texto02.style.color = "#A5A64A";
    
    
});

