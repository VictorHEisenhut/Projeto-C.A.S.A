using AutoMapper;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Dtos.Abrigo;

namespace ProjetoRefugiadosApi.Profiles
{
    public class AbrigoProfile : Profile
    {
        public AbrigoProfile()
        {
            CreateMap<Abrigo, CreateAbrigoDto>();
            CreateMap<CreateAbrigoDto, Abrigo>();
        }
    }
}
