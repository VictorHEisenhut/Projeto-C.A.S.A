using System.ComponentModel.DataAnnotations;

namespace ProjetoRefugiadosApi.Dtos.Consulado
{
    public class CreateConsuladoDto
    {
        public int EnderecoId { get; set; }
        public string? Nome { get; set; }
        [EmailAddress]
        public string? Email { get; set; }
        [Phone]
        public string? Telefone { get; set; }
    }
}
