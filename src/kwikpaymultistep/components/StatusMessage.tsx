interface StatusMessageProps {
    status: 'success' | 'error' | 'pending';
    onProceed?: () => void;
  }
  
  const StatusMessage = ({ status, onProceed }: StatusMessageProps) => {
    const styles = {
      container: {
        padding: '30px',
        textAlign: 'center' as const,
        fontFamily: 'Arial, sans-serif',
      },
      icon: { fontSize: '48px', marginBottom: '10px' },
      title: { fontSize: '20px', fontWeight: 600 },
      message: { fontSize: '14px', marginTop: '10px', color: '#555' },
      button: {
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#00b894',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      },
    };
  
    const getIcon = () => {
      switch (status) {
        case 'success':
          return '✅';
        case 'error':
          return '❌';
        case 'pending':
          return '⏳';
      }
    };
  
    const getTitle = () => {
      switch (status) {
        case 'success':
          return 'Application submitted successfully!';
        case 'error':
          return 'Application failed';
        case 'pending':
          return 'Application is in progress';
      }
    };
  
    const getMessage = () => {
      switch (status) {
        case 'success':
          return 'Your application has been submitted. You will be notified once verified.';
        case 'error':
          return 'There was a problem verifying your application. Please try again.';
        case 'pending':
          return 'We are currently verifying your details. Please wait...';
      }
    };
  
    return (
      <div style={styles.container}>
        <div style={styles.icon}>{getIcon()}</div>
        <div style={styles.title}>{getTitle()}</div>
        <div style={styles.message}>{getMessage()}</div>
        {onProceed && (
          <button onClick={onProceed} style={styles.button}>
            Proceed
          </button>
        )}
      </div>
    );
  };
  
  export default StatusMessage;