using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjetoRefugiadosApi.Migrations
{
    /// <inheritdoc />
    public partial class AlterandoTabelasDeDocumentosERefugiado : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Dprnm",
                table: "Documentos");

            migrationBuilder.DropColumn(
                name: "ProtocoleRefugio",
                table: "Documentos");

            migrationBuilder.DropColumn(
                name: "RegistroEmigrante",
                table: "Documentos");

            migrationBuilder.AddColumn<int>(
                name: "EnderecoId",
                table: "Refugiados",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Refugiados_EnderecoId",
                table: "Refugiados",
                column: "EnderecoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Refugiados_Enderecos_EnderecoId",
                table: "Refugiados",
                column: "EnderecoId",
                principalTable: "Enderecos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Refugiados_Enderecos_EnderecoId",
                table: "Refugiados");

            migrationBuilder.DropIndex(
                name: "IX_Refugiados_EnderecoId",
                table: "Refugiados");

            migrationBuilder.DropColumn(
                name: "EnderecoId",
                table: "Refugiados");

            migrationBuilder.AddColumn<string>(
                name: "Dprnm",
                table: "Documentos",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "ProtocoleRefugio",
                table: "Documentos",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "RegistroEmigrante",
                table: "Documentos",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }
    }
}
