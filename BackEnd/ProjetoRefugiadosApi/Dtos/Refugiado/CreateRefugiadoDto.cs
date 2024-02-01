using ProjetoRefugiados.Models.Enums;
using ProjetoRefugiados.Models;
using System.ComponentModel.DataAnnotations;
using ProjetoRefugiadosApi.Dtos.Documento;
using Microsoft.VisualBasic;

namespace ProjetoRefugiadosApi.Dtos.Refugiado
{
    public class CreateRefugiadoDto
    {
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        [EmailAddress]
        [Required]
        public string Email { get; set; }
        [DataType(DataType.Password)]
        [Required]
        public string Senha { get; set; }
       
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateOnly DataNascimento { get; set; }
        public string Telefone { get; set; }
        public EstadoCivil EstadoCivil { get; set; }
        public Genero Genero { get; set; }
        public Escolaridade Escolaridade { get; set; }
        public int PaisId { get; set; }
        public CreateDocumentoDto Documento { get; set; }
    }
}
