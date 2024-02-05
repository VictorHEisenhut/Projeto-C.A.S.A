using ProjetoRefugiados.Models.Enums;
using ProjetoRefugiadosApi.Dtos.Documento;
using System.ComponentModel.DataAnnotations;

namespace ProjetoRefugiados.Models
{
    public class Refugiado
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        [EmailAddress]
        [Required]
        public string Email { get; set; }
        [DataType(DataType.Password)]
        [Required]
        public string Senha { get; set; }
        public DateOnly DataNascimento { get; set; }
        [DataType(DataType.PhoneNumber)]
        public string Telefone { get; set; }
        public EstadoCivil EstadoCivil { get; set; }
        public Genero Genero { get; set; }
        public Escolaridade Escolaridade { get; set; }
        public Paises Pais { get; set; }
        public int PaisId { get; set; }
        public Documento Documento { get; set; }
        public int DocumentoId { get; set; }
        public Endereco Endereco { get; set; }
        public int EnderecoId { get; set; }
        public string? TokenVerificacao { get; set; }
        public DateTime? DataVerificacao { get; set; }
        public string? TokenResetSenha { get; set; }
        public DateTime? ResetTokenExpira { get; set; }
        public string Role { get; set; } = "usuario";

    }
}
