export function welcomeEmail(username: string) {
  const html = `
      <html>
        <head>
          <style>
            /* Add your custom CSS styles here */
          </style>
        </head>
        <body>
          <h1>Welcome to UniFood!</h1>
          <p>Dear ${username},</p>
          <p>Thank you for joining UniFood. We are excited to have you on board.</p>
          <p>If you have any questions or need assistance, feel free to contact our support team.</p>
          <p>Best regards,</p>
          <p>The UniFood Team</p>
        </body>
      </html>
    `;

  return { html };
}
