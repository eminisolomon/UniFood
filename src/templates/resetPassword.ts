export function resetPasswordEmail(username: string) {
  const html = `
      <html>
        <head>
          <style>
            /* Add your custom CSS styles here */
          </style>
        </head>
        <body>
          <h1>Forget Password Success</h1>
          <p>Dear ${username},</p>
          <p>Your password has been successfully reset.</p>
          <p>If you did not initiate this password reset, please contact our support team immediately.</p>
          <p>Best regards,</p>
          <p>The SpireNet Team</p>
        </body>
      </html>
    `;

  return { html };
}
