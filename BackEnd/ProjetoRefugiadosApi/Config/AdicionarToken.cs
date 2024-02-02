using Microsoft.IdentityModel.Tokens;
using ProjetoRefugiados.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ProjetoRefugiadosApi.Config
{
    public class AdicionarToken
    {
        public static string GenerateToken(Refugiado refugiado)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(Configuracoes.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, refugiado.Nome.ToString()),
                    new Claim(ClaimTypes.Role, refugiado.Role.ToString()),
                    new Claim(ClaimTypes.NameIdentifier, refugiado.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddHours(24),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
