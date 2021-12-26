// const fs = require("fs");
// const nodemailer = require("nodemailer");
// const ejs = require("ejs");

// const sendMail = async () => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "praveena.19.abca@acharya.ac.in",
//       pass: "acharya1234",
//     },
//   });

//   const data = await ejs.renderFile(__dirname + "/views/welcome.ejs", {
//     name: "Stranger",
//   });

//   const mainOptions = {
//     from: '"Tester" testmail@zoho.com',
//     to: "spraveen593@gmail.com",
//     subject: "Hello, world!",
//     html: data,
//   };

//   transporter.sendMail(mainOptions, (err, info) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Message sent: " + info.response);
//     }
//   });
// };

// sendMail();

// const cheerio = require("cheerio");
// const axios = require("axios");

// const getData = async () => {
//   const response = await axios({
//     url: "https://www.nseindia.com/api/live-analysis-variations?index=gainers",
//     method: "GET",
//     headers: {
//       token:
//         "STD-x*x-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50X2lkIjoiMjc4ODUiLCJjdXJyZW50X3NlbSI6IjUiLCJjdXJyZW50X3llYXIiOiIzIn0.Cv8C3--MG5MchNDYJw44iOOAbXDkH0UAWjxsZ_XblD0",
//       cookie: `nsit=tZRwh0d11Ldy8xQu-OzBVNrj; AKA_A2=A; ak_bmsc=AAE143C53295C5C583706AE8DEFDACE3~000000000000000000000000000000~YAAQZNcLF2iTvbV9AQAAu0ds9Q55+ioVQjeHm4s5k2A9/dxCKPSfSMerTZNoga3PPJ1kvPVyUTKjAH2GHMLJXojevACNh1YRyAE2c16Kds4ezFxQUFfYsFas4pgqk5oHugwZKzrrcbZmUk5ClIvC7zZZblDIpsImtl8S+P8r0XN4Pq9zHYHCLk91YCFHPFGgVOPQt2RS1J94LFiwo4lZ0yrv4zQkK/56RoWvKRZI3224D94hdgUp2eM4zGvsyKhSHqGlG7xCK8JeBSe6Eq79EPJp6ha2KwGEMSpiR5hVxvYwpNt0yC6NigJDZqfrRXMHDyd/Qr/kA9/iAyV1DRWcgfmFvoH28nx23fFyyT/9FupXCTlGDgydvefos6wDeUD2rx5lWcrL8OSqGBXEemaqKYIbLURw/gT7/N74uIJyiZvK84iEEGPiezzQq7IDhneCgI3dDWjULyyMqzDtJic+wJmL0Y2KBo8CWtEszPjf00zVdEBkQ/9EbXv7+nW6sFGKWh/7vj/+M0PyuKwEFA==; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTY0MDUwMDkzNSwiZXhwIjoxNjQwNTA0NTM1fQ.hN5pewyUb2AnS7x5rV40yCrEZXlXKoqJlGOUSkMdaMc; bm_sv=A3EBF25A95224E37C576639DAFA2B980~G7671j1xVkucFOZu10I+KSNzGWoQ8VxfuJWIlznK+nTdtngolbHMKCnye8F8+G3QsTJOqDzrMly977AKmp8lu896lG7U52CX390GJc+AsHOOzfN/PrrnLkfhCLGDXRhnzgUFmgZhpRs8Ld4E7q+1hAy3NNRMgW0Gm3SoTgf02s8=; RT="z=1&dm=nseindia.com&si=10f32a5a-9954-4393-9272-2ee7f3792af8&ss=kxmvd0kd&sl=5&tt=8lt&bcn=%2F%2F684d0d43.akstat.io%2F&ld=jcr1&nu=kpaxjfo&cl=jeyl`,
//     },
//   });
//   console.log(response.data.NIFTY);
// };

// getData();
