function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+cep+"/json/"
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function (response){
            $("#logradouro").html(response.logradouro);
            console.log(response);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
        }
    })
}