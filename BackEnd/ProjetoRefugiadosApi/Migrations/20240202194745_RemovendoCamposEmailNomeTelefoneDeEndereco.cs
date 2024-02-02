using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjetoRefugiadosApi.Migrations
{
    /// <inheritdoc />
    public partial class RemovendoCamposEmailNomeTelefoneDeEndereco : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Descricao",
                table: "Enderecos");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Enderecos");

            migrationBuilder.DropColumn(
                name: "Nome",
                table: "Enderecos");

            migrationBuilder.DropColumn(
                name: "Telefone",
                table: "Enderecos");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "PostosDeSaude",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Nome",
                table: "PostosDeSaude",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Telefone",
                table: "PostosDeSaude",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Consulados",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Nome",
                table: "Consulados",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Telefone",
                table: "Consulados",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Abrigos",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Nome",
                table: "Abrigos",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Telefone",
                table: "Abrigos",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "PostosDeSaude");

            migrationBuilder.DropColumn(
                name: "Nome",
                table: "PostosDeSaude");

            migrationBuilder.DropColumn(
                name: "Telefone",
                table: "PostosDeSaude");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Consulados");

            migrationBuilder.DropColumn(
                name: "Nome",
                table: "Consulados");

            migrationBuilder.DropColumn(
                name: "Telefone",
                table: "Consulados");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Abrigos");

            migrationBuilder.DropColumn(
                name: "Nome",
                table: "Abrigos");

            migrationBuilder.DropColumn(
                name: "Telefone",
                table: "Abrigos");

            migrationBuilder.AddColumn<string>(
                name: "Descricao",
                table: "Enderecos",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Enderecos",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Nome",
                table: "Enderecos",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Telefone",
                table: "Enderecos",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }
    }
}
