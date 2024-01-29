using AutoMapper;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Dtos.Endereco;

namespace ProjetoRefugiadosApi.Profiles
{
    public class EnderecoProfile : Profile
    {
        public EnderecoProfile()
        {
            CreateMap<Endereco, CreateEnderecoDto>();
            CreateMap<CreateEnderecoDto, Endereco>();
        }
    }
}
