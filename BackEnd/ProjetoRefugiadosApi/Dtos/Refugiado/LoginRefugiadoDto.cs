using System.ComponentModel.DataAnnotations;

namespace ProjetoRefugiadosApi.Dtos.Refugiado
{
    public class LoginRefugiadoDto
    {
        [EmailAddress]
        [Required]
        public string Email { get; set; }
        [DataType(DataType.Password)]
        [Required]
        public string Senha { get; set; }
    }
}
