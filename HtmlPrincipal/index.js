let pedidos = [];

        function registrarPedido() {
            let nome = document.getElementById('nome').value;
            let sobrenome = document.getElementById('sobrenome').value;
            let turno = document.getElementById('turno').value;
            let pedido = document.getElementById('pedido').value;

            if (!nome || !sobrenome || !pedido) {
                alert('Preencha todos os campos!');
                return;
            }

            pedidos.push({ Nome: nome, Sobrenome: sobrenome, Turno: turno, Pedido: pedido });
            alert('Pedido registrado com sucesso!');
            document.getElementById('pedidoForm').reset();
        }

        function exportarExcel() {
            let ws = XLSX.utils.json_to_sheet(pedidos);
            let wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Pedidos");
            XLSX.writeFile(wb, "pedidos.xlsx");
        }