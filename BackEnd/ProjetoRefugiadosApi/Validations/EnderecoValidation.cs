using FluentValidation;
using ProjetoRefugiados.Models;

namespace ProjetoRefugiadosApi.Validations
{
    public class EnderecoValidation : AbstractValidator<Endereco>
    {
        public EnderecoValidation()
        {
            RuleFor(endereco => endereco.Descricao).Length(3, 50).WithMessage("Descrição de um endereço deve conter entre 3 e 50 caracteres").When(r => r.Descricao != null);
            RuleFor(endereco => endereco.Telefone).Length(11).WithMessage("Telefone inválido, verifique se contém o DDD").When(r => r.Telefone != null);
            RuleFor(endereco => endereco.Nome).Length(3, 30).WithMessage("Nome de um endereço deve conter entre 3 e 30 caracteres").When(r => r.Nome != null);
            RuleFor(endereco => endereco.Bairro).NotNull().WithMessage("Bairro Inválido.").Length(3, 30).WithMessage("Bairro deve conter entre 3 e 30 caracteres.");
            RuleFor(endereco => endereco.Cidade).NotNull().WithMessage("Cidade inválida.").Length(3, 30).WithMessage("Cidade deve conter entre 3 e 30 caracteres.");
            RuleFor(endereco => endereco.Estado).NotNull().WithMessage("Estado inválido.").Length(3, 30).WithMessage("Estado deve conter entre 3 e 30 caracteres.");
            RuleFor(endereco => endereco.Rua).NotNull().WithMessage("Rua inválida.").Length(3, 30).WithMessage("Rua deve conter entre 3 e 30 caracteres.");
            RuleFor(endereco => endereco.Numero).NotNull().WithMessage("Número inválido.").GreaterThan(0).LessThan(9999).WithMessage("Número deve ser maior que 0 e menor que 9999");
            RuleFor(endereco => endereco.CEP).NotNull().WithMessage("CEP inválido.").Length(9).Matches("-").WithMessage("CEP deve conter hífen");
        }
    }
}
