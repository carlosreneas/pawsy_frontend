import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import Avatar from '@mui/material/Avatar';
import PetsIcon from '@mui/icons-material/Pets';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

// Estilos del contenedor
const ProfileContainer = styled(Stack)(({ theme }) => ({
  overflow: 'auto',
  minHeight: '100vh',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'fixed',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

// Card con estilo compartido
const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '500px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export default function PetProfile() {
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aquí irá el fetch a la API en el futuro
    setTimeout(() => {
      setPet({
        nombre: 'Max',
        tipo: 'Perro',
        edad: 3,
        descripcion: 'Amigable y juguetón. Le encanta correr en el parque.',
      });
      setLoading(false);
    }, 1000); // Simula un retardo de red de 1 segundo
  }, []);

  return (
    <AppTheme>
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <ProfileContainer direction="column" justifyContent="center" alignItems="center">
        {loading ? (
          <CircularProgress />
        ) : (
          <Card variant="outlined">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main', width: 64, height: 64 }}>
                <PetsIcon fontSize="large" />
              </Avatar>
              <Typography variant="h5" component="h1">
                Perfil de {pet.nombre}
              </Typography>
              <Divider sx={{ width: '100%' }} />
              <Typography variant="body1"><strong>Tipo:</strong> {pet.tipo}</Typography>
              <Typography variant="body1"><strong>Edad:</strong> {pet.edad} años</Typography>
              <Typography variant="body1"><strong>Descripción:</strong></Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                {pet.descripcion}
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }}>
                Editar perfil
              </Button>
            </Box>
          </Card>
        )}
      </ProfileContainer>
    </AppTheme>
  );
}
