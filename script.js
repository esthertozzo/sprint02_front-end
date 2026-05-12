const formulario = document.getElementById('formFocus');

if(formulario) {
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const rotina = document.getElementById('rotina').value;
        const materias = document.getElementById('materias').value;
        const exclusao = document.getElementById('exclusao').value;

        const checkboxes = document.querySelectorAll(
            'input[type="checkbox"]:checked'
        );

        let prioridades = [];

        checkboxes.forEach(function(item){
            prioridades.push(item.value);
        });

        const usuario = {
            rotina,
            materias,
            exclusao,
            prioridades
        };

        sessionStorage.setItem(
            "focusUser",
            JSON.stringify(usuario)
        );

        window.location.href = "dashboard.html";

    });
}

const rotinaUsuario = document.getElementById('rotinaUsuario');

if (rotinaUsuario) {

    const dados = JSON.parse(sessionStorage.getItem("focusUser"));

    if(dados){
        rotinaUsuario.innerHTML = `<strong>Rotina de estudos:</strong> ${dados.rotina}`;

        document.getElementById("organizacaoUsuario").innerHTML = `<strong>Organizar por matérias:</strong> ${dados.materias}`;

        document.getElementById("exclusaoUsuario").innerHTML = `<strong>Exclusão das imagens:</strong> ${dados.exclusao}`;

        document.getElementById("prioridadesUsuario").innerHTML = `<strong>Prioridades:</strong> ${dados.prioridades.join(", ")}`;
    }
}