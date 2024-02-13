using AutoMapper;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Dtos.Refugiado;

namespace ProjetoRefugiadosApi.Profiles
{
    public class RefugiadoProfile : Profile
    {
        public RefugiadoProfile()
        {
            CreateMap<Refugiado, CreateRefugiadoDto>();
            CreateMap<CreateRefugiadoDto, Refugiado>();

            CreateMap<UpdateRefugiadoDto, Refugiado>();
            CreateMap<Refugiado, UpdateRefugiadoDto>();
        }
    }
}
