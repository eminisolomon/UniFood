import { Service } from "typedi";
import { sendEmail } from '@utils/sendEmail';
import * as Templates from "@templates";

@Service()
export class EmailService {
  async sendForgetPasswordEmail(email, username, otp) {
    const emailTemplate = Templates.forgetPasswordEmail(username, otp);
    const to = email;
    const subject = 'Forget Password OTP';
    const html = emailTemplate.html;
  
    await sendEmail(to, subject, html);
  }
  
  async sendResetPasswordEmail(email, otp) {
    const emailTemplate = Templates.resetPasswordEmail(otp);
    const to = email;
    const subject = 'Forget Password Success';
    const html = emailTemplate.html;
  
    await sendEmail(to, subject, html);
  }
  
  async sendWelcomeEmail(email, username) {
    const emailTemplate = Templates.welcomeEmail(username);
    const to = email;
    const subject = 'Welcome To SpireNet';
    const html = emailTemplate.html;
  
    await sendEmail(to, subject, html);
  }
}
