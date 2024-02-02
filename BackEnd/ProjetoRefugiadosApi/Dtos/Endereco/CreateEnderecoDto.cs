using System.ComponentModel.DataAnnotations;

namespace ProjetoRefugiadosApi.Dtos.Endereco
{
    public class CreateEnderecoDto
    {
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string Bairro { get; set; }
        public string Rua { get; set; }
        public int Numero { get; set; }
        public string CEP { get; set; }

    }
}
