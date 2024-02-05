using System.ComponentModel.DataAnnotations;

namespace ProjetoRefugiadosApi.Dtos.Refugiado
{
    public class ResetSenhaDto
    {
        [Required]
        public string Token { get; set; }
        [DataType(DataType.Password)]
        [Required]
        public string Senha { get; set; }
        [Required, Compare("Senha")]
        public string ConfirmSenha { get; set; }
    }
}
