using FluentValidation;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Dtos.Abrigo;

namespace ProjetoRefugiadosApi.Validations
{
    public class AbrigoValidation : AbstractValidator<CreateAbrigoDto>
    {
        public AbrigoValidation()
        {
            RuleFor(abrigo => abrigo.Email).EmailAddress().When(a => a.Email != null);
            RuleFor(abrigo => abrigo.Nome).MinimumLength(3).MaximumLength(20).WithMessage("Nome deve possuir entre 3 e 20 caracteres.").When(a => a.Telefone != null);
            RuleFor(abrigo => abrigo.EnderecoId).NotNull().WithMessage("Não é possível criar um abrigo sem um endereço");


        }
    }
}
