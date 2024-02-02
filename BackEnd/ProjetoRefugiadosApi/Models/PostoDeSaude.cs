using System.ComponentModel.DataAnnotations;

namespace ProjetoRefugiados.Models
{
    public class PostoDeSaude
    {
        [Key]
        public int Id { get; set; }
        public string? Nome { get; set; }
        [EmailAddress]
        public string? Email { get; set; }
        [Phone]
        public string? Telefone { get; set; }
        public Endereco Endereco { get; set; }
        public int EnderecoId { get; set; }
    }
}
