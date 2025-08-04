// src/services/usuariosService.js
import axios from 'axios'

// Crea una instancia de Axios con la URL base de backend
const API = axios.create({
  baseURL: 'http://localhost:3000/api',
})

// Agregar token automáticamente a cada request si existe
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Función: Registrar usuario ,accede a rita en el backend
export async function registrarUsuario(usuario) {
  try {
    const res = await API.post('/usuarios/registrousuario', usuario)
    return res.data
  } catch (err) {
    throw err.response?.data || err
  }
}

// Función: Obtener supervisores
export async function obtenerSupervisores() {
  try {
    const res = await API.get('/usuarios/supervisores')
    return res.data
  } catch (err) {
    throw err.response?.data || err
  }
}

export default API