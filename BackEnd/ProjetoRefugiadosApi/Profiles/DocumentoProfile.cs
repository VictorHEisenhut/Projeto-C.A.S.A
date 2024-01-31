using AutoMapper;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Dtos.Documento;

namespace ProjetoRefugiadosApi.Profiles
{
    public class DocumentoProfile : Profile
    {
        public DocumentoProfile()
        {
            CreateMap<Documento, CreateDocumentoDto>();
            CreateMap<CreateDocumentoDto, Documento>();
        }
    }
}
