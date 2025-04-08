import getConnection from "./../db/database.js";

const getClientes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_cliente, nombre, telefono, correo, direccion FROM clientes")
        res.json(result)  
    } catch (error) {
        console.error("ERROR 500");
    }
    
}

export const methodHTTP = {
    getClientes
}