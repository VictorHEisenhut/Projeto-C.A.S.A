using FluentValidation;
using ProjetoRefugiadosApi.Dtos.Endereco;

namespace ProjetoRefugiadosApi.Validations
{
    public class EnderecoValidation : AbstractValidator<CreateEnderecoDto>
    {
        public EnderecoValidation()
        {
            RuleFor(endereco => endereco.Bairro).Length(3, 30).WithMessage("Bairro deve conter entre 3 e 30 caracteres.").When(r => r.Bairro != null);
            RuleFor(endereco => endereco.Cidade).Length(3, 30).WithMessage("Cidade deve conter entre 3 e 30 caracteres.").When(r => r.Cidade != null);
            RuleFor(endereco => endereco.Estado).Length(2).WithMessage("A sigla do estado deve conter 2 caracteres").When(r => r.Estado != null);
            RuleFor(endereco => endereco.Rua).Length(3, 100).WithMessage("Rua deve conter entre 3 e 100 caracteres.").When(r => r.Rua != null);
            RuleFor(endereco => endereco.Numero).GreaterThan(0).LessThan(9999).WithMessage("Número deve ser maior que 0 e menor que 9999").When(r => r.Numero != null);
            RuleFor(endereco => endereco.CEP).Length(9).Matches("-").WithMessage("CEP deve conter hífen").When(r => r.CEP != null);
            RuleFor(endereco => endereco.Complemento).Length(3, 100).WithMessage("Complemento deve conter entre 3 e 100 caracteres.").When(r => r.Complemento != null);

        }
    }
}
