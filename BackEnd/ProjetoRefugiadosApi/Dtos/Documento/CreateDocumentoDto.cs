namespace ProjetoRefugiadosApi.Dtos.Documento
{
    public class CreateDocumentoDto
    {
        public string? Cpf { get; set; }
        public string? Rg { get; set; }
        public string? Cnh { get; set; }
        public string? RegistroEmigrante { get; set; }
        public string? Crnm { get; set; }
        public string? Rne { get; set; }
        public string? Dprnm { get; set; }
        public string? ProtocoleRefugio { get; set; }
    }
}
