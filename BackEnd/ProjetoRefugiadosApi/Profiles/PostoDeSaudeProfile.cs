using AutoMapper;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Dtos.PostosDeSaude;

namespace ProjetoRefugiadosApi.Profiles
{
    public class PostoDeSaudeProfile : Profile
    {
        public PostoDeSaudeProfile()
        {
            CreateMap<PostoDeSaude, CreatePostoDeSaudeDto>();
            CreateMap<CreatePostoDeSaudeDto, PostoDeSaude>();
        }
    }
}
