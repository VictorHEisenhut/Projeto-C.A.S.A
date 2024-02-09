using FluentValidation;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Dtos.PostosDeSaude;

namespace ProjetoRefugiadosApi.Validations
{
    public class PostoDeSaudeValidation : AbstractValidator<CreatePostoDeSaudeDto>
    {
        public PostoDeSaudeValidation()
        {
            RuleFor(postoDeSaude => postoDeSaude.Email).EmailAddress().When(c => c.Email != null);
            RuleFor(postoDeSaude => postoDeSaude.Telefone).Length(11).WithMessage("Telefone inválido, verifique se contém o DDD.").When(c => c.Telefone != null);
            RuleFor(postoDeSaude => postoDeSaude.Nome).MinimumLength(3).MaximumLength(20).WithMessage("Nome deve possuir entre 3 e 20 caracteres.").When(c => c.Telefone != null);
            RuleFor(postoDeSaude => postoDeSaude.EnderecoId).NotNull().WithMessage("Não é possível criar um posto de saúde sem um endereço");
        }
    }
}
