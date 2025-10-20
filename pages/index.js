import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/StatusPage.module.css';

export default function StatusPage() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Solo actualizar la fecha en el cliente para evitar errores de hidratación
    setCurrentTime(new Date().toLocaleString('es-ES'));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Estado del Servicio - SIGISWO</title>
        <meta name="description" content="Página de estado de servicio SIGISWO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.statusCard}>
          <div className={styles.logo}>
            <Image
              src="/images/LOGOISWOIA.png"
              alt="SIGISWO Software +IA Logo"
              width={120}
              height={120}
              className={styles.logoImage}
              priority
            />
            <div className={styles.logoPlaceholder}>
              <div className={styles.logoText}>
                <div className={styles.sig}>SIG</div>
                <div className={styles.iswo}>ISWO</div>
                <div className={styles.software}>Software</div>
                <div className={styles.ia}>+IA</div>
              </div>
            </div>
          </div>
          
          <div className={styles.statusIcon}>
            <div className={styles.warningIcon}>⚠️</div>
          </div>
          
          <h2 className={styles.statusTitle}>Problema de Servicio</h2>
          
          <div className={styles.statusMessage}>
            <p>
              Debido a una interrupción global de nuestro aliado tecnológico 
              <strong> Amazon Web Services (AWS)</strong>, nuestros servicios se han visto afectados.
            </p>
            <p className={styles.workingMessage}>
              ¡Estamos trabajando para restablecer nuestro servicio!
            </p>
            <p className={styles.thanksMessage}>
              Gracias por tu comprensión
            </p>
          </div>
          
          <div className={styles.statusDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Estado:</span>
              <span className={styles.detailValue}>Interrupción del Servicio</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Causa:</span>
              <span className={styles.detailValue}>Interrupción global de AWS</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Última actualización:</span>
              <span className={styles.detailValue}>
                {currentTime || 'Cargando...'}
              </span>
            </div>
          </div>
          
          <div className={styles.actions}>
            <button 
              className={styles.refreshButton}
              onClick={() => window.location.reload()}
            >
              Actualizar Página
            </button>
          </div>
        </div>
        
        <div className={styles.footer}>
          <p>Para más información, contacta a nuestro equipo de soporte</p>
        </div>
      </main>
    </div>
  );
}
