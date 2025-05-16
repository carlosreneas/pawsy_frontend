import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Avatar,
  Chip,
  Stack,
  IconButton,
  CssBaseline,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Styled container for the profile page
const ProfileContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  position: 'relative',
}));

// Back button wrapper
const BackButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
  color: theme.palette.text.primary,
}));

export default function PetProfile({ petId }) {
  const [pet, setPet] = useState(null);

  useEffect(() => {
    // Simulated fetch -- replace with real API call
    fetch(`/api/mascotas/${petId}`)
      .then(res => res.json())
      .then(data => setPet(data))
      .catch(() => {
        // fallback or error handling
      });
  }, [petId]);

  if (!pet) {
    return (
      <AppTheme>
        <ProfileContainer>
          <CssBaseline />
          <Typography variant="h6">Loading profile...</Typography>
        </ProfileContainer>
      </AppTheme>
    );
  }

  return (
    <AppTheme>
      <CssBaseline />
      <ColorModeSelect sx={{ position: 'fixed', top: 16, right: 16 }} />

      <ProfileContainer>
        <BackButton onClick={() => window.history.back()}>
          <ArrowBackIcon />
        </BackButton>

        <Grid container spacing={4} justifyContent="center">
          {/* Pet info card */}
          <Grid item xs={12} md={6} lg={4}>
            <Card variant="outlined">
              {pet.mascota_fotos && pet.mascota_fotos.length > 0 && (
                <CardMedia
                  component="img"
                  height="240"
                  image={pet.mascota_fotos[0]}
                  alt={pet.mascota_nombre}
                />
              )}
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {pet.mascota_nombre}
                </Typography>
                <Stack direction="row" spacing={1} mb={2}>
                  <Chip label={pet.tipo_mascota || 'Sin tipo'} />
                  <Chip label={`${pet.mascota_edad} años`} />
                </Stack>
                <Typography variant="body1" paragraph>
                  {pet.mascota_descripcion}
                </Typography>

                <Typography variant="h6" gutterBottom>
                  Dueño
                </Typography>
                <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                  <Avatar>
                    {pet.cliente_nombre.charAt(0)}
                  </Avatar>
                  <Typography>{pet.cliente_nombre}</Typography>
                </Stack>
                <Typography variant="body2">
                  Email: {pet.cliente_email}
                </Typography>
                <Typography variant="body2">
                  Teléfono: {pet.cliente_telefono}
                </Typography>
                {pet.cliente_direccion && (
                  <Typography variant="body2">
                    Dirección: {pet.cliente_direccion}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Photo gallery card */}
          {pet.mascota_fotos && pet.mascota_fotos.length > 1 && (
            <Grid item xs={12} md={6} lg={4}>
              <Card variant="outlined" sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Fotos
                </Typography>
                <Grid container spacing={2}>
                  {pet.mascota_fotos.map((url, i) => (
                    <Grid key={i} item xs={6} sm={4}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={url}
                        alt={`${pet.mascota_nombre} foto ${i + 1}`}
                        sx={{ borderRadius: 2 }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </Grid>
          )}
        </Grid>
      </ProfileContainer>
    </AppTheme>
  );
}