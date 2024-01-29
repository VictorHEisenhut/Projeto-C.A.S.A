using AutoMapper;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Dtos.Consulado;

namespace ProjetoRefugiadosApi.Profiles
{
    public class ConsuladoProfile : Profile
    {
        public ConsuladoProfile()
        {
            CreateMap<Consulado, CreateConsuladoDto>();
            CreateMap<CreateConsuladoDto, Consulado>();
        }
    }
}
