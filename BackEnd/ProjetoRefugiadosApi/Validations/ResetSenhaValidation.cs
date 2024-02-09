using FluentValidation;
using ProjetoRefugiadosApi.Dtos.Refugiado;

namespace ProjetoRefugiadosApi.Validations
{
    public class ResetSenhaValidation : AbstractValidator<ResetSenhaDto>
    {
        public ResetSenhaValidation()
        {
            RuleFor(p => p.Senha)
                .NotEmpty().WithMessage("Sua senha não pode estar vazia.")
                .MinimumLength(8).WithMessage("Sua senha deve possuir ao mínimo 8 caracteres.")
                .MaximumLength(50).WithMessage("Sua senha não deve exceder 50 caracteres.")
                .Matches(@"[A-Z]+").WithMessage("Sua senha deve possuir ao menos uma letra maiúscula.")
                .Matches(@"[a-z]+").WithMessage("Sua senha deve possuir ao menos uma letra minúscula.")
                .Matches(@"[0-9]+").WithMessage("Sua senha deve possuir ao menos um número.");
        }
    }
}
