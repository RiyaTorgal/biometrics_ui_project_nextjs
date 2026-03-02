import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Text,
  Hr,
  Font,
  Img,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Helvetica Neue"
          fallbackFontFamily="Arial"
          webFont={undefined}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Body style={{ backgroundColor: "#f4f6f8", padding: "20px", margin: 0 }}>
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            border: "1px solid #e2e8f0",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <Section style={{ backgroundColor: "#2563eb", padding: "24px", textAlign: "center" }}>
              <Img 
                src="/mail.png"
                width="32"
                height="32"
                alt="mail"
                style={{ margin: "0 auto 8px auto", display: "block" }}
              />
            <Text
              style={{
                margin: 0,
                color: "#ffffff",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              New Contact Form Submission
            </Text>
          </Section>

          {/* Body */}
          <Section style={{ padding: "25px", color: "#333333" }}>
            <Text style={{ fontSize: "14px", margin: "0 0 20px 0" }}>
              You have received a new message from your website contact form.
            </Text>

            {/* Details Table */}
            <Section
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                overflow: "hidden",
                fontSize: "14px",
              }}
            >
              <Row style={{ backgroundColor: "#f9fafb", borderBottom: "1px solid #e2e8f0" }}>
                <Column style={{ padding: "10px 12px", fontWeight: "bold", width: "120px" }}>
                  Name
                </Column>
                <Column style={{ padding: "10px 12px" }}>{name}</Column>
              </Row>
              <Row style={{ borderBottom: "1px solid #e2e8f0" }}>
                <Column style={{ padding: "10px 12px", fontWeight: "bold", width: "120px" }}>
                  Email
                </Column>
                <Column style={{ padding: "10px 12px" }}>{email}</Column>
              </Row>
              <Row>
                <Column style={{ padding: "10px 12px", fontWeight: "bold", width: "120px" }}>
                  Subject
                </Column>
                <Column style={{ padding: "10px 12px" }}>{subject}</Column>
              </Row>
            </Section>

            {/* Message */}
            <Text style={{ fontWeight: "bold", margin: "20px 0 8px 0", fontSize: "14px" }}>
              Message:
            </Text>
            <Section
              style={{
                backgroundColor: "#f1f5f9",
                padding: "15px",
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#333333",
              }}
            >
              <Text style={{ margin: 0, whiteSpace: "pre-line" }}>{message}</Text>
            </Section>
          </Section>

          {/* Footer */}
          <Hr style={{ borderColor: "#e2e8f0", margin: 0 }} />
          <Section
            style={{
              backgroundColor: "#f9fafb",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <Text style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>
              This email was sent from your website contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}