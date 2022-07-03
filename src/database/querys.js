export const querys = {
  /*
  getAllProducts: "SELECT TOP(500) * FROM [webstore].[dbo].[Products]",
  getProducById: "SELECT * FROM Products Where Id = @Id",
  addNewProduct:
    "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  updateProductById:
    "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
  */
  getAllRoles: "SELECT * FROM Rol",
  getUserByLogin: "SELECT IdUsuario FROM Usuario WHERE correo_electronico=@email AND contrasenia=@password",
  getUserById: "SELECT * FROM Usuario WHERE IdUsuario=@id",
  getDepartamento: "SELECT * FROM Departamento",
  getEstadoSolicitud: "SELECT * FROM Estado",
  getEstadoUsuario:"SELECT * FROM EstadoUsuario ",
  getDocumento: "SELECT * FROM Documento",
  getDistrito:"SELECT * FROM Distrito",
  getProvincia:"SELECT * FROM Provincia",
  getTipoSolicitud:"SELECT * FROM Tipo",
  getClasificacion:"SELECT * FROM Clasificacion",
  getImpacto: "SELECT * FROM Impacto",
  getPrioridad:"SELECT * FROM Prioridad",
  getSLA:"SELECT * FROM SLA",
  addNewUser: "INSERT INTO Usuario (nombre,ape_paterno,ape_materno,telefono,fecha_registro,correo_electronico,contrasenia,num_documento,IdEstadoUsuario,IdRol) VALUES (@nombre,@ape_paterno,@ape_materno,@telefono,@fecha_registro,@correo_electronico,@contrasenia,@num_documento,@IdEstadoUsuario,@IdRol)",
  
};
