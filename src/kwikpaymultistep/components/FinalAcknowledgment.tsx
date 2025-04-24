import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { resetForm } from '../redux/formSlice';

const FinalAcknowledgment = () => {
  const formData = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(resetForm());
    alert('Form has been reset. You can start again.');
  };

  const styles = {
    container: { padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' as const },
    title: { fontSize: '20px', fontWeight: 600 },
    message: { fontSize: '14px', marginTop: '10px', color: '#555' },
    data: {
      margin: '20px auto',
      textAlign: 'left' as const,
      background: '#f7f7f7',
      padding: '15px',
      borderRadius: '5px',
      width: '100%',
      maxWidth: '600px',
      fontSize: '14px'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#0984e3',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '20px'
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>🎉 Thank You!</div>
      <div style={styles.message}>
        Your credit card application has been successfully submitted.
      </div>

      <div style={styles.data}>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>

      <button onClick={handleRestart} style={styles.button}>Start New Application</button>
    </div>
  );
};

export default FinalAcknowledgment;