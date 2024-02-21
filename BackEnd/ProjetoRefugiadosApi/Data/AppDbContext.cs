using Microsoft.EntityFrameworkCore;
using ProjetoRefugiados.Models;

namespace ProjetoRefugiadosApi.Data
{
    public class AppDbContext : DbContext
    {

        public DbSet<Refugiado> Refugiados { get; set; }
        public DbSet<Paises> Paises { get; set; }
        public DbSet<Endereco> Enderecos { get; set; }
        public DbSet<Documento> Documentos { get; set; }
        public DbSet<Consulado> Consulados { get; set; }
        public DbSet<PostoDeSaude> PostosDeSaude { get; set; }
        public DbSet<Abrigo> Abrigos { get; set; }

        static readonly string connectionString = @"Server=viaduct.proxy.rlwy.net;Port=18017;Database=railway;user ID=root;Password=hC-C6b3BcEE3fCfBdDGHAH-BhB52af1h;";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
        }
    }
}
