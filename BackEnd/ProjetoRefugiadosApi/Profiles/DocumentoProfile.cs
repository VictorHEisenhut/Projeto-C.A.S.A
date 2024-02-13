using AutoMapper;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Dtos.Documento;
using ProjetoRefugiadosApi.Dtos.Refugiado;

namespace ProjetoRefugiadosApi.Profiles
{
    public class DocumentoProfile : Profile
    {
        public DocumentoProfile()
        {
            CreateMap<Documento, CreateDocumentoDto>();
            CreateMap<CreateDocumentoDto, Documento>();

            CreateMap<UpdateDocumentoDto, Documento>();
            CreateMap<Documento, UpdateDocumentoDto>();
        }
    }
}
