import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

export default function AppMay() {
  return (
    <View style={styles.container}>
      <View style={styles.informacion}>
        <Image
          style={styles.imagen}
          source={require('./assets/artista desconocido.jpg')} 
        />
        <View style={styles.autor}>
            <Image
              source={require('./assets/Perfil.jpeg')}
              style={styles.perfil}
            />
            <View style={styles.profile}>
              <Text style={styles.name}>Luis Lovo</Text>
              <Text style={styles.time}>12 hours ago</Text>
            </View>
            <Text>🔔</Text>
          </View>
        <Text style={styles.titulo}>Bad Bunny en El Salvador</Text>
        <Text style={styles.info}>La gira del artista puertorriqueño lo ha llevado a diferentes ciudades de Latinoamérica, este sábado finalmente será el turno de nuestro país.</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.texto}>📍 Estadio Cuscatlán</Text>
          <Text style={styles.texto}>📅 Dom, 30 de Mar</Text>
          <Text style={styles.texto}>🖤 Tickets disponibles!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  informacion: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowRadius: 2,
    elevation: 5,
    padding: 15,
    width: 280,
  },
  imagen: {
    width: 250,
    height: 300,
    borderRadius: 5,
    marginBottom: 15,
  },
  autor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profile: {
    flex: 1, 
  },
  perfil: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    color: 'gray',
    fontSize: 12,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  info: {
    fontSize: 13,
    marginBottom: 15,
  },
  infoContainer: {
    marginBottom: 5,
  },
  texto: {
    fontSize: 14,
    marginBottom: 5,
  },
};
