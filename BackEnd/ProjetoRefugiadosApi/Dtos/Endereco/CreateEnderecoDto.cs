using System.ComponentModel.DataAnnotations;

namespace ProjetoRefugiadosApi.Dtos.Endereco
{
    public class CreateEnderecoDto
    {
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string Bairro { get; set; }
        public string Rua { get; set; }
        public int Numero { get; set; }
        public string CEP { get; set; }

    }
}
