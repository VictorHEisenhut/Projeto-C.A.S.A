using System.ComponentModel.DataAnnotations;

namespace ProjetoRefugiados.Models
{
    public class Documento
    {
        [Key]
        public int Id { get; set; }
        public string? Cpf { get; set; }
        public string? Rg { get; set; }
        public string? Cnh { get; set; }
        public string? Crnm { get; set; }
        public string? Rne { get; set; }
    }
}
