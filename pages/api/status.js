export default function handler(req, res) {
  // Configurar CORS para permitir peticiones desde cualquier origen
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  // Información del estado del servicio
  const statusInfo = {
    service: 'SIGISWO',
    status: 'outage',
    message: 'Interrupción del Servicio',
    description: 'Debido a una interrupción global de nuestro aliado tecnológico Amazon Web Services (AWS), nuestros servicios se han visto afectados.',
    workingMessage: '¡Estamos trabajando para restablecer nuestro servicio!',
    thanksMessage: 'Gracias por tu comprensión',
    cause: 'Interrupción global de AWS',
    lastUpdated: new Date().toISOString(),
    timestamp: Date.now(),
    affectedServices: [
      'Sistema Principal',
      'API de Usuarios',
      'Base de Datos',
      'Servicios de Autenticación'
    ],
    estimatedResolution: 'En proceso',
    contactInfo: {
      email: 'soporte@sigiswo.com',
      phone: '+1-800-SIGISWO',
      statusPage: 'https://status.sigiswo.com'
    }
  };

  // Simular diferentes códigos de estado HTTP según el tipo de problema
  const httpStatus = 503; // Service Unavailable

  res.status(httpStatus).json(statusInfo);
}
