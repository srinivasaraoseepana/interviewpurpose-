import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { updateForm } from '../redux/formSlice';

const videoKycSchema = z.object({
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must provide consent to continue' })
  })
});

type VideoKycForm = z.infer<typeof videoKycSchema>;

const VideoKycStep = ({ next }: { next: () => void }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VideoKycForm>({
    resolver: zodResolver(videoKycSchema),
  });

  const onSubmit = (data: VideoKycForm) => {
    dispatch(updateForm({ videoKycConsent: data.consent }));
    next();
  };

  const styles = {
    container: { padding: '20px', fontFamily: 'Arial, sans-serif' },
    checkbox: {
      marginRight: '10px',
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#00b894',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    error: { color: 'red', fontSize: '12px', marginTop: '-5px' },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.container}>
      <h2>Video KYC Consent</h2>

      <label style={styles.label}>
        <input type="checkbox" {...register('consent')} style={styles.checkbox} />
        I consent to recording a short video for KYC verification
      </label>
      {errors.consent && <p style={styles.error}>{errors.consent.message}</p>}

      <button type="submit" style={styles.button}>Start Video KYC</button>
    </form>
  );
};

export default VideoKycStep;
