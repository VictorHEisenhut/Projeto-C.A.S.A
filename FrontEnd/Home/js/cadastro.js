async function cadastrar()
    {
        let nome = document.getElementById("nome").value
        let sobrenome = document.getElementById("sobrenome").value
        let email = document.getElementById("email").value
        let senha = document.getElementById("senha").value
        let dataN = document.getElementById("dataN").value
        let fone = document.getElementById("fone").value
        let estadoCivil = document.getElementById("estadoCivil").value
        let genero = document.getElementById("genero").value
        let escolaridade = document.getElementById("escolaridade").value
        let paisId = document.getElementById("paisId").value
        let documento = document.getElementById("documento").value
        let role = "usuario"
        let obj = 
        {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senha,
            dataNascimento: dataN,
            telefone: fone,
            estadoCivil: estadoCivil,
            genero: genero,
            escolaridade: escolaridade,
            paisId: paisId,
            documento: documento,
            role: role
        }
        
        await fetch('http://localhost:5210/api/Users',
        {
            method: "POST",
            headers: {'Authorization': 'Bearer ' + token,'Content-Type' : 'application/json'},
            body: JSON.stringify(obj)
        })
        
    }