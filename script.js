function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
            window.alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'bebeH.jpg')
            }else if (idade < 21 ){
                img.setAttribute('src','jovenH.jpg')
            }else if (idade < 50){
                img.setAttribute('src','adultoH.jpg')
            }else{
                img.setAttribute('src','velhoH.jpg')
            }
        }else if (fsex[1].checked){
            gênero = 'Mulher'
                        if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'bebeM.jpg')
            }else if (idade < 21 ){
                img.setAttribute('src','jovenM.jpg')
            }else if (idade < 50){
                img.setAttribute('src','adultaM.jpg')
            }else{
                img.setAttribute('src','velhaM.jpg')
            }
            
             
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
        res.appendChild(img)
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.padding = '15px'
    }

}
