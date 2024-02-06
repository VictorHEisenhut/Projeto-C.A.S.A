using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjetoRefugiadosApi.Migrations
{
    /// <inheritdoc />
    public partial class CriptografandoSenha : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Senha",
                table: "Refugiados");

            migrationBuilder.AddColumn<byte[]>(
                name: "SenhaHash",
                table: "Refugiados",
                type: "longblob",
                nullable: false);

            migrationBuilder.AddColumn<byte[]>(
                name: "SenhaSalt",
                table: "Refugiados",
                type: "longblob",
                nullable: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SenhaHash",
                table: "Refugiados");

            migrationBuilder.DropColumn(
                name: "SenhaSalt",
                table: "Refugiados");

            migrationBuilder.AddColumn<string>(
                name: "Senha",
                table: "Refugiados",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");
        }
    }
}
