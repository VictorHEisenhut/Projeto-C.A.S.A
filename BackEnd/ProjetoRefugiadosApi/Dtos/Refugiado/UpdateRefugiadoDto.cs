using ProjetoRefugiados.Models.Enums;
using ProjetoRefugiadosApi.Dtos.Documento;
using ProjetoRefugiadosApi.Dtos.Endereco;
using System.ComponentModel.DataAnnotations;

namespace ProjetoRefugiadosApi.Dtos.Refugiado
{
    public class UpdateRefugiadoDto
    {
        public string Nome { get; set; }
        public string Sobrenome { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateOnly DataNascimento { get; set; }
        public string Telefone { get; set; }
        public EstadoCivil EstadoCivil { get; set; }
        public Genero Genero { get; set; }
        public Escolaridade Escolaridade { get; set; }
        public CreateEnderecoDto Endereco { get; set; }
    }
}
