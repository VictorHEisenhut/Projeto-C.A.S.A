using DocumentValidator;
using FluentValidation;
using ProjetoRefugiados.Models;

namespace ProjetoRefugiadosApi.Validations
{
    public class RefugiadoValidation : AbstractValidator<Refugiado>
    {
        public RefugiadoValidation()
        {
            RuleFor(refugiado => refugiado.Nome).MinimumLength(3).MaximumLength(20).NotNull().WithMessage("Nome deve possuir entre 3 e 20 caracteres.");
            RuleFor(p => p.Senha).NotEmpty().WithMessage("Sua senha não pode estar vazia.")
                               .MinimumLength(8).WithMessage("Sua senha deve possuir ao mínimo 8 caracteres.")
                               .MaximumLength(16).WithMessage("Sua senha não deve exceder 16 caracteres.")
                               .Matches(@"[A-Z]+").WithMessage("Sua senha deve possuir ao menos uma letra maiúscula.")
                               .Matches(@"[a-z]+").WithMessage("Sua senha deve possuir ao menos uma letra minúscula.")
                               .Matches(@"[0-9]+").WithMessage("Sua senha deve possuir ao menos um número.");
            RuleFor(refugiado => CpfValidation.Validate(refugiado.Documento.Cpf)).Equal(true).WithMessage("CPF inválido").When(r => r.Documento.Cpf != null);
            
            //Em comentário para testes:
            //RuleFor(refugiado => RGValidation.Validate(refugiado.Documento.Rg)).Equal(true).WithMessage("RG inválido");
            //RuleFor(refugiado => CnhValidation.Validate(refugiado.Documento.Cnh)).Equal(true).WithMessage("CNH inválida");
        }
    }
}

