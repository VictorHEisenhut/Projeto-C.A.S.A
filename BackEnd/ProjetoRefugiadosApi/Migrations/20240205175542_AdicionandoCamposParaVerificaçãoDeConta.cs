using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjetoRefugiadosApi.Migrations
{
    /// <inheritdoc />
    public partial class AdicionandoCamposParaVerificaçãoDeConta : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DataVerificacao",
                table: "Refugiados",
                type: "datetime(6)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ResetTokenExpira",
                table: "Refugiados",
                type: "datetime(6)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TokenResetSenha",
                table: "Refugiados",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "TokenVerificacao",
                table: "Refugiados",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DataVerificacao",
                table: "Refugiados");

            migrationBuilder.DropColumn(
                name: "ResetTokenExpira",
                table: "Refugiados");

            migrationBuilder.DropColumn(
                name: "TokenResetSenha",
                table: "Refugiados");

            migrationBuilder.DropColumn(
                name: "TokenVerificacao",
                table: "Refugiados");
        }
    }
}
