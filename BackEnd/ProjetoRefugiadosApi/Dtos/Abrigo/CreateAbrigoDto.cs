﻿using System.ComponentModel.DataAnnotations;

namespace ProjetoRefugiadosApi.Dtos.Abrigo
{
    public class CreateAbrigoDto
    {
        public int EnderecoId { get; set; }
        public string? Nome { get; set; }
        [EmailAddress]
        public string? Email { get; set; }
        [Phone]
        public string? Telefone { get; set; }
    }
}
