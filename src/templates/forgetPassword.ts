export function forgetPasswordEmail(username: string, otp: string) {
    const html = `
      <html>
        <head>
          <style>
            /* Add your custom CSS styles here */
          </style>
        </head>
        <body>
          <h1>Forget Password OTP</h1>
          <p>Dear ${username},</p>
          <p>We have received a request to reset your password. To proceed, please use the following One-Time Password (OTP):</p>
          <h2>${otp}</h2>
          <p>If you did not initiate this request, you can safely ignore this email.</p>
          <p>Best regards,</p>
          <p>The UniFood Team</p>
        </body>
      </html>
    `;
  
    return { html };
  }
  