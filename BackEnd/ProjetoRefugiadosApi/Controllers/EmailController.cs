using MailKit.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit.Text;
using MimeKit;
using static Org.BouncyCastle.Math.EC.ECCurve;
using MailKit.Net.Smtp;

namespace ProjetoRefugiadosApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        private readonly IConfiguration _config;

        public EmailController(IConfiguration config)
        {
            _config = config;
        }

        [HttpPost]
        public void EnviarEmail([FromBody]string body, string toEmail, string subject)
        {
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse(_config.GetSection("EmailUsername").Value));
            email.To.Add(MailboxAddress.Parse(toEmail));
            email.Subject = subject;
            email.Body = new TextPart(TextFormat.Html) { Text = body };
            using var smtp = new SmtpClient();

            smtp.Connect(_config.GetSection("EmailHost").Value, Convert.ToInt32(_config.GetSection("EmailPort").Value), SecureSocketOptions.StartTls);
            smtp.Authenticate(_config.GetSection("EmailUsername").Value, _config.GetSection("EmailPassword").Value);
            smtp.Send(email);

            smtp.Disconnect(true);

        }
    }
}
