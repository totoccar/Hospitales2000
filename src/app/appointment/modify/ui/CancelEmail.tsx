import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface ContactEmailProps {
    email: string;
    message: string;
  }
  
  export const CancelEmail = ({ email,message }: ContactEmailProps) => {
    return (
      <Html>
        <Head />
        <Preview>Atencion, tu cita ha sido cancelada</Preview>
        <Body style={main}>
          <Container style={container}>
            <Heading style={h1}>Hospitales 2000</Heading>
            <Heading style={text}>
              Tu medico canceló la cita medica
            </Heading>
            <Text style={text}>¡Hola!</Text>
            <Text style={text}>
              {message}
            </Text>
            <Text style={text}>
              Puedes volver a agendar una nueva cita medica en el momento que desees.
            </Text>
            <Hr style={hr} />
            <Text style={footer}>
                Esto es un mensaje automatico, por favor no respondas a este correo.
                © 2024 Hospitales 2000. Todos los derechos reservados.
                Comision 1 implementa.
            </Text>
          </Container>
        </Body>
      </Html>
    );
  };
  
  const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  };
  
  const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px",
  };
  
  const h1 = {
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "40px 0",
    padding: "0",
    textAlign: "center" as const,
  };
  
  const text = {
    color: "#333",
    fontSize: "16px",
    lineHeight: "26px",
    marginBottom: "24px",
  };
  
  const buttonContainer = {
    textAlign: "center" as const,
    marginBottom: "24px",
  };
  
  const button = {
    backgroundColor: "#5469d4",
    borderRadius: "4px",
    color: "#ffffff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "12px 24px",
    fontWeight: "bold",
  };
  
  const link = {
    color: "#5469d4",
    fontSize: "14px",
    textDecoration: "underline",
    wordBreak: "break-all" as const,
  };
  
  const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px",
  };