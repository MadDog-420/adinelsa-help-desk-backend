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
  getUserByEmail: "SELECT * FROM Usuario WHERE correo_electronico=@email",
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
  getUsuarios:"SELECT * FROM Usuario",
  addNewUser: "INSERT INTO Usuario (nombre,ape_paterno,ape_materno,telefono,fecha_registro,correo_electronico,contrasenia,num_documento,IdEstadoUsuario,IdDocumento,IdRol) VALUES (@nombre,@ape_paterno,@ape_materno,@telefono,@fecha_registro,@correo_electronico,@contrasenia,@num_documento,@IdEstadoUsuario,@IdDocumento,@IdRol)",
  addNewSolicitud: "INSERT INTO Solicitud (Solicitud,DetalleSolicitud,FechaRegistro,IdUsuario) VALUES (@Solicitud,@DetalleSolicitud,@FechaRegistro,@IdUsuario)",
  getSolicitudById:"SELECT * FROM Solicitud Where IdSolicitud=@Id",
  getSolicitud:"SELECT * FROM Solicitud",
  updateSolicitudById:"UPDATE [dbo].[Solicitud] SET Solicitud = @Solicitud, DetalleSolicitud = @DetalleSolicitud,IdUsuario=@IdUsuario WHERE IdSolicitud=@IdSolicitud",
  updateDetalleSolicitud: "UPDATE DetalleSolicitud SET FechaActualizacion=@FechaActualizacion, IdTipoSolicitud=@IdTipoSolicitud, IdEstadoSolicitud=@IdEstadoSolicitud, IdImpacto=@IdImpacto, IdPrioridad=@IdPrioridad WHERE IdSolicitud=@IdSolicitud" 
  
};
