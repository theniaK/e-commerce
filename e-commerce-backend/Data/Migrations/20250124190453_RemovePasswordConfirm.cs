using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace e_commerce_backend.Data.Migrations
{
    /// <inheritdoc />
    public partial class RemovePasswordConfirm : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PasswordConfirm",
                table: "Users");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PasswordConfirm",
                table: "Users",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
