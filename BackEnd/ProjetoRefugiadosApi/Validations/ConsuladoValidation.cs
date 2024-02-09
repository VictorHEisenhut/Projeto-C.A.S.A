using FluentValidation;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Dtos.Consulado;

namespace ProjetoRefugiadosApi.Validations
{
    public class ConsuladoValidation : AbstractValidator<CreateConsuladoDto>
    {
        public ConsuladoValidation()
        {
            RuleFor(consulado => consulado.Email).EmailAddress().When(c => c.Email != null);
            RuleFor(consulado => consulado.Telefone).Length(11).WithMessage("Telefone inválido, verifique se contém o DDD.").When(c => c.Telefone != null);
            RuleFor(consulado => consulado.Nome).MinimumLength(3).MaximumLength(20).WithMessage("Nome deve possuir entre 3 e 20 caracteres.").When(c => c.Telefone != null);
            RuleFor(consulado => consulado.EnderecoId).NotNull().WithMessage("Não é possível criar um consulado sem um endereço");
        }
    }
}
