using DocumentValidator;
using FluentValidation;
using NuGet.Packaging;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Dtos.Refugiado;

namespace ProjetoRefugiadosApi.Validations
{
    public class RefugiadoValidation : AbstractValidator<CreateRefugiadoDto>
    {
        public RefugiadoValidation()
        {
            RuleFor(refugiado => refugiado.Nome).MinimumLength(3).MaximumLength(20).NotNull().WithMessage("Nome deve possuir entre 3 e 20 caracteres.");
            RuleFor(p => p.Senha)
                .NotEmpty().WithMessage("Sua senha não pode estar vazia.")
                .MinimumLength(8).WithMessage("Sua senha deve possuir ao mínimo 8 caracteres.")
                .MaximumLength(50).WithMessage("Sua senha não deve exceder 50 caracteres.")
                .Matches(@"[A-Z]+").WithMessage("Sua senha deve possuir ao menos uma letra maiúscula.")
                .Matches(@"[a-z]+").WithMessage("Sua senha deve possuir ao menos uma letra minúscula.")
                .Matches(@"[0-9]+").WithMessage("Sua senha deve possuir ao menos um número.");
            RuleFor(refugiado => CpfValidation.Validate(refugiado.Documento.Cpf)).Equal(true).WithMessage("CPF inválido").When(r => r.Documento.Cpf != null);
            RuleFor(refugiado => RGValidation.Validate(refugiado.Documento.Rg)).Equal(true).WithMessage("RG inválido").When(r => r.Documento.Rg != null);
            RuleFor(refugiado => CnhValidation.Validate(refugiado.Documento.Cnh)).Equal(true).WithMessage("CNH inválida").When(r => r.Documento.Cnh != null);
            RuleFor(refugiado => refugiado.Genero).NotNull().IsInEnum().WithMessage("Gênero inválido.");
            RuleFor(refugiado => refugiado.EstadoCivil).NotNull().IsInEnum().WithMessage("Estado civil inválido.");
            RuleFor(refugiado => refugiado.Escolaridade).NotNull().IsInEnum().WithMessage("Escolaridade inválida.");
            RuleFor(refugiado => refugiado.DataNascimento).NotNull().LessThan(DateOnly.FromDateTime(DateTime.Now)).WithMessage("Data de nascimento inválida.");
            RuleFor(refugiado => refugiado.Telefone).NotNull().Length(11).WithMessage("Telefone inválido, verifique se contém o DDD.");
            RuleFor(refugiado => refugiado.Endereco).SetValidator(new EnderecoValidation());
        }
    }
}

