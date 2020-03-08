import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders

sender_email_address = 'vision.ai.updates@gmail.com'
sender_email_password = 'aneri@123'
receiver_email_address = 'anerishah97@gmail.com'
 
email_subject_line = 'Progress Report'
 
msg = MIMEMultipart()
msg['From'] = sender_email_address
msg['To'] = receiver_email_address
msg['Subject'] = email_subject_line
 
email_body = 'Hey Feya! You are making progress. Find your progress report attached below\n'+str("\n \nThanks,\nBe SexEd")
msg.attach(MIMEText(email_body, 'plain'))
 
email_content = msg.as_string()
server = smtplib.SMTP('smtp.gmail.com:587')
server.starttls()
server.login(sender_email_address, sender_email_password)
 
server.sendmail(sender_email_address, receiver_email_address, email_content)
server.quit()